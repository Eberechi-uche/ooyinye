import { Flex, Image, Text, Icon } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { BsDot, BsFillPinFill, BsBookmark } from "react-icons/bs";

import ProfileCardMini from "./ProfileCardMini";
import { useSetRecoilState } from "recoil";
import { Article, articleAtom } from "@/Atoms/ArticleAtom";

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
        borderColor={"whiteAlpha.900"}
        width={"100%"}
        cursor={"pointer"}
      >
        {profile ? (
          <Flex width={"100%"} justify={"space-between"}>
            <Text> date</Text> <Icon as={BsFillPinFill} />
          </Flex>
        ) : (
          <Flex align={"center"}>
            <Flex flexDir={"column"} width={"100%"}>
              {props.showProfile && (
                <ProfileCardMini
                  displayName={props.authorDN}
                  profileId={props.authorId}
                  imageUrl={props.authorImageUrl}
                />
              )}
              <PostCardArticleView />
            </Flex>
          </Flex>
        )}

        <Flex
          align={"center"}
          mt={"2"}
          fontSize={{ base: "md", md: "lg" }}
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
            <Text fontWeight={"900"} noOfLines={[3, 4]}>
              {props.articleTitle}
            </Text>
          </Flex>

          <Image
            alt={"postImage"}
            src={props.articleThumbnail}
            width={{ base: "70px", md: "15%" }}
            height={{ base: "50px", md: "70px" }}
            objectFit={"cover"}
            alignSelf={"flex-start"}
          />
        </Flex>
      </Flex>
    </>
  );
};

const PostCardArticleView: React.FC = () => {
  return (
    <>
      <Flex align={"center"} justify={"space-between"}>
        <Flex>
          <Text fontSize={"12px"} display={"flex"} alignItems={"center"}>
            1st April
          </Text>
          <Text
            fontSize={"12px"}
            display={"flex"}
            alignItems={"center"}
            textTransform={"uppercase"}
          >
            <Icon as={BsDot} mx={"2"} />8 min read
          </Text>
        </Flex>

        <Flex>
          <Icon as={BsBookmark} />
        </Flex>
      </Flex>
    </>
  );
};
export default PostCard;
