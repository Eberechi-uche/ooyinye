import { Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ProfileCardMini: React.FC = () => {
  const route = useRouter();
  return (
    <>
      <Flex
        fontSize={"xs"}
        align={"center"}
        my={"2"}
        onClick={() => {
          route.push("/profile/Ada Lovelace");
        }}
      >
        <Flex>
          <Image
            src={"/ada-lovelace.webp"}
            boxSize={"20px"}
            objectFit={"cover"}
            borderRadius={"full"}
            mr={"2"}
            alt={"profile"}
          />
          <Text fontWeight={"400"}>Ada lovelace</Text>
        </Flex>
        <Text color={"blue.500"} fontWeight={"400"} ml={"10"}>
          follow
        </Text>
      </Flex>
    </>
  );
};
export default ProfileCardMini;
