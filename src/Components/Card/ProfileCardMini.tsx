import { Icon, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

// type ProfileCardMiniProps = {
//   displayName: string;
//   imageUrl: string;
//   profileId: string;
// };
const ProfileCardMini: React.FC = ({}) => {
  const route = useRouter();
  return (
    <>
      <Flex
        fontSize={"xs"}
        align={"center"}
        my={"2"}
        onClick={() => {
          route.push("/profile/@adalovelace");
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
          <Text fontWeight={"400"}>Ada Lovelace</Text>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfileCardMini;
