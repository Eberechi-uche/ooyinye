import { atom } from "recoil";

type Draft = {
  articleTitle: string;
  articleDesc: string;
  articleThumbnail: string;
  articleSlug: string;
  articleContent: string;
  lockTitle: boolean;
};

const defaultDraftState: Draft = {
  articleDesc: "",
  articleSlug: "",
  articleThumbnail: "",
  articleTitle: "",
  articleContent: "",
  lockTitle: false,
};

export const draftAtom = atom<Draft>({
  key: "DraftAtom",
  default: defaultDraftState,
});
