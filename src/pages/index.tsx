import Head from "next/head";
import { Text, Flex, Button, Icon, Input } from "@chakra-ui/react";
import HomePageHeader from "@/Components/Headers/HomePage.Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/Components/Firebase/ClientApp";
import ContentLayout from "@/Components/Layout/Content.Layout";
import HomeRHS from "@/Components/LeftContentComponent/HomeSideContent/HomeRHS";
import PostCard from "@/Components/Card/PostCard";
import HomeLHS from "@/Components/LeftContentComponent/HomeSideContent/HomeLHS";
import HomeNavFooter from "@/Components/MobileFooter/HomeNavFooter";
import Link from "next/link";
import { SearchIcon } from "@/Components/Icons/Icons";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ArticleLoaders } from "@/Components/Loaders/loader";
import { Article } from "@/Atoms/ArticleAtom";

export default function Home() {
  const [user] = useAuthState(auth);
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHomeArticle = async () => {
    setLoading(true);
    const querrySnapshot = await getDocs(collection(firestore, "Articles"));
    const articles = querrySnapshot.docs.map((doc) => ({
      articleID: doc.id,
      ...(doc.data() as Article),
    }));
    setArticleList(articles as Article[]);
    setLoading(false);
  };

  useEffect(() => {
    if (articleList) {
      fetchHomeArticle();
      return;
    }
  }, [user]);
  return (
    <>
      <Head>
        <title>Ooyinye</title>
        <meta
          name="description"
          content="Your Gateway to inspiration and knowledge"
        />
        <meta property="image" content={"/headerHomeImage.gif"} key={"image"} />
        <meta name="image:width" content={"1200"} key={"imageW"} />
        <meta name="image:height" content={"630"} key={"imageH"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel={"img"} href="/headerHomeImage.gif" />
      </Head>
      {!user && <HomePageHeader />}

      <main>
        <ContentLayout>
          <>
            <HomeRHS />
          </>
          <>
            <HomeNavFooter />
            <Flex flexDir={"column"} width={"100%"}>
              <Text width={"100%"} fontWeight={"900"} px={"4"}>
                Top Reads
              </Text>
              {loading && (
                <>
                  <ArticleLoaders />
                  <ArticleLoaders />
                  <ArticleLoaders />
                  <ArticleLoaders />
                </>
              )}
              {!loading &&
                articleList.map((article) => (
                  <Flex key={article.articleID}>
                    <PostCard
                      articleSlug={article.articleSlug}
                      articleTitle={article.articleTitle}
                      authorDN={article.authorDN}
                      authorId={article.authorId}
                      authorImageUrl={article.authorImageUrl}
                      articleThumbnail={article.articleThumbnail}
                      articleDesc={article.articleDesc}
                      showProfile={true}
                      readtime={article.readtime}
                      likes={article.likes}
                      articleID={article.articleID}
                    />
                  </Flex>
                ))}
            </Flex>

            <Flex width={"100%"} flexDir={"column"} py={"20"}>
              <Flex
                width={"100%"}
                justify={"space-between"}
                align={"center"}
                px={"4"}
              >
                <Text fontWeight={"900"}>For you</Text>
                <Link href={"/search"}>
                  <Flex
                    align={"center"}
                    borderRadius={"full"}
                    border={"1px solid"}
                    borderColor={"gray.300"}
                    p={{
                      base: "1",
                      md: "0",
                    }}
                    px={{ md: "2" }}
                  >
                    <SearchIcon value="" />
                    <Input
                      placeholder="search blog"
                      border={"none"}
                      disabled
                      display={{ base: "none", md: "unset" }}
                    />
                  </Flex>
                </Link>
              </Flex>

              {/* {loading && (
                <>
                  <ArticleLoaders />
                  <ArticleLoaders />
                  <ArticleLoaders />
                  <ArticleLoaders />
                </>
              )}
              {!loading &&
                articleList.map((article, index) => (
                  <PostCard
                    id={index}
                    articleSlug={article.articleSlug}
                    articleTitle={article.articleTitle}
                    articleContent={article.articleContent}
                    articleThumbnail={article.articleThumbnail}
                    articleDesc={article.articleDesc}
                    showProfile={true}
                  />
                ))} */}
            </Flex>
          </>
          <>
            <HomeLHS />
          </>
        </ContentLayout>
      </main>
    </>
  );
}
