import { Draft, draftAtom } from "@/Atoms/DraftAtom";
import ArticleDraftCard from "@/Components/Card/ArticleDraftCard";
import { auth } from "@/Components/Firebase/ClientApp";
import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { ArticleLoaders } from "@/Components/Loaders/loader";
import useGetProfileDetails from "@/Hooks/DataFetching/useGetProfileInfo";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiDraftLine } from "react-icons/ri";
import { useSetRecoilState } from "recoil";
import { useCreateNewArticle } from "@/Hooks/Blog/useCreateNewArticle";

const Dashboard: React.FC = () => {
  const [user] = useAuthState(auth);
  const { publishArticle, publishing } = useCreateNewArticle();
  const setDraftSate = useSetRecoilState(draftAtom);

  const userId = `@${user?.email?.split("@")[0]}`;
  const [stats, setStats] = useState({
    articles: 0,
    views: 0,
  });
  const { getProfileArticles, profileArticles, loading, setProfileArticles } =
    useGetProfileDetails(userId);
  const route = useRouter();

  const handleArticlePuslish = async (article: Draft) => {
    const status = await publishArticle(article);
    if (status === "Published") {
      const newStateState = updateClientArticleSate(profileArticles, article);
      setProfileArticles(newStateState);
    }
  };

  useEffect(() => {
    getProfileArticles();
  }, [user]);
  useEffect(() => {
    setStats({ articles: profileArticles.length, views: 0 });
  }, [profileArticles]);
  return (
    <SingleContentLayout>
      <Flex flexDir={"column"} width={"100%"} px={"3"}>
        <TextHeader text="Dashboard" />
        <Flex flexDir={"column"} mx={"5"}>
          <Text fontWeight={"900"}> Stats</Text>
          <Flex
            flexWrap={"wrap"}
            width={"100%"}
            justify={"space-between"}
            my={"5"}
          >
            <OverViewCard heading="Articles" value={stats.articles} />
            <OverViewCard heading="Views" value={stats.views} />
          </Flex>
          <Flex
            minHeight={"10vh"}
            border={"1px solid"}
            minWidth={"100px"}
            justify={"center"}
            align={"center"}
            borderColor={"gray.200"}
            flexDir={"column"}
            p={"10"}
            onClick={() => {
              setDraftSate({
                articleDesc: "",
                articleContent: "",
                articleThumbnail: "",
                articleSlug: "",
                articleTitle: "",
                published: "",
              });
              route.push("/profile/Dashboard/studio");
            }}
            cursor={"pointer"}
          >
            <Icon as={RiDraftLine} fontSize={"6xl"} color={"green.500"} />
            <Text> new Article</Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          {loading && (
            <>
              <ArticleLoaders />
              <ArticleLoaders />
              <ArticleLoaders />
              <ArticleLoaders />
            </>
          )}
          {!loading &&
            profileArticles.map((article) => (
              <Flex key={article.articleSlug}>
                <ArticleDraftCard
                  articleContent={article.articleContent}
                  articleDesc={article.articleDesc}
                  articleSlug={article.articleSlug}
                  articleTitle={article.articleTitle}
                  articleThumbnail={article.articleThumbnail}
                  published={article.published}
                  handlePublish={handleArticlePuslish}
                  publishing={publishing}
                />
              </Flex>
            ))}
        </Flex>
      </Flex>
    </SingleContentLayout>
  );
};
export default Dashboard;

type OverViewCardProps = {
  heading: string;
  value: number;
};
const OverViewCard: React.FC<OverViewCardProps> = ({ heading, value }) => {
  return (
    <>
      <Flex
        flexDir={"column"}
        h={{ base: "10vh" }}
        borderRadius={"5px"}
        border={"1px solid"}
        borderColor={"gray.200"}
        w={{ base: "100%", md: "30%" }}
        justify={"center"}
        py={"10"}
        px={"5"}
        mb={"4"}
      >
        <Text>{heading}</Text>
        <Text fontWeight={"700"}> {value}</Text>
      </Flex>
    </>
  );
};
function updateClientArticleSate(draft: Draft[], article: Draft) {
  const articleId = draft.find((item) => {
    return item.articleSlug === article.articleSlug;
  });
  const newArticleId: Draft = {
    ...articleId!,
    published: "true",
  };

  const newDraftArray = draft.map((item) => {
    return item.articleSlug !== article.articleSlug ? item : newArticleId;
  });
  return newDraftArray;
}
