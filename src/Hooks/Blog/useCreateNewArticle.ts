import {
  setDoc,
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import { auth, firestore, storage } from "../../Components/Firebase/ClientApp";
import { useToast } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { NewArticleProps } from "@/Components/userStudio/CreateArticle";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { authModalState } from "@/Atoms/AuthModalAtom";
import { Article } from "@/Atoms/ArticleAtom";

export type Draft = {
  articleDesc: string;
  articleSlug: string;
  articleTitle: string;
  articleThumbnail: string;
  articleContent: string;
  published: string;
};

export const useCreateNewArticle = () => {
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState("");
  const [error, setError] = useState("");
  const userId = `@${user?.email?.split("@")[0]}`;
  const saveArticle = async (
    article: NewArticleProps,
    articleContent: string
  ) => {
    if (
      !article.articleSlug ||
      !article.articleDesc ||
      !article.articleThumbnail
    ) {
      toast({
        description: "ensure  all article fields are  filled ",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!user) {
      setAuthState({ view: "Login", open: true });
      return;
    }
    toast({
      description: "saving Article",
      position: "top",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    setError("");
    setLoading(true);

    let imageUrl = article.articleThumbnail;
    if (article.articleThumbnail.includes("data")) {
      const imageRef = ref(
        storage,
        `articleImages/${article.articleSlug}/thumbnail`
      );
      await uploadString(imageRef, article.articleThumbnail, "data_url");
      imageUrl = await getDownloadURL(imageRef);
    }

    const draft: Draft = {
      articleDesc: article.articleDesc,
      articleSlug: article.articleSlug,
      articleTitle: article.articleTitle,
      articleThumbnail: imageUrl,
      articleContent,
      published: "",
    };

    try {
      const userDraftRef = doc(
        firestore,
        "users",
        `@${userId}`,
        "drafts",
        `${article.articleSlug}`
      );

      await setDoc(userDraftRef, draft);
      toast({
        description: " Article saved",
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message), setLoading(false);
    }
  };

  // Publish Article
  const publishArticle = async (draft: Draft) => {
    setPublishing(draft.articleSlug);
    if (!user) {
      setAuthState({
        view: "Login",
        open: true,
      });
      setPublishing("");
      return;
    }

    toast({
      description: "Publishing",
      position: "top",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
    const draftRef = doc(
      firestore,
      "users",
      `${userId}`,
      "drafts",
      draft.articleSlug
    );
    const DraftDoc = await getDoc(draftRef);
    if (!DraftDoc.exists()) {
      toast({
        description: "Please save Article Before Publishing",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return "error";
    }

    const publishDoc: Article = {
      authorDN: user.displayName!,
      authorId: userId,
      authorImageUrl: user.photoURL!,
      likes: 0,
      comments: 0,
      readtime: "2",
      articleDesc: draft.articleDesc,
      articleSlug: draft.articleSlug,
      articleThumbnail: draft.articleThumbnail,
      articleTitle: draft.articleTitle,
    };

    try {
      const articleRef = await addDoc(
        collection(firestore, "Articles"),
        publishDoc
      );
      await updateDoc(draftRef, { published: articleRef.id });
    } catch (error: any) {
      console.log(error.message);
      setPublishing("");
      setError(error.message);
      return "error";
    }
    toast({
      description: "Article Published",
      position: "top",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setPublishing("");

    return "Published";
  };
  return {
    saveArticle,
    loading,
    error,
    publishArticle,
    publishing,
  };
};
