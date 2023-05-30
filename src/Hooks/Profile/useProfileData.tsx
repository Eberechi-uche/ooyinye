import { auth, firestore, storage } from "@/Components/Firebase/ClientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, doc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export type UserDetails = {
  Bio: string;
  twitter: string;
  email: string;
};
export const useProfileData = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [updateError, setUpdateError] = useState("");

  const updateUserBio = async (data: UserDetails) => {
    setLoading(true);
    try {
      await setDoc(
        doc(firestore, "users", `@${user?.email?.split("@")[0]}`),
        data,
        { merge: true }
      );
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
      setUpdateError(error.message);
    }
    setLoading(false);
  };
  const updateUserDp = async (photo: string) => {
    setLoading(true);
    try {
      const imageRef = ref(
        storage,
        `profilePicture/@${user?.email?.split("@")[0]}/image}`
      );
      await uploadString(imageRef, photo, "data_url");
    } catch (error: any) {
      console.log(error.message);
      setUpdateError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  return {
    updateUserBio,
    updateUserDp,
    loading,
    updateError,
  };
};
