import { Draft, draftAtom } from "@/Atoms/DraftAtom";
import {
  Flex,
  Button,
  Icon,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import BlogPostHeader from "../Headers/BlogPost.Header";

import { RiPencilFill } from "react-icons/ri";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import { useCreateNewArticle } from "@/Hooks/Blog/useCreateNewArticle";
import { useRouter } from "next/router";

type PreviewProp = {
  setMode: (mode: string) => void;
};
const Preview: React.FC<PreviewProp> = ({ setMode }) => {
  const [currentDraft] = useRecoilState(draftAtom);
  const { saveArticle, publishArticle, loading } = useCreateNewArticle();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);
  const route = useRouter();

  const authId = `@${user?.email?.split("@")[0]}`;

  const handlePublish = async () => {
    const stats = await publishArticle(currentDraft);
    if (stats === "Published") {
      route.push(`/profile/Dashboard`);
      onClose();
    }
  };
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
            isLoading={loading}
            onClick={async () => {
              const stats = await saveArticle(
                currentDraft,
                currentDraft.articleContent,
                currentDraft.readTime,
                currentDraft
              );
              if (currentDraft.published && currentDraft.published.length > 1) {
                return;
              }

              onOpen();
            }}
          >
            save
          </Button>
          {isOpen && (
            <>
              <PublishModal
                isOpen={isOpen}
                onClose={onClose}
                content={{ ...currentDraft }}
                publish={handlePublish}
                loading={loading}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

type PublishModalProp = {
  onClose: () => void;
  isOpen: boolean;
  content: Draft;
  publish: () => void;
  loading: boolean;
};
const PublishModal: React.FC<PublishModalProp> = ({
  onClose,
  isOpen,
  content,
  publish,
  loading,
}) => {
  const route = useRouter();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "lg" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Publish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex width={"100%"} flexDir={"column"}>
              <Text fontWeight={"900"} mb={"2"}>
                {content.articleTitle}
              </Text>
              <Image
                src={content.articleThumbnail}
                alt={"article-thumbnail"}
                h={{ base: "100px", md: "150px" }}
                objectFit={"cover"}
              />
              <Text noOfLines={3}>{content.articleDesc}</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                route.push("/profile/Dashboard");
              }}
              color={"#fff"}
              size={"sm"}
            >
              No!, go back dashboard
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              color={"#fff"}
              size={"sm"}
              onClick={publish}
              isLoading={loading}
            >
              publish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Preview;
