import PostCard from "@/Components/Card/PostCard";
import TopTrendCard from "@/Components/Card/TopTrendCard";
import ProfilePageHeader from "@/Components/Headers/ProfilePage.Header";
import Carousel from "@/Components/Layout/Carousel.Layout";
import ContentLayout from "@/Components/Layout/Content.Layout";
import { Flex, Text } from "@chakra-ui/react";

const Profile: React.FC = () => {
  return (
    <>
      <ContentLayout>
        <>
          <ProfilePageHeader />
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
          <Flex>
            <Text> hello right hand</Text>
          </Flex>
        </>
      </ContentLayout>
    </>
  );
};

export default Profile;
