import { atom } from "recoil";

type Draft = {
  articleTitle: string;
  articleDesc: string;
  articleThumbnail: string;
  articleSlug: string;
  articleContent: string;
  lockTitle: boolean;
  published: string;
};

const defaultDraftState: Draft = {
  articleDesc: "",
  articleSlug: "",
  articleThumbnail: "",
  articleTitle: "",
  articleContent: "",
  lockTitle: false,
  published: "",
};

export const draftAtom = atom<Draft>({
  key: "DraftAtom",
  default: defaultDraftState,
});
