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
  readtime: string;
  date?: Date;
  bgColor?: string;
  articleId: string;
  likes: number;
  comments: number;
};

const defaultArticleState: Article = {
  authorId: "",
  authorDN: "",
  authorImageUrl: "",
  articleTitle: "",
  articleDesc: "",
  articleThumbnail: "",
  articleSlug: "",
  readtime: "",
  bgColor: "",
  articleId: "",
  likes: 0,
  comments: 0,
};
export const articleAtom = atom<Article>({
  key: "articleAtom",
  default: defaultArticleState,
});
