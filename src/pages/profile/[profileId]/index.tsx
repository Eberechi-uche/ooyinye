import PostCard from "@/Components/Card/PostCard";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";
import { firestore } from "@/Components/Firebase/ClientApp";
import { Flex, Text } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProfileCardLargeProps } from "@/Components/Card/ProfileCardLarge";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import useGetProfileDetails from "@/Hooks/DataFetching/useGetProfileInfo";
import { ProfileContentLoadState } from "@/Components/Loaders/loader";

const Profile: React.FC = () => {
  const { profileId } = useRouter().query;
  console.log(profileId);
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
    getProfileArticles();
  }, [profileId]);
  return (
    <SingleContentLayout>
      <Flex maxW={"900px"} flexDir={"column"}>
        {/* <ProfilePageHeader profile={profileId} /> */}
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
                  articleContent=""
                  showProfile={false}
                  articleDesc={article.articleDesc}
                  articleSlug={article.articleSlug}
                  articleTitle={article.articleTitle}
                  articleThumbnail={article.articleThumbnail}
                />
              </Flex>
            ))}
        </Flex>
      </Flex>
    </SingleContentLayout>
  );
};

export default Profile;
