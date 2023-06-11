import { setDoc, doc } from "firebase/firestore";
import { auth, firestore, storage } from "../../Components/Firebase/ClientApp";
import { useToast } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import { NewArticleProps } from "@/Components/userStudio/CreateArticle";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { authModalState } from "@/Atoms/AuthModalAtom";

export type Draft = {
  articleDesc: string;
  articleSlug: string;
  articleTitle: string;
  articleThumbnail: string;
  articleContent: string;
};

export const useCreateNewArticle = () => {
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    };

    try {
      const userDraftRef = doc(
        firestore,
        "users",
        `@${user?.email?.split("@")[0]}`,
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
  const publishArticle = () => {};
  return {
    saveArticle,
    loading,
    error,
    publishArticle,
  };
};
