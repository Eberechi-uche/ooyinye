import PostCard from "@/Components/Card/PostCard";
import TopTrendCard from "@/Components/Card/PostcardLarge";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";
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
      <Flex maxW={"900px"} flexDir={"column"}>
        {/* <ProfilePageHeader profile={profileId} /> */}
        <ProfileCardLarge />
        <Flex flexDir={"column"} bg={"gray.50"}>
          <Text>Pinned</Text>
          <PostCard showProfile={false} />
          <PostCard showProfile={false} />
        </Flex>
        <Flex flexDir={"column"}>
          <PostCard showProfile={false} />
          <PostCard showProfile={false} />
          <PostCard showProfile={false} />
          <PostCard showProfile={false} />
          <PostCard showProfile={false} />
          <PostCard showProfile={false} />
          <PostCard showProfile={false} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
