import PostCard from "@/Components/Card/PostCard";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import useGetProfileDetails from "@/Hooks/DataFetching/useGetProfileInfo";
import { ProfileContentLoadState } from "@/Components/Loaders/loader";
import { Article } from "@/Atoms/ArticleAtom";
import { GrArticle } from "react-icons/gr";

const Profile: React.FC = () => {
  const { profileId } = useRouter().query;

  const {
    loading,
    profileArticles,
    profileDetails,
    error,
    getProfileArticles,
    getProfileDetails,
  } = useGetProfileDetails(`${profileId}`);

  useEffect(() => {
    getProfileDetails();
    getProfileArticles(true);
  }, [profileId]);
  return (
    <SingleContentLayout>
      <Flex maxW={"900px"} flexDir={"column"}>
        {loading && (
          <>
            <ProfileContentLoadState />
          </>
        )}
        {!loading && (
          <>
            <ProfileCardLarge
              Bio={profileDetails?.Bio}
              imageUrl={profileDetails?.imageUrl}
              twitter={profileDetails?.twitter}
              email={profileDetails?.email}
              userId={profileDetails?.userId}
              userDN={profileDetails?.userDN}
            />
          </>
        )}

        <Flex flexDir={"column"}>
          {!loading &&
            profileArticles.map((article, index) => (
              <Flex key={index}>
                <PostCard
                  showProfile={false}
                  articleDesc={article.articleDesc}
                  articleSlug={article.articleSlug}
                  articleTitle={article.articleTitle}
                  articleThumbnail={article.articleThumbnail}
                  authorDN={article.authorDN!}
                  authorId={`${article.authorId}`}
                  authorImageUrl={article.authorImageUrl!}
                  readtime=""
                />
              </Flex>
            ))}
          {!loading && !profileArticles.length && (
            <Flex width={"100%"} flexDir={"column"} align={"center"}>
              <Text fontWeight={"900"}>User have no Articles</Text>
              <Icon as={GrArticle} fontSize={"30vh"} />
            </Flex>
          )}
        </Flex>
      </Flex>
    </SingleContentLayout>
  );
};

export default Profile;
