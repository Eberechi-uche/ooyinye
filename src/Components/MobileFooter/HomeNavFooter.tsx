import { Flex, Icon } from "@chakra-ui/react";
import {
  CiCompass1,
  CiCirclePlus,
  CiSearch,
  CiViewList,
  CiUser,
} from "react-icons/ci";

const HomeNavFooter: React.FC = () => {
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
        display={{ base: "flex", lg: "none" }}
      >
        <Icon as={CiCompass1} fontSize={"2xl"} />
        <Icon as={CiSearch} fontSize={"2xl"} />
        <Icon as={CiCirclePlus} fontSize={"4xl"} color={"blue.600"} />
        <Icon as={CiViewList} fontSize={"2xl"} />
        <Icon as={CiUser} fontSize={"2xl"} />
      </Flex>
    </>
  );
};
export default HomeNavFooter;
