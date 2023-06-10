import { draftAtom } from "@/Atoms/DraftAtom";
import { Flex, Button, IconButton, Icon, Text, Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import BlogPostHeader from "../Headers/BlogPost.Header";
import SingleContentLayout from "../Layout/SingleContent.Layout";
import { BsPencil } from "react-icons/bs";
import { ImPencil2 } from "react-icons/im";
import { RiPencilFill } from "react-icons/ri";

type PreviewProp = {
  setMode: (mode: string) => void;
};
const Preview: React.FC<PreviewProp> = ({ setMode }) => {
  const [currentDraf] = useRecoilState(draftAtom);
  return (
    <>
      <Flex flexDir={"column"}>
        <Text fontWeight={"700"} fontSize={"2xl"} mb={"7"}>
          Preview mode
        </Text>
        <BlogPostHeader
          articleDesc={currentDraf.articleDesc}
          articleTitle={currentDraf.articleTitle}
          articleThumbnail={currentDraf.articleThumbnail}
        />
        <Image src={currentDraf.articleThumbnail} alt={"blog image"} />
        <div
          dangerouslySetInnerHTML={{ __html: currentDraf.articleContent }}
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
          <Button colorScheme="green" color={"#fff"}>
            Publish
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Preview;
