import { Article } from "@/Atoms/ArticleAtom";
import exploreAtom from "@/Atoms/ExploreAtom";
import PostCard from "@/Components/Card/PostCard";
import { firestore } from "@/Components/Firebase/ClientApp";
import { FollowTopicIcon } from "@/Components/Icons/Icons";
import { ArticleLoaders } from "@/Components/Loaders/loader";
import { Flex, Text, Image } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const ExplorePost: React.FC = () => {
  const [topic] = useRecoilState(exploreAtom);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [article, setArticle] = useState<Article[]>([]);
  const getArticles = async () => {
    const articleRef = collection(firestore, "Articles");
    const articleQuerry = query(articleRef, where("tag", "==", `${topic.id}`));

    try {
      const articlesDocSnap = await getDocs(articleQuerry);
      const articlesData = articlesDocSnap.docs.map((article) => ({
        articleID: article.id,
        ...article.data(),
      }));
      setArticle(articlesData as Article[]);
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Flex
        width={"100vw"}
        align={"center"}
        bg={topic.bgColor}
        minH={"100vh"}
        color={"#fff"}
        flexDir={"column"}
      >
        <Flex flexDir={"column"}>
          <Flex width={"100%"} maxW={"700px"} flexDir={"column"}>
            <Flex width={"100%"} justify={"space-between"} my={"4"} px={"2"}>
              <Text
                fontSize={"2xl"}
                textTransform={"uppercase"}
                fontWeight={"900"}
              >
                {topic.id}
              </Text>
              <FollowTopicIcon {...topic} following size="2xl" />
            </Flex>
            <Flex flexDir={"column"}>
              <Image
                src={topic.imageUrl}
                width={"100%"}
                alt={"explore-image"}
                h={"30vh"}
                objectFit={"cover"}
              />
              <Text px={"2"}>{topic.desc}</Text>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} width={"100%"} align={"center"}>
            {loading && <ArticleLoaders />}
            {article &&
              article.map((article) => (
                <PostCard
                  {...article}
                  showProfile={true}
                  key={article.articleID}
                />
              ))}
            {article.length === 0 && (
              <>
                <Text my={"4"} fontWeight={"700"}>
                  No articles on this topic
                </Text>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default ExplorePost;
