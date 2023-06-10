import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsDot, BsFillPinFill, BsBookmark, BsClock } from "react-icons/bs";

import ProfileCardMini from "./ProfileCardMini";
import { Draft } from "@/Hooks/Blog/useCreateNewArticle";
import { useSetRecoilState } from "recoil";
import { draftAtom } from "@/Atoms/DraftAtom";

type PostCardProps = {
  showProfile: boolean;
  id: string | number;
};

const PostCard: React.FC<PostCardProps & Draft> = ({
  showProfile,
  articleDesc,
  articleSlug,
  articleTitle,
  articleThumbnail,
  id,
}) => {
  const route = useRouter();
  const { profile } = route.query;

  const setDraftAtom = useSetRecoilState(draftAtom);
  return (
    <>
      <Flex flexDir={"column"} py={"5"} px={"5"} key={id}>
        {profile ? (
          <Flex width={"100%"} justify={"space-between"}>
            <Text> date</Text> <Icon as={BsFillPinFill} />
          </Flex>
        ) : (
          <Flex align={"center"}>
            <Flex flexDir={"column"} width={"100%"}>
              {showProfile && <ProfileCardMini />}

              <Flex align={"center"} justify={"space-between"}>
                <Flex>
                  <Text
                    fontSize={"12px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    1st April
                  </Text>
                  <Text
                    fontSize={"12px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Icon as={BsDot} mx={"2"} />
                    <Icon as={BsClock} mx={"2"} />8 mins
                  </Text>
                </Flex>

                <Flex>
                  <Icon as={BsBookmark} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}

        <Flex
          align={"center"}
          mt={"2"}
          fontSize={{ base: "sm", md: "sm" }}
          justify={"space-between"}
          width={"100%"}
          onClick={() => {
            setDraftAtom({
              articleContent: "",
              articleDesc,
              articleSlug,
              articleThumbnail,
              articleTitle,
            });
            route.push(`/article/${"@eb3rechi"}/${articleSlug}`);
          }}
        >
          <Flex
            flexDir={"column"}
            alignSelf={"flex-start"}
            height={"fit-content"}
            width={"80%"}
          >
            <Text fontWeight={"900"} noOfLines={[3, 4]}>
              {articleTitle}
            </Text>
          </Flex>

          <Image
            alt={"postImage"}
            src={articleThumbnail}
            width={{ base: "25%", md: "15%" }}
            objectFit={"cover"}
            ml={"4"}
            borderRadius={"3px"}
            alignSelf={"center"}
          />
        </Flex>
      </Flex>
    </>
  );
};
export default PostCard;
