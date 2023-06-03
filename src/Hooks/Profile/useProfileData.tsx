import { auth, firestore, storage } from "@/Components/Firebase/ClientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc, doc, writeBatch } from "firebase/firestore";
import { useState } from "react";
import { ref, uploadString } from "firebase/storage";
import { User } from "firebase/auth";

export type UserDetails = {
  Bio: string;
  twitter: string;
  email: string;
};

export type UserSnippet = {
  userID: string;
  userDN: string;
  imagerUrl: string;
};

const follow = async (userProfile: UserSnippet, authUser: User) => {
  const batch = writeBatch(firestore);
  const authUserSnippet: UserSnippet = {
    imagerUrl: authUser.photoURL!,
    userDN: authUser.displayName!,
    userID: `@${authUser.email?.split("@")[0]}`,
  };
  const userProfileRef = doc(
    firestore,
    "users",
    `@${authUser.email?.split("@")[0]}`,
    "following",
    `${userProfile.userID}`
  );

  const followedUserRef = doc(
    firestore,
    "users",
    `${userProfile.userID}`,
    "followers",
    `@${authUser.email?.split("@")[0]}`
  );
  try {
    batch.set(userProfileRef, userProfile);
    batch.set(followedUserRef, authUserSnippet);
  } catch (error: any) {
    console.log(error.message);
  }
  await batch.commit();
};

const unFollow = () => {};
export const useProfileData = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [updateError, setUpdateError] = useState("");

  const updateUserBio = async (data: UserDetails) => {
    setLoading(true);
    if (!user) {
      return;
    }
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
    setUpdateError("");
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
  const onClickFollow = async (userProfile: UserSnippet) => {
    setLoading(true);
    await follow(userProfile, user!);
    setLoading(false);
  };

  return {
    updateUserBio,
    updateUserDp,
    loading,
    updateError,
    onClickFollow,
  };
};
