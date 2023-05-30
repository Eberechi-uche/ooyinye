import { Flex, Text, Image, Icon, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CiMail, CiDollar, CiTwitter } from "react-icons/ci";

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
            >
              follow
            </Button>
            <Icon as={CiDollar} fontSize={"4xl"} color={"green.500"} />
          </Flex>
        </Flex>

        <Text fontSize={"sm"}>{Bio}</Text>
        <Flex fontSize={"2xl"} mt={"7"}>
          <Link href={twitter} target="_blank">
            <Icon as={CiTwitter} mr={"10"} color={"blue.600"} />
          </Link>
          <Link href={email}>
            <Icon as={CiMail} color={"red.500"} />
          </Link>
        </Flex>
        <Divider />
      </Flex>
    </>
  );
};
export default ProfileCardLarge;
