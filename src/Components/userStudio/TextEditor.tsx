import { Button, Flex, Textarea, useToast } from "@chakra-ui/react";

type TextEditorProps = {
  articleContent: string;
  setArticleContent: (e: string) => void;
  saveArticle: () => void;
  isLoading: boolean;
  error: string;
};
const TextEditor: React.FC<TextEditorProps> = ({
  articleContent,
  setArticleContent,
  saveArticle,
  isLoading,
  error,
}) => {
  const toast = useToast();

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleContent(e.target.value);
    console.log(articleContent);
  };
  return (
    <>
      <Flex flexDir={"column"} my={"5"}>
        <Textarea
          h={"80vh"}
          bg={"#fff"}
          focusBorderColor="gray.500"
          border={"none"}
          name="articleDesc"
          value={articleContent}
          onChange={handleOnChange}
        />
        <Flex
          my={"5"}
          width={{ base: "100%", md: "70%" }}
          justify={"space-between"}
          alignSelf={"flex-end"}
        >
          <Button
            colorScheme="blackAlpha"
            variant={"solid"}
            color={"#fff"}
            bg={"blackAlpha.900"}
            onClick={saveArticle}
            isLoading={isLoading}
          >
            save Article
          </Button>
          <Button colorScheme="green" variant={"solid"} color={"#fff"}>
            publish
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default TextEditor;
function toast(arg0: {
  title: string;
  description: string;
  status: string;
  duration: number;
  isClosable: boolean;
}) {
  throw new Error("Function not implemented.");
}
