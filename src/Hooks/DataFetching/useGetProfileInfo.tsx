import { ProfileCardLargeProps } from "@/Components/Card/ProfileCardLarge";
import { firestore } from "@/Components/Firebase/ClientApp";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Draft } from "../Blog/useCreateNewArticle";

function useGetProfileDetails(profile: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profileArticles, setProfileArticles] = useState<Draft[]>([]);
  const [profileDetails, setProfileDetails] = useState<ProfileCardLargeProps>({
    email: "",
    imageUrl: "",
    userId: "",
    userDN: "",
    Bio: "",
    twitter: "",
  });

  async function getProfileDetails() {
    const profileRef = doc(firestore, "users", profile);
    try {
      const profileDoc = await getDoc(profileRef);
      if (profileDoc.exists()) {
        setProfileDetails({ ...(profileDoc.data() as ProfileCardLargeProps) });
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  }

  async function getProfileArticles() {
    const profileQuerry = await getDocs(
      collection(firestore, "users", profile, "drafts")
    );
    const articleSnapshot = profileQuerry.docs.map(
      (doc, index) =>
        ({
          ...doc.data(),
        } as Draft)
    );
    setProfileArticles(articleSnapshot);
    setLoading(false);
  }

  return {
    loading,
    profileArticles,
    profileDetails,
    error,
    getProfileArticles,
    getProfileDetails,
  };
}
export default useGetProfileDetails;
