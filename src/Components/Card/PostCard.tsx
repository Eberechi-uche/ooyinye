import { Flex, Image, Text, Icon } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { BsDot, BsFillPinFill, BsBookmark } from "react-icons/bs";

import ProfileCardMini from "./ProfileCardMini";
import { useSetRecoilState } from "recoil";
import { Article, articleAtom } from "@/Atoms/ArticleAtom";
import { AddbookMarkIcon } from "../Icons/Icons";
import moment from "moment";

type PostCardProps = {
  showProfile: boolean;
};

const PostCard: React.FC<PostCardProps & Article> = (props) => {
  const route = useRouter();
  const { profile } = route.query;

  const setCurrentArticle = useSetRecoilState(articleAtom);
  return (
    <>
      <Flex
        flexDir={"column"}
        py={"5"}
        px={"5"}
        borderBottom={"1px solid"}
        borderColor={"blackAlpha.200"}
        width={"100%"}
        cursor={"pointer"}
      >
        {props.showProfile && (
          <ProfileCardMini
            displayName={props.authorDN}
            profileId={props.authorId}
            imageUrl={props.authorImageUrl}
          />
        )}
        <Flex
          align={"center"}
          mt={"2"}
          fontSize={{ base: "sm", md: "md" }}
          justify={"space-between"}
          width={"100%"}
          onClick={() => {
            setCurrentArticle({
              ...props,
            });
            route.push(`/article/${props.authorId}/${props.articleSlug}`);
          }}
        >
          <Flex
            flexDir={"column"}
            alignSelf={"flex-start"}
            height={"fit-content"}
            width={"70%"}
          >
            <Text fontWeight={"700"} noOfLines={[3, 4]} fontSize={"md"}>
              {props.articleTitle}
            </Text>
          </Flex>

          <Image
            alt={"postImage"}
            src={props.articleThumbnail}
            width={{ base: "70px", md: "20%" }}
            height={{ base: "50px", md: "70px" }}
            objectFit={"cover"}
            alignSelf={"flex-start"}
            loading={"lazy"}
            borderRadius={"3px"}
          />
        </Flex>
        {profile ? (
          <Flex width={"100%"} justify={"space-between"}>
            <Text> date</Text> <Icon as={BsFillPinFill} />
          </Flex>
        ) : (
          <Flex align={"center"}>
            <Flex flexDir={"column"} width={"100%"}>
              <PostCardArticleView {...props} />
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const PostCardArticleView: React.FC<Article> = (props: Article) => {
  return (
    <>
      <Flex
        align={"center"}
        justify={"space-between"}
        my={"1"}
        fontWeight={"900"}
        color={"blackAlpha.500"}
      >
        <Flex fontSize={"2xs"} textTransform={"uppercase"}>
          <Text display={"flex"} alignItems={"center"} fontSize={"inherit"}>
            {moment(new Date(props.publishDate!.seconds * 1000)).fromNow()}
          </Text>
          <Text display={"flex"} alignItems={"center"} fontSize={"inherit"}>
            <Icon as={BsDot} mx={"2"} />
            {props.readtime} min read
          </Text>
        </Flex>

        <Flex>
          <AddbookMarkIcon
            value=""
            size="xl"
            {...props}
            readtime={props.readtime}
            articleID={props.articleID!}
          />
        </Flex>
      </Flex>
    </>
  );
};
export default PostCard;
