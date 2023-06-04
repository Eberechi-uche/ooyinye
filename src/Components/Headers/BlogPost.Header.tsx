import { Flex, Icon, Text, Heading } from "@chakra-ui/react";
import { CiCircleChevDown } from "react-icons/ci";
import ProfileCardMini from "../Card/ProfileCardMini";

const BlogPostHeader: React.FC = () => {
  return (
    <>
      <Flex
        width={"100%"}
        flexDir={"column"}
        p={"2"}
        height={{ base: "100vh", md: "100vh" }}
        bg={"blue.500"}
        align={"center"}
        textAlign={"center"}
        justify={"space-between"}
        color={"gray.100"}
      >
        <Flex flexDir={"column"} width={"80%"} align={"center"} mt={"20%"}>
          <Heading fontWeight={"500"} fontSize={"lg"}>
            The mystery behind Lorem Ipsum, History and origin
          </Heading>
          <Flex
            width={{ base: "100%", md: "80%", lg: "60%" }}
            color={"gray.300"}
          >
            <Text>
              the quick brown fox jumped over the lazy dog the quick brown fox
            </Text>
          </Flex>
          <Flex
            align={"center"}
            justify={"space-evenly"}
            mt={"2"}
            flexDir={"column"}
            fontSize={"xs"}
          >
            <Text> by</Text>
            <ProfileCardMini />
            <Text> 26 may 2023</Text>
          </Flex>
        </Flex>

        <Icon as={CiCircleChevDown} fontSize={"4xl"} mb={"30%"} />
      </Flex>
    </>
  );
};
export default BlogPostHeader;
