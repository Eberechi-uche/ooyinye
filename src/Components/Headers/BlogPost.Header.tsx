import { Flex, Icon, Text, Heading } from "@chakra-ui/react";
import { CiCircleChevDown } from "react-icons/ci";
import ProfileCardMini, { ProfileCardMiniProps } from "../Card/ProfileCardMini";
import { Draft } from "@/Hooks/Blog/useCreateNewArticle";
type BlogPostHeaderProps = {
  articleDesc: string;
  articleTitle: string;
};
const BlogPostHeader: React.FC<BlogPostHeaderProps & ProfileCardMiniProps> = (
  props
) => {
  return (
    <>
      <Flex
        width={"100%"}
        flexDir={"column"}
        p={"2"}
        minHeight={{ base: "100vh", md: "85vh" }}
        bg={"blackAlpha.900"}
        align={"center"}
        textAlign={"center"}
        justify={"space-between"}
        color={"gray.100"}
      >
        <Flex flexDir={"column"} align={"center"} mt={"20%"}>
          <Heading fontWeight={"700"} fontSize={"2xl"}>
            {props.articleTitle}
          </Heading>
          <Flex
            width={{ base: "100%", md: "80%", lg: "80%" }}
            color={"gray.300"}
            my={"5"}
            fontWeight={"700"}
          >
            <Text>{props.articleDesc}</Text>
          </Flex>
          <Flex
            align={"center"}
            justify={"space-evenly"}
            mt={"2"}
            flexDir={"column"}
            fontSize={"xs"}
          >
            <Text> by</Text>
            <ProfileCardMini
              profileId={props.profileId}
              imageUrl={props.imageUrl}
              displayName={props.displayName}
            />
            <Text> 26 may 2023</Text>
          </Flex>
        </Flex>

        <Icon as={CiCircleChevDown} fontSize={"4xl"} my={"7"} />
      </Flex>
    </>
  );
};
export default BlogPostHeader;
