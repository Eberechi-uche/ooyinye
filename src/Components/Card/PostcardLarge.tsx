import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsBookmark, BsBookmarkPlus, BsClock } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import CardProfileMini, { ProfileCardMiniProps } from "./ProfileCardMini";
import { IoBookmarkSharp } from "react-icons/io5";
import { Draft } from "@/Hooks/Blog/useCreateNewArticle";
type PostcardLargeProps = {
  showProfile: boolean;
};
const PostcardLarge: React.FC<
  PostcardLargeProps & Draft & ProfileCardMiniProps
> = (props) => {
  const route = useRouter();
  return (
    <>
      <Flex width={"85%"} borderColor={"gray.50"} flexDir={"column"} my={"5"}>
        <Flex
          maxH={"170px"}
          minH={"170px"}
          width={"100%"}
          position={"relative"}
          mb={"2"}
        >
          <Image
            src={props.articleThumbnail}
            objectFit={"cover"}
            width={"100%"}
            alt={"user-profile"}
            borderRadius={"2px"}
          />
        </Flex>
        <CardProfileMini
          profileId={props.profileId}
          displayName={props.displayName}
          imageUrl={props.imageUrl}
        />

        <Flex
          flexDir={"column"}
          my={"1"}
          onClick={() => {
            route.push(`/article/${"@eb3rechi"}/${props.articleSlug}`);
          }}
        >
          <Text
            fontWeight={"900"}
            textTransform={"capitalize"}
            my={"2"}
            fontSize={"lg"}
          >
            {props.articleTitle}
          </Text>
          <Text noOfLines={3} fontWeight={"500"} color={"gray.500"}>
            {props.articleDesc}
          </Text>

          <Flex
            width={"100%"}
            fontWeight={"200"}
            justify={"space-between"}
            align={"center"}
            my={"2"}
          >
            <Flex>
              <Text fontSize={"xs"} my={"2"} textTransform={"uppercase"}>
                26 may, 2022
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                mx={"2"}
                fontSize={"xs"}
              >
                10min Read
              </Text>
            </Flex>
            <Icon as={BsBookmark} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default PostcardLarge;
