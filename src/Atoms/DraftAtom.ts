import { atom } from "recoil";

type Draft = {
  articleTitle: string;
  articleDesc: string;
  articleThumbnail: string;
  articleSlug: string;
  articleContent: string;
};

const defaultDraftState: Draft = {
  articleDesc: "",
  articleSlug: "",
  articleThumbnail: "",
  articleTitle: "",
  articleContent: "",
};

export const draftAtom = atom<Draft>({
  key: "DraftAtom",
  default: defaultDraftState,
});
