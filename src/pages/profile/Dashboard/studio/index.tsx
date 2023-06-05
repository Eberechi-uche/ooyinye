import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import {
  Flex,
  Text,
  Input,
  Image,
  Textarea,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Article } from "../../../../Atoms/ArticleAtom";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import { useFileUpload } from "@/Hooks/Profile/useFileUpload";
import { RiImageAddFill, RiImageEditFill } from "react-icons/ri";

type NewArticleProps = Pick<
  Article,
  "articleTitle" | "articleDesc" | "articleSlug" | "articleThumbnail" | "tag"
>;

const NewArticle: React.FC = () => {
  const [user] = useAuthState(auth);
  const { file, onFileUpload, setFile } = useFileUpload();

  const [articleDetails, setArticleDetails] = useState<NewArticleProps>({
    articleDesc: "",
    articleSlug: "",
    articleThumbnail: "",
    articleTitle: "",
    tag: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name == "articleTitle") {
      const slug = articleDetails.articleTitle.replace(/\s/g, "-");
      setArticleDetails((prev) => ({
        ...prev,
        [name]: value,
        articleSlug: slug,
      }));
      return;
    }

    setArticleDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <SingleContentLayout>
        <TextHeader text="Studio" />
        <Flex flexDir={"column"} width={"100%"} px={"4"} my={"4"}>
          <Flex flexDir={"column"}>
            <ArticleInput
              name="articleTitle"
              handleChange={handleOnChange}
              placeHolder="Article title"
              label="Article title"
              value={articleDetails.articleTitle}
            />

            <ArticleInput
              name="articleSlug"
              placeHolder="Article Slug"
              label="Article Slug - note this would be used as the article id on your draft"
              value={articleDetails.articleSlug}
              disable={true}
            />
            <Flex flexDir={"column"} mt={"5"}>
              <label> Article Description</label>
              <Textarea
                h={"100px"}
                bg={"#fff"}
                focusBorderColor="gray.500"
                name="articleDesc"
                value={articleDetails.articleDesc}
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
              {articleDetails.articleThumbnail && (
                <OnSelectedImage
                  file={file}
                  setArticleState={setArticleDetails}
                />
              )}
              {!articleDetails.articleThumbnail && (
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
      </SingleContentLayout>
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
    <Flex flexDir={"column"} mt={"3"} width={"100%"}>
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
export default NewArticle;
