import PostCard from "@/Components/Card/PostCard";
import TopTrendCard from "@/Components/Card/TopTrendCard";
import ProfilePageHeader from "@/Components/Headers/ProfilePage.Header";
import Carousel from "@/Components/Layout/Carousel.Layout";
import ContentLayout from "@/Components/Layout/Content.Layout";
import UserProfleLHS from "@/Components/LeftContentComponent/ProfileLHS/UserProfile";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Profile: React.FC = () => {
  const { profile } = useRouter().query;
  return (
    <>
      <ContentLayout>
        <>
          <ProfilePageHeader profile={profile} />
          <Flex flexDir={"column"}>
            <Text>Pinned</Text>
            <Carousel>
              <TopTrendCard />
              <TopTrendCard />
              <TopTrendCard />
              <TopTrendCard />
              <TopTrendCard />
            </Carousel>
          </Flex>
          <Flex flexDir={"column"}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Flex>
        </>
        <>
          <UserProfleLHS profile={profile} />
        </>
      </ContentLayout>
    </>
  );
};

export default Profile;
