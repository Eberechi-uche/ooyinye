import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
  Image,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import BlogPostHeader from "@/Components/Headers/BlogPost.Header";
import BlogParser from "@/Components/BlogParser/BlogParser";

import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import BlogNavFooter from "@/Components/MobileFooter/BlogNavFooter";
import PostcardLarge from "@/Components/Card/PostcardLarge";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/Components/Firebase/ClientApp";
import { User } from "firebase/auth";
import CommentsComponent from "@/Components/Comments/Comment";
import { useEffect, useState } from "react";
import {
  AddbookMarkIcon,
  CommentsIcon,
  HomeIcon,
  LikeIcon,
  ShareIcon,
} from "@/Components/Icons/Icons";
import { useRouter } from "next/router";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { PageContent } from "@/Components/Loaders/loader";
import useGetProfileDetails from "@/Hooks/DataFetching/useGetProfileInfo";
import { useRecoilState } from "recoil";
import { articleAtom } from "@/Atoms/ArticleAtom";
import { Draft } from "@/Atoms/DraftAtom";
import { useArticleData } from "@/Hooks/Blog/useArticleData";
import { useProfileData } from "@/Hooks/Profile/useProfileData";
import LikesCard, { LikedUserDetails } from "@/Components/Card/LikesCard";
import { AiOutlineEllipsis } from "react-icons/ai";

const Post: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { likeArticle, getArticle } = useArticleData();
  const [currentArticle, setCurrentArticle] = useRecoilState(articleAtom);
  const [likes, setLikes] = useState<LikedUserDetails[]>([]);
  const [article, setArticle] = useState<Draft>({
    articleContent: "",
    articleDesc: "",
    articleSlug: "",
    articleThumbnail: "",
    articleTitle: "",
    published: "",
    readTime: 0,
  });
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  const { authorId, articleSlug } = route.query;
  const {
    profileArticles,
    profileDetails,
    getProfileArticles,
    getProfileDetails,
  } = useGetProfileDetails(`${authorId}`);
  const { updateUserState, userState } = useProfileData();
  const [error, setError] = useState("");
  const authID = user && `@${user.email?.split("@")[0]}`;

  const handleLike = async () => {
    setCurrentArticle((prev) => ({
      ...prev,
      likes: prev.likes! + 1,
    }));
    const isNewLike = await likeArticle(article.published, {
      authorDN: `${user?.displayName!}`,
      authorId: `@${user?.email?.split("@")[0]}`,
      authorImageUrl: `${user?.photoURL}`,
    });
    if (isNewLike) {
      setLikes((prev) => [
        {
          authorDN: `${user?.displayName!}`,
          authorId: `@${user?.email?.split("@")[0]}`,
          authorImageUrl: `${user?.photoURL}`,
        },
        ...prev,
      ]);
    }
  };

  const getLikes = async () => {
    const likesRef = collection(
      firestore,
      "Articles",
      `${article.published}`,
      "likes"
    );
    try {
      const likesSnapshot = await getDocs(likesRef);
      if (likesSnapshot.empty) {
        console.log("empty");
        return;
      }
      const likesData = likesSnapshot.docs.map((like) => ({
        ...like.data(),
      }));
      setLikes(likesData as LikedUserDetails[]);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const fetchArticle = async () => {
    setLoading(true);
    setError("");
    const articleRef = doc(
      firestore,
      "users",
      `${authorId}`,
      "drafts",
      `${articleSlug}`
    );

    try {
      const docSnap = await getDoc(articleRef);

      const article = { ...(docSnap.data() as Draft) };
      setArticle(article as Draft);

      getArticle(article.published);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchArticle();

    getProfileDetails();
    getProfileArticles(true);
  }, [articleSlug]);

  useEffect(() => {
    if (user && !userState.updated) {
      updateUserState();
    }
  }, [user]);
  useEffect(() => {
    article.published && getLikes();
  }, [article.published]);
  let metatTitle = currentArticle.articleTitle;
  let metaDes = currentArticle.articleDesc;
  let metaUrl = route.asPath;
  let metaThumbnail = currentArticle.articleThumbnail;
  let metaAuthor = currentArticle.authorDN;

  return (
    <>
      <Head>
        <title> {metatTitle}</title>
        <meta name="image" content={metaThumbnail} />
        <meta name="image:alt" content={metatTitle} />
        <meta name="image:width" content="1140" />
        <meta name="image:height" content="600" />
        <meta name="description" content={metaDes} />
        <meta name="url" content={metaUrl} />
        <meta name="type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Ooyinye" />
        <meta
          name="description"
          content="spark your curiosity, ignite your passion, and open doors to a world of inspiration and knowledge."
        />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:title" content={metatTitle} />
        <meta property="og:description" content={metaDes} />
        <meta property="og:site_name" content="https://ooyinye.vercel.app/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content={metaThumbnail} />
        <meta property="og:image:alt" content={metatTitle} />
        <meta property="og:image:width" content="1140" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={metaAuthor} />
        <meta name="twitter:label2" content="Reading time" />
        <meta name="twitter:data2" content="3 minutes" />
        <meta property="og:type" content="article" />
        <meta property="article:section" content="introduction" />
      </Head>
      <SingleContentLayout>
        <Flex pos={"relative"} flexDir={"column"} width={"100%"}>
          {loading && <PageContent />}
          {!loading && currentArticle.articleDesc && (
            <>
              <BlogNavFooter onOpen={onOpen} />
              <BlogPostHeader
                articleDesc={article.articleDesc}
                imageUrl={currentArticle.authorImageUrl!}
                profileId={currentArticle.authorId}
                displayName={currentArticle.authorDN}
                articleTitle={article.articleTitle}
              />

              <Image alt={"imageName"} src={article.articleThumbnail} />

              <Flex
                width={"100%"}
                align={"center"}
                justify={"space-between"}
                py={"2"}
                px={"5"}
                top={"0"}
                pos={"sticky"}
                bg={"white"}
                zIndex={"15"}
                display={{ base: "none", md: "flex" }}
                cursor={"pointer"}
              >
                <HomeIcon value="home" />
                <CommentsIcon value={"comments"} onOpen={onOpen} />
                <ShareIcon value={"share"} />
              </Flex>
              <Flex minH={"100vh"} flexDir={"column"} width={"100%"}>
                <Flex flexDir={"column"} my={"10"}>
                  <BlogParser content={article.articleContent} />
                </Flex>

                <Flex width={"100%"} px={"2"} my={"3"}>
                  <Flex
                    w={{ base: "50%", md: "40%", lg: "20%" }}
                    justify={"space-between"}
                    fontSize={"2xl"}
                    border={"2px solid"}
                    px={"3"}
                    py={"2"}
                    alignSelf={"center"}
                    borderRadius={"full"}
                    borderColor={"#f2f2f2"}
                    color={"gray.600"}
                  >
                    <LikeIcon
                      value={`${currentArticle.likes}`}
                      iconAction={handleLike}
                      liked={likes.find((like) => {
                        return like.authorId === authID;
                      })}
                    />
                    <AddbookMarkIcon
                      authorId={currentArticle.authorId}
                      authorDN={currentArticle.authorDN}
                      authorImageUrl={currentArticle.authorImageUrl}
                      articleTitle={currentArticle.articleTitle}
                      articleDesc={currentArticle.articleDesc}
                      articleThumbnail={currentArticle.articleThumbnail}
                      articleSlug={currentArticle.articleSlug}
                      readtime={currentArticle.readtime}
                      articleID={currentArticle.articleID}
                      value={""}
                      size=""
                    />
                  </Flex>

                  <>
                    {likes.length > 0 && (
                      <Flex
                        justify={"space-between"}
                        fontSize={"2xl"}
                        border={"2px solid"}
                        px={"3"}
                        py={"1"}
                        alignSelf={"center"}
                        borderRadius={"full"}
                        borderColor={"#f2f2f2"}
                        color={"gray.600"}
                        mx={"2"}
                        minH={"45px"}
                      >
                        <LikesCard
                          likesArray={likes}
                          totalLikes={currentArticle.likes!}
                        />
                      </Flex>
                    )}
                  </>
                </Flex>
                <Icon
                  as={AiOutlineEllipsis}
                  fontSize={"7xl"}
                  my={"7"}
                  color={"gray.500"}
                  alignSelf={"center"}
                />
                <Flex
                  flexDir={"column"}
                  mt={"10"}
                  width={"100%"}
                  align={"center"}
                >
                  <ProfileCardLarge
                    imageUrl={profileDetails.imageUrl}
                    Bio={profileDetails.Bio}
                    email={profileDetails.email}
                    userDN={profileDetails.userDN}
                    userId={profileDetails.userId}
                    twitter={profileDetails.twitter}
                  />
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    placeItems={"center"}
                  >
                    {!loading &&
                      profileArticles.map((article, index) => (
                        <PostcardLarge
                          key={index}
                          showProfile={false}
                          articleDesc={article.articleDesc}
                          articleSlug={article.articleSlug}
                          articleTitle={article.articleTitle}
                          articleThumbnail={article.articleThumbnail}
                          profileId={article.authorId!}
                          imageUrl={article.authorImageUrl!}
                          displayName={article.authorDN!}
                          authorDN={currentArticle.authorDN}
                          authorId={currentArticle.authorId}
                          authorImageUrl={currentArticle.authorImageUrl}
                          readtime={article.readTime}
                          publishDate={article.publishDate}
                        />
                      ))}
                  </SimpleGrid>
                </Flex>
                {/* <Flex
                  flexDir={"column"}
                  width={"100%"}
                  align={"center"}
                  pb={"10"}
                >
                  <Text fontWeight={"700"} m={"4"} fontSize={"2xl"}>
                    Recommendation
                  </Text>
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    placeItems={"center"}
                  >
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                  </SimpleGrid>
                </Flex> */}
              </Flex>
            </>
          )}

          {isOpen && (
            <CommentDrawer
              onClose={onClose}
              isOpen={isOpen}
              user={user}
              articleID={article.published}
            />
          )}
        </Flex>
      </SingleContentLayout>
    </>
  );
};

type CommentDrawerProps = {
  isOpen: boolean;
  user: User | null | undefined;
  articleID: string;

  onClose: () => void;
};
const CommentDrawer: React.FC<CommentDrawerProps> = ({
  isOpen,
  onClose,
  user,
  articleID,
}) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement={window.innerWidth < 700 ? "bottom" : "right"}
        onClose={onClose}
        size={"sm"}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex width={"100%"} align={"center"}>
              <Text mr={"5"}> comments</Text>
              <Text fontSize={"sm"}> </Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <CommentsComponent onClose={onClose} articleID={articleID} />
          </DrawerBody>

          <DrawerFooter py={"10"}>
            <Button variant={"unstyled"} onClick={onClose}>
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Post;
