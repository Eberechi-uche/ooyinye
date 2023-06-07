import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import ArticleDetails, {
  NewArticleProps,
} from "@/Components/userStudio/CreateArticle";
import TextEditor from "@/Components/userStudio/TextEditor";
import { useFileUpload } from "@/Hooks/Profile/useFileUpload";
import { useState } from "react";
import { useCreateNewArticle } from "@/Hooks/Blog/useCreateNewArticle";

const Studio: React.FC = () => {
  const [user] = useAuthState(auth);
  const { file, onFileUpload, setFile } = useFileUpload();
  const { saveArticle, loading, error } = useCreateNewArticle();
  const [articleDetails, setArticleDetails] = useState<NewArticleProps>({
    articleDesc: "",
    articleSlug: "",
    articleThumbnail: "",
    articleTitle: "",
    tag: "",
  });
  const [articleContent, setArticleContent] = useState("");

  const handleArticleSave = () => {
    saveArticle(articleDetails, articleContent);
  };

  return (
    <>
      <SingleContentLayout>
        <Flex flexDir={"column"} px={"2"}>
          <TextHeader text="Studio" />
          <Tabs colorScheme="blackAplha">
            <TabList>
              <Tab>Article details</Tab>
              <Tab>Article Content</Tab>
            </TabList>

            <TabPanels p={"0"}>
              <TabPanel px={"0"}>
                <ArticleDetails
                  setArticleDetails={setArticleDetails}
                  articleDesc={articleDetails.articleDesc}
                  articleSlug={articleDetails.articleSlug}
                  articleTitle={articleDetails.articleTitle}
                  articleThumbnail={articleDetails.articleThumbnail}
                  file={file}
                  onFileUpload={onFileUpload}
                  setFile={setFile}
                  saveArticle={handleArticleSave}
                />
              </TabPanel>
              <TabPanel px={"0"}>
                <p>Article content</p>
                <TextEditor
                  articleContent={articleContent}
                  setArticleContent={setArticleContent}
                  saveArticle={handleArticleSave}
                  isLoading={loading}
                  error={error}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </SingleContentLayout>
    </>
  );
};

export default Studio;
