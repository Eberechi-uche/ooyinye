import { ProfileCardMiniProps } from "@/Components/Card/ProfileCardMini";
import { firestore } from "@/Components/Firebase/ClientApp";
import { collection, doc, getDocs, limit, query } from "firebase/firestore";
import { useState } from "react";
import { UserSnippet } from "../Profile/useProfileData";

const useGetCollection = () => {
  const [collectionData, setCollectionData] = useState<UserSnippet[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getCollection = async (profile: string, collectionEndPoint: string) => {
    const CollectionRef = collection(
      firestore,
      "users",
      profile,
      collectionEndPoint
    );
    try {
      const querrySnapShot = await getDocs(CollectionRef);
      const querryData = querrySnapShot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCollectionData(querryData as UserSnippet[]);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };

  const getAllCollection = async () => {
    const collactionRef = query(collection(firestore, "users"), limit(5));

    try {
      const userSnap = await getDocs(collactionRef);
      const usersData = userSnap.docs.map((user) => ({
        ...(user.data() as UserSnippet),
      }));
      setCollectionData(usersData);
    } catch (error: any) {
      console.log("getAllCollection", error.message);
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  return {
    getCollection,
    getAllCollection,
    collectionData,
    loading,
    error,
  };
};
export default useGetCollection;
