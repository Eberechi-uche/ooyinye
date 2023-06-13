import { Article, articleAtom } from "@/Atoms/ArticleAtom";
import { authUserAtom } from "@/Atoms/AuthUserAtom";
import { CommentData } from "@/Components/Comments/Comment";
import { auth, firestore } from "@/Components/Firebase/ClientApp";
import { useToast } from "@chakra-ui/react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";

export const useArticleData = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast({});
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);
  const [article, setCurrentArticle] = useRecoilState(articleAtom);
  const setAuthUserAtom = useSetRecoilState(authUserAtom);
  const userID = `@${user?.email?.split("@")[0]}`;

  //  GET ARTICLE COMMENTS
  const getArticleComment = async (articleId: string) => {
    const commentRef = collection(firestore, "Articles", articleId, "comments");
    const commentDocs = await getDocs(commentRef);
    const commentArray = commentDocs.docs.map((doc) => {
      return {
        ...(doc.data() as CommentData),
      };
    });
    return commentArray;
  };
  const getArticle = async (publishedId: string) => {
    setLoading(true);
    setError("");
    const articleRef = doc(firestore, "Articles", `${publishedId}`);

    try {
      const docSnap = await getDoc(articleRef);
      setLoading(false);
      setCurrentArticle({
        articleID: docSnap.id,
        ...(docSnap.data() as Article),
      });
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  // ADD COMMENT
  const addComment = async (articleId: string, comment: CommentData) => {
    setLoading(true);
    const articleRef = collection(firestore, "Articles", articleId, "comments");
    try {
      const docRef = await addDoc(articleRef, comment);
      const commentRef = doc(
        firestore,
        "Articles",
        articleId,
        "comments",
        `${docRef.id}`
      );
      await updateDoc(commentRef, {
        commentId: `${docRef.id}`,
      });
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      console.log(error.message, "from add comment");
    }
    setLoading(false);
  };

  // ADD LIKES
  const likeArticle = async (articleId: string) => {
    const articleRef = doc(firestore, "Articles", `${articleId}`);
    updateDoc(articleRef, {
      likes: increment(1),
    });
  };

  // ADD SAVED ARTICLES

  const saveArticle = async (article: Article) => {
    const articleDocRef = doc(
      firestore,
      "users",
      userID,
      "savedArticles",
      `${article.articleID!}`
    );

    try {
      const savedArticleID = await getDoc(articleDocRef);
      if (savedArticleID.exists()) {
        toast({
          title: "Article Already saved",
          description: `${article.articleTitle}`,
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        return;
      }
      await setDoc(articleDocRef, article);
    } catch (error: any) {
      console.log(error.message, "from saved article");
    }
    toast({
      title: "Article Saved",
      description: `${article.articleTitle}`,
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top",
    });

    setAuthUserAtom((prev) => ({
      ...prev,
      Bookmarks: [...prev.Bookmarks, article],
    }));
  };

  return {
    getArticleComment,
    addComment,
    getArticle,
    likeArticle,
    loading,
    saveArticle,
  };
};
