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
import TipEditor from "@/Components/TextEditor/TipTapEditor";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { draftAtom } from "@/Atoms/DraftAtom";
import Preview from "@/Components/userStudio/Preview.component";

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
  const route = useRouter();
  const setDraftState = useSetRecoilState(draftAtom);
  const [mode, setMode] = useState("edit");

  const handleArticleSave = (content: string) => {
    saveArticle(articleDetails, content);
  };

  const handlePreviewAndPublish = (content: string) => {
    const { articleDesc, articleSlug, articleThumbnail, articleTitle } =
      articleDetails;
    setDraftState({
      articleDesc,
      articleSlug,
      articleThumbnail,
      articleTitle,
      articleContent: content,
    });
    setMode("preview");
  };

  return (
    <>
      <SingleContentLayout>
        <Flex flexDir={"column"} px={"2"}>
          <TextHeader text="Studio" />
          {mode === "edit" && (
            <>
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
                    />
                  </TabPanel>
                  <TabPanel px={"0"}>
                    <TipEditor
                      saveArticle={handleArticleSave}
                      isLoading={loading}
                      preview={handlePreviewAndPublish}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          )}
          {mode === "preview" && (
            <>
              <Preview setMode={setMode} />
            </>
          )}
        </Flex>
      </SingleContentLayout>
    </>
  );
};

export default Studio;
