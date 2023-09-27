import { Flex, Button, Divider, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ProfileCardMiniProps } from "./ProfileCardMini";
import { useRecoilState } from "recoil";
import { authUserAtom } from "@/Atoms/AuthUserAtom";
import { useProfileData } from "@/Hooks/Profile/useProfileData";

export const UserInfoCard: React.FC<ProfileCardMiniProps> = (props) => {
  const [userState] = useRecoilState(authUserAtom);

  const { onClickFollow, loading } = useProfileData();
  const isFollowing = userState.following.find((user) => {
    return user.userId === props.profileId;
  });

  return (
    <>
      <Flex align={"center"} my={"5"} width={"100%"} justify={"space-between"}>
        <Link href={`/profile/${props.profileId}`}>
          <Flex align={"center"}>
            <Image
              src={props.imageUrl}
              alt={"userProfile"}
              boxSize={"35px"}
              objectFit={"cover"}
              borderRadius={"full"}
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={"600"}
              ml={"2"}
              fontSize={"sm"}
            >
              {props.displayName}
            </Text>
          </Flex>
        </Link>

        <Flex>
          {!isFollowing ? (
            <>
              <Button
                color={"#fff"}
                colorScheme="green"
                size={"xs"}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onClickFollow({
                    userDN: props.displayName,
                    userId: props.profileId,
                    imageUrl: props.imageUrl,
                  });
                }}
                isLoading={loading}
              >
                follow
              </Button>
            </>
          ) : (
            <>
              <Button
                color={"green"}
                colorScheme="green"
                size={"xs"}
                variant={"outline"}
              >
                following
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};
export default UserInfoCard;
