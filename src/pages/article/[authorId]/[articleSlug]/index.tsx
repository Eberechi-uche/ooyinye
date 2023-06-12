import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import BlogPostHeader from "@/Components/Headers/BlogPost.Header";
import BlogParser from "@/Components/BlogParser/BlogParser";

import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import BlogNavFooter from "@/Components/MobileFooter/BlogNavFooter";
import PostcardLarge from "@/Components/Card/PostcardLarge";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";
import UserAuth from "@/Components/Auth.component/UserAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/Components/Firebase/ClientApp";
import { User } from "firebase/auth";
import Comments from "@/Components/Comments/Comment";
import { useEffect, useState } from "react";
import {
  AddbookMarkIcon,
  CommentsIcon,
  HomeIcon,
  LikeIcon,
  ShareIcon,
} from "@/Components/Icons/Icons";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { PageContent } from "@/Components/Loaders/loader";
import useGetProfileDetails from "@/Hooks/DataFetching/useGetProfileInfo";
import { useRecoilState } from "recoil";
import { Article, articleAtom } from "@/Atoms/ArticleAtom";
import { Draft } from "@/Atoms/DraftAtom";

const Post: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentArticle, setCurrentArticle] = useRecoilState(articleAtom);
  const [article, setArticle] = useState<Draft>({
    articleContent: "",
    articleDesc: "",
    articleSlug: "",
    articleThumbnail: "",
    articleTitle: "",
    published: "",
  });
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const { authorId, articleSlug } = useRouter().query;
  const {
    profileArticles,
    profileDetails,
    getProfileArticles,
    getProfileDetails,
  } = useGetProfileDetails(`${authorId}`);
  const [error, setError] = useState("");

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
      setArticle({ ...docSnap.data() } as Draft);
      setLoading(false);
      setCurrentArticle({ ...(docSnap.data() as Article) });
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
    getProfileDetails();
    getProfileArticles();
  }, [articleSlug]);

  return (
    <>
      <SingleContentLayout>
        <Flex pos={"relative"} flexDir={"column"} width={"100%"}>
          {loading && <PageContent />}
          {!loading && (
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
                <Flex
                  width={"50%"}
                  justify={"space-between"}
                  fontSize={"2xl"}
                  border={"2px solid"}
                  p={"5"}
                  alignSelf={"center"}
                  borderRadius={"full"}
                  borderColor={"gray.200"}
                  color={"gray.600"}
                >
                  <LikeIcon value="" />
                  <AddbookMarkIcon value="" />
                </Flex>

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
                          articleContent=""
                          showProfile={false}
                          articleDesc={article.articleDesc}
                          articleSlug={article.articleSlug}
                          articleTitle={article.articleTitle}
                          articleThumbnail={article.articleThumbnail}
                          profileId={article.authorId!}
                          imageUrl={article.authorImageUrl!}
                          displayName={article.authorDN!}
                          published=""
                        />
                      ))}
                  </SimpleGrid>
                </Flex>
                <Flex
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
                    {/* <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} />
                    <PostcardLarge showProfile={true} /> */}
                  </SimpleGrid>
                </Flex>
              </Flex>
            </>
          )}

          {isOpen && (
            <CommentDrawer onClose={onClose} isOpen={isOpen} user={user} />
          )}
        </Flex>
      </SingleContentLayout>
    </>
  );
};

type CommentDrawerProps = {
  isOpen: boolean;
  user: User | null | undefined;

  onClose: () => void;
};
const CommentDrawer: React.FC<CommentDrawerProps> = ({
  isOpen,
  onClose,
  user,
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
            <Flex flexDir={"column"}>
              <Divider />
              {user ? (
                <>
                  <Input placeholder={"comment"} />
                </>
              ) : (
                <>
                  <Flex
                    width={{ base: "100%", md: "60%" }}
                    flexDir={"column"}
                    p={"4"}
                    alignSelf={"center"}
                    onClick={onClose}
                  >
                    <Text textAlign={"center"} mb={"2"}>
                      Login to Join the conversation
                    </Text>
                    <UserAuth />
                  </Flex>
                </>
              )}
              {/* 
              <Comments />
              <Comments />
              <Comments /> */}
            </Flex>
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
