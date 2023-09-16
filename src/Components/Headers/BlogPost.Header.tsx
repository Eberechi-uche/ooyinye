import { Flex, Icon, Text, Heading } from "@chakra-ui/react";
import { CiCircleChevDown } from "react-icons/ci";
import ProfileCardMini, { ProfileCardMiniProps } from "../Card/ProfileCardMini";
import { AiOutlineEllipsis } from "react-icons/ai";
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
      >
        <Flex flexDir={"column"}>
          <Text fontWeight={"900"} fontSize={{ base: "2xl", md: "4xl" }}>
            {props.articleTitle}
          </Text>
          <Flex color={"blackAlpha.600"} my={"5"} fontWeight={"700"}>
            <Text>{props.articleDesc}</Text>
          </Flex>
          <Flex
            justify={"space-evenly"}
            mt={"2"}
            flexDir={"column"}
            fontSize={"xs"}
          >
            <Icon
              as={AiOutlineEllipsis}
              fontSize={"4xl"}
              my={"7"}
              color={"#f2f2f2"}
              alignSelf={"center"}
            />
            <ProfileCardMini
              profileId={props.profileId}
              imageUrl={props.imageUrl}
              displayName={props.displayName}
              size="30px"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default BlogPostHeader;
