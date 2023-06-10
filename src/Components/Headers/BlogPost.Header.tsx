import { Flex, Icon, Text, Heading } from "@chakra-ui/react";
import { CiCircleChevDown } from "react-icons/ci";
import ProfileCardMini from "../Card/ProfileCardMini";
import { Draft } from "@/Hooks/Blog/useCreateNewArticle";
type BlogPostHeaderProps = Omit<Draft, "articleContent" | "articleSlug">;
const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  articleDesc = "What Is Meant By Lorem Ipsum In Website? The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website",
  articleThumbnail,
  articleTitle = "The mystery behind lorem ipsum, origin, uses and everything inbetween",
}) => {
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
            {articleTitle}
          </Heading>
          <Flex
            width={{ base: "100%", md: "80%", lg: "80%" }}
            color={"gray.300"}
            my={"5"}
            fontWeight={"700"}
          >
            <Text>{articleDesc}</Text>
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

        <Icon as={CiCircleChevDown} fontSize={"4xl"} my={"7"} />
      </Flex>
    </>
  );
};
export default BlogPostHeader;
