import { Flex, Icon } from "@chakra-ui/react";
import {
  CiCompass1,
  CiCirclePlus,
  CiSearch,
  CiViewList,
  CiUser,
  CiShare1,
  CiHeart,
  CiChat2,
  CiDollar,
} from "react-icons/ci";
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
        <Icon as={CiShare1} fontSize={"2xl"} />
        <Icon as={CiHeart} fontSize={"2xl"} />
        <Icon as={CiChat2} fontSize={"2xl"} onClick={onOpen} />
        <Icon as={CiDollar} fontSize={"2xl"} />
      </Flex>
    </>
  );
};
export default BlogNavFooter;
