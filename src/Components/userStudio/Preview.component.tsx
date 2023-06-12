import { draftAtom } from "@/Atoms/DraftAtom";
import { Flex, Button, Icon, Text, Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import BlogPostHeader from "../Headers/BlogPost.Header";

import { RiPencilFill } from "react-icons/ri";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import { useCreateNewArticle } from "@/Hooks/Blog/useCreateNewArticle";

type PreviewProp = {
  setMode: (mode: string) => void;
};
const Preview: React.FC<PreviewProp> = ({ setMode }) => {
  const [currentDraft] = useRecoilState(draftAtom);
  const { saveArticle } = useCreateNewArticle();
  const [user] = useAuthState(auth);

  const authId = `@${user?.email?.split("@")[0]}`;
  return (
    <>
      <Flex flexDir={"column"}>
        <Text fontWeight={"700"} fontSize={"2xl"} mb={"7"}>
          Preview mode
        </Text>
        <BlogPostHeader
          articleDesc={currentDraft.articleDesc}
          articleTitle={currentDraft.articleTitle}
          profileId={authId}
          imageUrl={user?.photoURL!}
          displayName={user?.displayName!}
        />
        <Image src={currentDraft.articleThumbnail} alt={"blog image"} />
        <div
          dangerouslySetInnerHTML={{ __html: currentDraft.articleContent }}
          className="view"
        />

        <Flex my={"5"} width={"100%"} justify={"flex-end"} align={"center"}>
          <Button
            variant={"outline"}
            mr={"5"}
            fontWeight={"700"}
            borderRadius={"full"}
            onClick={() => {
              setMode("edit");
            }}
            color={"gray.500"}
            _hover={{
              bgColor: "none",
              color: "gray.900",
              borderColor: "gray.900",
            }}
          >
            <Icon as={RiPencilFill} />
            Edit
          </Button>

          <Button
            colorScheme="green"
            color={"#fff"}
            onClick={() => {
              saveArticle(currentDraft, currentDraft.articleContent);
            }}
          >
            save
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Preview;
