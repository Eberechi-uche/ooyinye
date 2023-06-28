import { Topic } from "@/pages/explore";
import { atom } from "recoil";
const defaultExploreState: Topic = {
  id: "",
  imageUrl: "",
  desc: "",
  bgColor: "",
};
const exploreAtom = atom<Topic>({
  key: "explore",
  default: defaultExploreState,
});
export default exploreAtom;
