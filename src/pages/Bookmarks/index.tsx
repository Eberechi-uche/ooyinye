import { Article } from "@/Atoms/ArticleAtom";
import { authUserAtom } from "@/Atoms/AuthUserAtom";
import PostCard from "@/Components/Card/PostCard";
import { SavedPostCard } from "@/Components/Card/SavePostCard";
import { auth, firestore } from "@/Components/Firebase/ClientApp";
import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { ArticleLoaders } from "@/Components/Loaders/loader";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const Bookmarks: React.FC = () => {
  const [user] = useAuthState(auth);
  const userID = `@${user?.email?.split("@")[0]}`;
  const [loading, setLoading] = useState(true);
  const [userAuthState, setUserAuthState] = useRecoilState(authUserAtom);
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  useEffect(() => {
    const fetchSavedArticles = async () => {
      const saveArticlesRef = collection(
        firestore,
        "users",
        userID,
        "savedArticles"
      );
      try {
        if (userAuthState.Bookmarks.length) {
          setLoading(false);
          setSavedArticles(userAuthState.Bookmarks);
          return;
        }
        const querrySnapshot = await getDocs(saveArticlesRef);
        const articlesArray = querrySnapshot.docs.map((doc) => ({
          articleID: doc.id,
          ...(doc.data() as Article),
        }));
        setSavedArticles(articlesArray as Article[]);
        setUserAuthState((prev) => ({
          ...prev,
          Bookmarks: [...(articlesArray as Article[])],
        }));
      } catch (error: any) {
        console.log(error.message);
        setLoading(false);
      }
      setLoading(false);
    };
    fetchSavedArticles();
  }, [user]);
  return (
    <>
      <SingleContentLayout>
        <TextHeader text="Saved article" />

        <Flex px={"1"} flexDir={"column"} align={"center"} width={"100%"}>
          {loading && (
            <Flex flexDir={"column"} width={"100%"}>
              <ArticleLoaders />
              <ArticleLoaders />
              <ArticleLoaders />
              <ArticleLoaders />
            </Flex>
          )}
          {!loading && (
            <>
              {savedArticles.map((article) => (
                <PostCard
                  {...article}
                  showProfile={true}
                  key={article.articleID}
                />
              ))}
            </>
          )}
        </Flex>
      </SingleContentLayout>
    </>
  );
};
export default Bookmarks;
