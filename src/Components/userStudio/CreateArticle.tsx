import { Article } from "@/Atoms/ArticleAtom";
import { useCreateNewArticle } from "@/Hooks/Blog/useCreateNewArticle";
import { useFileUpload } from "@/Hooks/Profile/useFileUpload";
import {
  Flex,
  Input,
  Icon,
  Button,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiImageAddFill, RiImageEditFill } from "react-icons/ri";

export type NewArticleProps = Pick<
  Article,
  "articleTitle" | "articleDesc" | "articleSlug" | "articleThumbnail" | "tag"
>;

type ArticleDetailsProps = {
  file: string;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFile: (e: string) => void;
  articleDesc: string;
  articleSlug: string;
  articleThumbnail: string;
  articleTitle: string;
  setArticleDetails: (prev: any) => void;
  saveArticle: (e: NewArticleProps) => void;
};

const ArticleDetails: React.FC<ArticleDetailsProps> = ({
  file,
  onFileUpload,
  setFile,
  articleDesc,
  articleSlug,
  articleThumbnail,
  articleTitle,
  setArticleDetails,
  saveArticle,
}) => {
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name == "articleTitle") {
      const slug = articleTitle.replace(/\s/g, "-");
      setArticleDetails((prev: NewArticleProps) => ({
        ...prev,
        [name]: value,
        articleSlug: slug,
      }));
      return;
    }

    setArticleDetails((prev: NewArticleProps) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Flex flexDir={"column"} width={"100%"}>
        <Flex flexDir={"column"}>
          <ArticleInput
            name="articleTitle"
            handleChange={handleOnChange}
            placeHolder="Article title"
            label="Article title"
            value={articleTitle}
          />

          <ArticleInput
            name="articleSlug"
            placeHolder="Article Slug"
            label="Article Slug - note this is used as the article id on your draft"
            value={articleSlug}
            disable={true}
          />
          <Flex flexDir={"column"} mt={"5"}>
            <label> Article Description</label>
            <Textarea
              h={"100px"}
              bg={"#fff"}
              focusBorderColor="gray.500"
              name="articleDesc"
              value={articleDesc}
              onChange={handleOnChange}
            />
          </Flex>
          <Flex
            border={"1px solid"}
            borderColor={"gray.300"}
            width={"100%"}
            bg={"#fff"}
            minHeight={"250px"}
            my={"5"}
            p={"6"}
            align={"center"}
            justify={"center"}
            flexDir={"column"}
            position={"relative"}
          >
            {articleThumbnail && (
              <OnSelectedImage
                file={file}
                setArticleState={setArticleDetails}
              />
            )}
            {!articleThumbnail && (
              <SelectImage
                onFileUpload={onFileUpload}
                file={file}
                setFile={setFile}
                setArticleState={setArticleDetails}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

type ArticleInputProps = {
  label: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  name: string;
  value: string;
  disable?: boolean;
};
const ArticleInput: React.FC<ArticleInputProps> = ({
  label,
  handleChange,
  placeHolder,
  name,
  value,
  disable,
}) => {
  return (
    <Flex flexDir={"column"} mb={"3"} width={"100%"}>
      <label> {label}</label>
      <Input
        type="text"
        name={name}
        value={value}
        placeholder={placeHolder}
        focusBorderColor="gray.500"
        onChange={handleChange}
        height={"60px"}
        disabled={disable}
        bgColor={"white"}
        required
      />
    </Flex>
  );
};

type ImageSelect = {
  file: string;
  setFile?: (e: string) => void;
  setArticleState: any;
  onFileUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectImage: React.FC<ImageSelect> = ({
  file,
  setFile,
  setArticleState,
  onFileUpload,
}) => {
  const InputImageRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Text fontWeight={"600"} fontSize={"xs"}>
        Add Thumbnail Image
      </Text>
      <Input
        type="file"
        display={"none"}
        ref={InputImageRef}
        onChange={onFileUpload}
      />
      <Icon
        as={RiImageAddFill}
        fontSize={"6xl"}
        placeSelf={"center"}
        onClick={() => {
          InputImageRef.current && InputImageRef.current.click();
        }}
      />

      {file && (
        <Flex flexDir={"column"}>
          <Image src={file} boxSize={"100%"} my={"5"} />
          <Flex width={"100%"} justify={"space-between"}>
            <Button
              width={"30%"}
              colorScheme="red"
              color={"#fff"}
              onClick={() => {
                setFile && setFile("");
              }}
            >
              cancel
            </Button>
            <Button
              width={"50%"}
              colorScheme="green"
              color={"#fff"}
              onClick={() => {
                setArticleState((prev: NewArticleProps) => ({
                  ...prev,
                  articleThumbnail: file,
                }));
              }}
            >
              use
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
};

const OnSelectedImage: React.FC<ImageSelect> = ({
  file,
  setFile,
  setArticleState,
}) => {
  return (
    <Flex flexDir={"column"} width={"100%"}>
      <Image src={file} boxSize={"100%"} my={"5"} />
      <Flex
        bg={"gray.900"}
        position={"absolute"}
        top={"20"}
        right={"20"}
        borderRadius={"full"}
        padding={"5"}
      >
        <Icon
          as={RiImageEditFill}
          fontSize={"7vw"}
          onClick={() => {
            setArticleState((prev: NewArticleProps) => ({
              ...prev,
              articleThumbnail: "",
            }));
          }}
          color={"#fff"}
        />
      </Flex>
    </Flex>
  );
};
export default ArticleDetails;
