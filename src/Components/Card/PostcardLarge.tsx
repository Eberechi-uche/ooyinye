import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsBookmark } from "react-icons/bs";
import CardProfileMini, { ProfileCardMiniProps } from "./ProfileCardMini";
import { Draft } from "@/Atoms/DraftAtom";
import { AddbookMarkIcon } from "../Icons/Icons";
import { Article } from "@/Atoms/ArticleAtom";
import moment from "moment";

type PostcardLargeProps = {
  showProfile: boolean;
};
const PostcardLarge: React.FC<
  PostcardLargeProps & Article & ProfileCardMiniProps
> = (props) => {
  const route = useRouter();
  return (
    <>
      <Flex width={"85%"} borderColor={"gray.50"} flexDir={"column"} my={"5"}>
        <Flex width={"100%"} position={"relative"} mb={"2"}>
          <Image
            src={props.articleThumbnail}
            objectFit={"cover"}
            width={"100%"}
            h={"100%"}
            maxH={"200px"}
            alt={"user-profile"}
            borderRadius={"2px"}
            loading={"lazy"}
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
            route.push(`/article/${props.authorId}/${props.articleSlug}`);
          }}
        >
          <Text
            fontWeight={"600"}
            textTransform={"capitalize"}
            my={"2"}
            fontSize={"lg"}
          >
            {props.articleTitle}
          </Text>
          <Text noOfLines={3} fontWeight={"500"} color={"blackAlpha.500"}>
            {props.articleDesc}
          </Text>

          <Flex
            width={"100%"}
            fontWeight={"200"}
            justify={"space-between"}
            align={"center"}
            my={"2"}
          >
            <Flex
              fontSize={"xs"}
              fontWeight={"600"}
              textTransform={"uppercase"}
              color={"blackAlpha.600"}
            >
              <Text>
                {moment(new Date(props.publishDate!.seconds * 1000)).fromNow()}
              </Text>
              <Text display={"flex"} alignItems={"center"} mx={"2"}>
                {props.readtime} min read
              </Text>
            </Flex>
            <AddbookMarkIcon value="" {...(props as Article)} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default PostcardLarge;
