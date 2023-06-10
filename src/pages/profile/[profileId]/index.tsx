import PostCard from "@/Components/Card/PostCard";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";
import { firestore } from "@/Components/Firebase/ClientApp";
import { Flex, Text } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProfileCardLargeProps } from "@/Components/Card/ProfileCardLarge";

const Profile: React.FC = () => {
  const { profileId } = useRouter().query;
  const [user, setUser] = useState<ProfileCardLargeProps | null>(null);
  useEffect(() => {
    const docRef = doc(firestore, "users", `${profileId}`);

    const fetchData = async () => {
      try {
        const doc = await getDoc(docRef);
        if (doc.exists()) {
          setUser({ ...doc.data() } as ProfileCardLargeProps);
        }
      } catch (error) {}
    };
    fetchData();
  }, [profileId]);

  return (
    <Flex width={"100vw"} justify={"center"}>
      <Flex maxW={"900px"} flexDir={"column"}>
        {/* <ProfilePageHeader profile={profileId} /> */}
        <ProfileCardLarge
          Bio={user?.Bio}
          imageUrl={user?.imageUrl}
          twitter={user?.twitter}
          email={user?.email}
          userId={user?.userId}
          userDN={user?.userDN}
        />
        <Flex flexDir={"column"}>
          <Text> still working on this !</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
