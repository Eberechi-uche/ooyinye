import { Flex, Icon, Text, Heading } from "@chakra-ui/react";
import { CiCircleChevDown } from "react-icons/ci";
import ProfileCardMini, { ProfileCardMiniProps } from "../Card/ProfileCardMini";
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
        textAlign={"left"}
        mb={"5"}
        alignSelf={"center"}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
      >
        <Flex flexDir={"column"}>
          <Heading fontWeight={"900"} fontSize={"4xl"}>
            {props.articleTitle}
          </Heading>
          <Flex color={"blackAlpha.600"} my={"5"} fontWeight={"700"}>
            <Text>{props.articleDesc}</Text>
          </Flex>
          <Flex
            justify={"space-evenly"}
            mt={"2"}
            flexDir={"column"}
            fontSize={"xs"}
          >
            <ProfileCardMini
              profileId={props.profileId}
              imageUrl={props.imageUrl}
              displayName={props.displayName}
              size="50px"
            />
          </Flex>
        </Flex>

        <Icon
          as={CiCircleChevDown}
          fontSize={"5xl"}
          my={"7"}
          color={"gray.300"}
          alignSelf={"center"}
        />
      </Flex>
    </>
  );
};
export default BlogPostHeader;
