import { Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { type } from "os";
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
export type ProfilePageHeaderProps = {
  profile: string | undefined | string[];
};
const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({ profile }) => {
  return (
    <>
      <Text
        display={{ base: "none", lg: "block" }}
        fontSize={"4xl"}
        textTransform={"capitalize"}
        fontWeight={"500"}
        px={"10px"}
        py={"20px"}
      >
        {profile}
      </Text>
      {/* show on mobile view */}
      <Flex
        py={"20px"}
        align={"center"}
        width={{
          base: "100%",
        }}
        display={{ lg: "none" }}
        flexDir={"column"}
      >
        <ProfileInfo profile={profile} />
      </Flex>
    </>
  );
};

type ProfileInfoProps = {
  profile: string | undefined | string[];
};
export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  return (
    <>
      <Flex width={"100%"} justify={"center"} position={"relative"}>
        <Image
          src={"/series.webp"}
          alt={"userProfile"}
          boxSize={"100px"}
          borderRadius={"full"}
        />
      </Flex>

      <Flex
        flexDir={"column"}
        ml={"2"}
        width={"100%"}
        align={"center"}
        mt={"20px"}
      >
        <Text textTransform={"capitalize"} fontSize={"2xl"} fontWeight={"500"}>
          {profile}
        </Text>
        <Flex width={{ base: "80%", md: "50%" }} justify={"space-around"}>
          <Button variant={"brandPrimary"}> follow</Button>
          <Button variant={"brandPrimary"}> connect</Button>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfilePageHeader;
