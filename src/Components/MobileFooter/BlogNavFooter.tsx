import { Flex } from "@chakra-ui/react";

import { CommentsIcon, HomeIcon, ShareIcon } from "../Icons/Icons";
type BlogNavFooterProp = {
  onOpen: () => void;
};
const BlogNavFooter: React.FC<BlogNavFooterProp> = ({ onOpen }) => {
  return (
    <>
      <Flex
        width={"100%"}
        justify={"space-between"}
        px={"2"}
        height={"50px"}
        bg={"#fff"}
        align={"center"}
        zIndex={"10"}
        position={"fixed"}
        bottom={"0"}
        display={{ base: "flex", md: "none" }}
      >
        <HomeIcon value="home" />
        <ShareIcon value={undefined} />
        <CommentsIcon value={undefined} onOpen={onOpen} />
      </Flex>
    </>
  );
};
export default BlogNavFooter;
