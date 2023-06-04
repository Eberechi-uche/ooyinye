import { setDoc, doc } from "firebase/firestore";
import { firestore, storage } from "../../Components/Firebase/ClientApp";

export const useCreateNewArticle = () => {
  const createArticle = () => {};
  const publishArticle = () => {};
  return {
    createArticle,
    publishArticle,
  };
};
