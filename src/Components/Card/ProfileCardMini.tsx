import { Icon, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export type ProfileCardMiniProps = {
  displayName: string;
  imageUrl: string;
  profileId: string;
  size?: string;
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
          route.push(`/profile/${props.profileId}`);
        }}
      >
        <Flex align={"center"}>
          <Image
            src={props.imageUrl}
            boxSize={props.size ? props.size : "20px"}
            objectFit={"cover"}
            borderRadius={"full"}
            mr={"2"}
            alt={"profile"}
          />
          <Text
            fontWeight={"800"}
            fontSize={props.size ? "md" : "xs"}
            color={"blackAlpha.700"}
            textTransform={"uppercase"}
            fontFamily={"monospace"}
          >
            {props.displayName}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfileCardMini;
