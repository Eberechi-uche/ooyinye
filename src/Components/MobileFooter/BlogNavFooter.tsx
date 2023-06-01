import { Flex } from "@chakra-ui/react";

import { CommentsIcon, LikeIcon, ShareIcon, SupportIcon } from "../Icons/Icons";
type BlogNavFooterProp = {
  onOpen: () => void;
};
const BlogNavFooter: React.FC<BlogNavFooterProp> = ({ onOpen }) => {
  return (
    <>
      <Flex
        width={"100%"}
        justify={"space-between"}
        px={"4"}
        height={"60px"}
        bg={"#fff"}
        align={"center"}
        zIndex={"10"}
        mx={"0"}
        position={"fixed"}
        bottom={"0"}
        display={{ base: "flex", md: "none" }}
      >
        <ShareIcon value={undefined} />
        <LikeIcon value={undefined} />
        <CommentsIcon value={undefined} onOpen={onOpen} />
        <SupportIcon value={undefined} />
      </Flex>
    </>
  );
};
export default BlogNavFooter;
