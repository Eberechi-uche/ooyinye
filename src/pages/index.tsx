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
import { useProfileData } from "@/Hooks/Profile/useProfileData";

export default function Home() {
  const [user] = useAuthState(auth);
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { updateUserState } = useProfileData();

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
      if (user) {
        updateUserState();
      }

      return;
    }
  }, [user]);
  return (
    <>
      <Head>
        <title> Ooyinye</title>
        <meta name="image" content="/headerHomeImage.gif" />
        <meta name="image:alt" content="Loading website for Ooyinye" />
        <meta name="image:width" content="1140" />
        <meta name="image:height" content="600" />
        <meta
          name="description"
          content="spark your curiosity, ignite your passion, and open doors to a world of inspiration and knowledge."
        />
        <meta
          name="description"
          content="spark your curiosity, ignite your passion, and open doors to a world of inspiration and knowledge."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Ooyinye" />
        <meta name="url" content={"https://ooyinye.vercel.app/"} />
        <meta
          property="og:title"
          content="Your Gateway to inspiration and knowledge"
        />
        <meta
          property="og:description"
          content="spark your curiosity, ignite your passion, and open doors to a world of inspiration and knowledge."
        />
        <meta property="og:site_name" content="https://ooyinye.vercel.app/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content="/headerHomeImage.gif" />
        <meta property="og:image:alt" content="Loading website for Ooyinye" />
        <meta property="og:image:width" content="1140" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:label1" content="Ooyinye" />
        <meta name="twitter:data1" content="Connect , grow , explore" />
        <meta property="og:type" content="Website" />
        <meta property="article:section" content="Home" />
      </Head>
      {!user && <HomePageHeader />}

      <main>
        <ContentLayout>
          <>
            <HomeRHS />
          </>
          <>
            <HomeNavFooter />
            <Flex
              flexDir={"column"}
              width={"100%"}
              bg={user ? "green.900" : "orange.500"}
              color={"#fff"}
            >
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
                articleList.slice(0, 3).map((article, index) => (
                  <Flex key={article.articleID} paddingLeft={"1"}>
                    <Text
                      fontSize={"5xl"}
                      fontWeight={"900"}
                      color={"whiteAlpha.600"}
                    >
                      {index + 1}
                    </Text>
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
                      publishDate={article.publishDate}
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
                      publishDate={article.publishDate}
                    />
                  </Flex>
                ))}
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
