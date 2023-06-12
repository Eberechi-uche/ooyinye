import { atom } from "recoil";

export type Draft = {
  articleTitle: string;
  articleDesc: string;
  articleThumbnail: string;
  articleSlug: string;
  articleContent: string;
  lockTitle: boolean;
  published: string;
  authorId?: string;
  authorDN?: string;
  authorImageUrl?: string;
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
