import { Flex, Image, Text, Icon, Divider, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsDot, BsFillPinFill, BsBookmark } from "react-icons/bs";

import ProfileCardMini from "./ProfileCardMini";
import { Draft } from "@/Hooks/Blog/useCreateNewArticle";
import { useSetRecoilState } from "recoil";
import { draftAtom } from "@/Atoms/DraftAtom";
import { FaPencilAlt } from "react-icons/fa";

type PostCardProps = {
  showProfile: boolean;
};

const PostCard: React.FC<PostCardProps & Draft> = ({
  showProfile,
  articleDesc,
  articleSlug,
  articleTitle,
  articleContent,
  articleThumbnail,
}) => {
  const route = useRouter();
  const { profile } = route.query;

  const setDraftAtom = useSetRecoilState(draftAtom);
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
              {showProfile && <ProfileCardMini />}
              {route.asPath !== "/profile/Dashboard" ? (
                <>
                  <PostCardArticleView />
                </>
              ) : (
                <>
                  <PostCardDraft
                    articleDesc={articleDesc}
                    articleSlug={articleSlug}
                    articleTitle={articleTitle}
                    articleThumbnail={articleThumbnail}
                    articleContent={articleContent}
                  />
                </>
              )}
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
            setDraftAtom({
              articleContent: "",
              articleDesc,
              articleSlug,
              articleThumbnail,
              articleTitle,
              lockTitle: true,
            });
            route.push(`/article/${"@eb3rechi"}/${articleSlug}`);
          }}
        >
          <Flex
            flexDir={"column"}
            alignSelf={"flex-start"}
            height={"fit-content"}
            width={"70%"}
          >
            <Text fontWeight={"900"} noOfLines={[3, 4]}>
              {articleTitle}
            </Text>
          </Flex>

          <Image
            alt={"postImage"}
            src={articleThumbnail}
            width={{ base: "20%", md: "15%" }}
            height={{ base: "50px", md: "70px" }}
            objectFit={"cover"}
            alignSelf={"flex-start"}
          />
        </Flex>
      </Flex>
    </>
  );
};

const PostCardDraft: React.FC<Draft> = (props) => {
  const route = useRouter();
  const setDraftAtom = useSetRecoilState(draftAtom);

  return (
    <>
      <Flex align={"center"} justify={"space-between"} fontWeight={"900"}>
        <Flex>
          <Text fontSize={"md"} display={"flex"} alignItems={"center"} py={"4"}>
            Publish
          </Text>
          <Text
            fontSize={"12px"}
            display={"flex"}
            alignItems={"center"}
            textTransform={"uppercase"}
          >
            <Icon as={BsDot} mx={"2"} />
            Delete
          </Text>
        </Flex>

        <Flex
          align={"center"}
          onClick={() => {
            setDraftAtom({
              ...(props as Draft),
              lockTitle: true,
            });
            route.push("/profile/Dashboard/studio");
          }}
        >
          <IconButton
            icon={<FaPencilAlt />}
            aria-label="edit"
            bg={"black"}
            color={"#fff"}
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
