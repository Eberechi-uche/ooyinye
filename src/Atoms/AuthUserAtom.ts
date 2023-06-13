import { ProfileCardMiniProps } from "@/Components/Card/ProfileCardMini";
import { Article } from "./ArticleAtom";
import { atom } from "recoil";

type AuthUserAtom = {
  Bookmarks: Article[];
  following: ProfileCardMiniProps[];
};
const defaultAuthUserAtomState: AuthUserAtom = {
  Bookmarks: [],
  following: [],
};
export const authUserAtom = atom<AuthUserAtom>({
  key: "authUserAtom",
  default: defaultAuthUserAtomState,
});
