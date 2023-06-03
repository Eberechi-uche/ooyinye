import { Flex, Text, Image, Icon, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CiMail, CiTwitter } from "react-icons/ci";
import { SupportIcon } from "../Icons/Icons";
import { BsDot, BsMailbox, BsMailbox2, BsTwitter } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export type ProfileCardLargeProps = {
  email: string | undefined;
  Bio: string | undefined;
  imageUrl: string | undefined;
  userId: string | undefined;
  twitter: string | undefined;
  userDN: string | undefined;
};
const ProfileCardLarge: React.FC<ProfileCardLargeProps> = ({
  email = "https://beebom.com/cool-interesting-websites/",
  twitter = "https://beebom.com/cool-interesting-websites/",
  imageUrl = "/ada-lovelace.webp",
  Bio = "First female programer, mathematician, built the analytical engine",
  userId = "@adalovelace",
  userDN = "Ada Lovelace",
}) => {
  const { profileId } = useRouter().query;
  const route = useRouter();

  return (
    <>
      <Flex
        width={"100%"}
        p={"5"}
        flexDir={"column"}
        onClick={() => {
          route.push(`/profile/${userId}`);
        }}
      >
        <Flex justify={"space-between"} width={"100%"}>
          <Flex width={"100%"} align={"center"}>
            <Image
              src={imageUrl}
              boxSize={"50px"}
              objectFit={"cover"}
              borderRadius={"full"}
              mr={"2"}
              alt={"profile"}
            />
            <Text fontWeight={"500"}> {userDN}</Text>
          </Flex>
          <Flex align={"center"}>
            <Button
              borderRadius={"full"}
              size={"sm"}
              colorScheme="blue"
              color={"#fff"}
              mr={"3"}
            >
              follow
            </Button>
            <SupportIcon value={"Support"} />
          </Flex>
        </Flex>

        <Text fontSize={"sm"} my={"2"}>
          {Bio}
        </Text>

        <Flex fontSize={"2xl"} mt={"7"}>
          <Link href={twitter} target="_blank">
            <Icon as={BsTwitter} mr={"10"} />
          </Link>
          <Link href={email}>
            <Icon as={IoMail} />
          </Link>
        </Flex>
        <Flex
          color={"blue.600"}
          fontWeight={"500"}
          width={"100%"}
          align={"center"}
        >
          <Text> 2k followers</Text>
          <Icon as={BsDot} mx={"4"} fontSize={"2xl"} />
          <Text> 400 following</Text>
        </Flex>
        <Divider />
      </Flex>
    </>
  );
};
export default ProfileCardLarge;
