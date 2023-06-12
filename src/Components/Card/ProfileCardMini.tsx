import { Icon, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export type ProfileCardMiniProps = {
  displayName: string;
  imageUrl: string;
  profileId: string;
};
const ProfileCardMini: React.FC<ProfileCardMiniProps> = (props) => {
  const route = useRouter();
  return (
    <>
      <Flex
        fontSize={"xs"}
        align={"center"}
        my={"2"}
        onClick={() => {
          route.push(`/profile/@${props.profileId}`);
        }}
      >
        <Flex>
          <Image
            src={props.imageUrl}
            boxSize={"20px"}
            objectFit={"cover"}
            borderRadius={"full"}
            mr={"2"}
            alt={"profile"}
          />
          <Text fontWeight={"400"}>{props.displayName}</Text>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfileCardMini;
