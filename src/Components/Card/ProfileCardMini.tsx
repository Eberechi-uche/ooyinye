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
        cursor={"pointer"}
      >
        <Flex align={"center"}>
          <Image
            src={props.imageUrl}
            boxSize={props.size ? props.size : "20px"}
            objectFit={"cover"}
            borderRadius={"5px"}
            mr={"2"}
            alt={"profile"}
          />
          <Text
            fontWeight={"900"}
            fontSize={"xs"}
            color={"blackAlpha.500"}
            textTransform={"uppercase"}
            // fontFamily={"monospace"}
          >
            {props.displayName}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfileCardMini;
