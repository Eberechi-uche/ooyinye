import { Draft, draftAtom } from "@/Atoms/DraftAtom";
import { Flex, Icon, IconButton, Text, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiEdit } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { PiCheckCircleDuotone, PiCheckCircleFill } from "react-icons/pi";
import { useSetRecoilState } from "recoil";

const ArticleDraftCard: React.FC<Draft & ArticleDraft> = (props) => {
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
        <PostCardDraft
          articleContent={props.articleContent}
          articleDesc={props.articleDesc}
          articleSlug={props.articleSlug}
          articleThumbnail={props.articleThumbnail}
          articleTitle={props.articleTitle}
          published={props.published}
          handlePublish={props.handlePublish}
          publishing={props.publishing}
          readTime={props.readTime}
        />

        <Flex
          align={"center"}
          mt={"2"}
          fontSize={{ base: "md", md: "lg" }}
          justify={"space-between"}
          width={"100%"}
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
            width={{ base: "20%", md: "20%" }}
            height={{ base: "50px", md: "80px" }}
            objectFit={"cover"}
            alignSelf={"flex-start"}
          />
        </Flex>
      </Flex>
    </>
  );
};

type ArticleDraft = {
  handlePublish: (article: Draft) => void;
  publishing: string;
};

const PostCardDraft: React.FC<Draft & ArticleDraft> = (props) => {
  const {
    handlePublish,
    articleDesc,
    articleSlug,
    articleThumbnail,
    articleTitle,
    published,
    articleContent,
    publishing,
    readTime,
  } = props;
  const route = useRouter();
  const setDraftAtom = useSetRecoilState(draftAtom);

  return (
    <>
      <Flex
        align={"center"}
        justify={"space-between"}
        my={"2"}
        textTransform={"uppercase"}
      >
        <Flex>
          {props.published ? (
            <>
              <Text
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"xs"}
              >
                published
                <Icon as={PiCheckCircleDuotone} ml={"2"} />
              </Text>
            </>
          ) : (
            <>
              <Button
                size={"xs"}
                onClick={() => {
                  handlePublish({
                    articleDesc,
                    articleSlug,
                    articleThumbnail,
                    articleTitle,
                    published,
                    articleContent,
                    readTime,
                  });
                }}
                variant={"unstyled"}
                isLoading={publishing === articleSlug}
              >
                Publish
              </Button>
            </>
          )}

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
            size={"sm"}
            fontSize={"xl"}
            _hover={{
              color: "#fff",
              bg: "#000",
            }}
            icon={<BiEdit />}
            aria-label="edit"
            bg={"#fff"}
            color={"#000"}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default ArticleDraftCard;
