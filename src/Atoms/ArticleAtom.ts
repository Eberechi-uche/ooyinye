import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Article = {
  authorId: string;
  authorDN: string;
  authorImageUrl: string;
  articleTitle: string;
  articleDesc: string;
  articleThumbnail: string;
  articleSlug: string;
  tag?: string;
  readtime: number;
  publishDate?: Timestamp;
  bgColor?: string;
  likes?: number;
  comments?: number;
  savedID?: number;
  articleID?: string;
};

const defaultArticleState: Article = {
  authorId: "",
  authorDN: "",
  authorImageUrl: "",
  articleTitle: "",
  articleDesc: "",
  articleThumbnail: "",
  articleSlug: "",
  readtime: 0,
  bgColor: "",
  likes: 0,
  comments: 0,
};
export const articleAtom = atom<Article>({
  key: "articleAtom",
  default: defaultArticleState,
});
