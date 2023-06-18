import { ProfileCardMiniProps } from "@/Components/Card/ProfileCardMini";
import { Article } from "./ArticleAtom";
import { atom } from "recoil";
import { UserSnippet } from "@/Hooks/Profile/useProfileData";

type AuthUserAtom = {
  Bookmarks: Article[];
  following: UserSnippet[];
  updated: boolean;
};
const defaultAuthUserAtomState: AuthUserAtom = {
  Bookmarks: [],
  following: [],
  updated: false,
};
export const authUserAtom = atom<AuthUserAtom>({
  key: "authUserAtom",
  default: defaultAuthUserAtomState,
});
