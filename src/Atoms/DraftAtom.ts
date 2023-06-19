import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Draft = {
  articleTitle: string;
  articleDesc: string;
  articleThumbnail: string;
  articleSlug: string;
  articleContent: string;
  lockTitle?: boolean | undefined;
  published: string;
  authorId?: string;
  authorDN?: string;
  readTime: number;
  authorImageUrl?: string;
  publishDate?: Timestamp;
};

const defaultDraftState: Draft = {
  articleDesc: "",
  articleSlug: "",
  articleThumbnail: "",
  articleTitle: "",
  articleContent: "",
  lockTitle: false,
  published: "",
  readTime: 0,
};

export const draftAtom = atom<Draft>({
  key: "DraftAtom",
  default: defaultDraftState,
});
