import PostCard from "@/Components/Card/PostCard";
import TopTrendCard from "@/Components/Card/TopTrendCard";
import ProfilePageHeader from "@/Components/Headers/ProfilePage.Header";
import Carousel from "@/Components/Layout/Carousel.Layout";
import ContentLayout from "@/Components/Layout/Content.Layout";
import UserProfleLHS from "@/Components/LeftContentComponent/ProfileLHS/UserProfile";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Profile: React.FC = () => {
  const { profileId } = useRouter().query;
  return (
    <Flex width={"100vw"} justify={"center"}>
      <Flex maxW={"1300px"} flexDir={"column"}>
        <ProfilePageHeader profile={profileId} />
        <Flex flexDir={"column"} bg={"whatsapp.50"}>
          <Text>Pinned</Text>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
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
      </Flex>
    </Flex>
  );
};

export default Profile;
