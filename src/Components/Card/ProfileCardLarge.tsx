import {
  Flex,
  Text,
  Image,
  Icon,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsTwitter } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { useProfileData } from "@/Hooks/Profile/useProfileData";
import { UserSnippet } from "@/Hooks/Profile/useProfileData";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";

import { useEffect, useState } from "react";
import useGetCollection from "@/Hooks/DataFetching/useGetCollection";
import UserInfoCard from "./UserInfoCard";
import { UserSnippetLoader } from "../Loaders/loader";

export type ProfileCardLargeProps = {
  email: string;
  Bio: string;
  imageUrl: string;
  userId: string;
  twitter: string;
  userDN: string;
};
const ProfileCardLarge: React.FC<ProfileCardLargeProps> = ({
  email,
  twitter,
  imageUrl,
  Bio,
  userId,
  userDN,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const route = useRouter();
  const [user] = useAuthState(auth);

  const { onClickFollow, loading, userState } = useProfileData();
  const [drawerValue, setDrawerValue] = useState("");

  return (
    <>
      <Flex
        width={"100%"}
        p={"5"}
        flexDir={"column"}
        onClick={() => {
          route.push(`/profile/${userId}`);
        }}
        color={"blackAlpha.800"}
        fontFamily={"monospace"}
        cursor={"pointer"}
      >
        <Flex justify={"space-between"} width={"100%"}>
          <Flex width={"100%"} align={"center"}>
            <Image
              src={imageUrl}
              boxSize={"50px"}
              objectFit={"cover"}
              borderRadius={"full"}
              mr={"2"}
              fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAMAAABNO5HnAAAAvVBMVEXh4eGjo6OkpKSpqamrq6vg4ODc3Nzd3d2lpaXf39/T09PU1NTBwcHOzs7ExMS8vLysrKy+vr7R0dHFxcXX19e5ubmzs7O6urrZ2dmnp6fLy8vHx8fY2NjMzMywsLDAwMDa2trV1dWysrLIyMi0tLTCwsLKysrNzc2mpqbJycnQ0NC/v7+tra2qqqrDw8OoqKjGxsa9vb3Pz8+1tbW3t7eurq7e3t62travr6+xsbHS0tK4uLi7u7vW1tbb29sZe/uLAAAG2UlEQVR4XuzcV47dSAyG0Z+KN+ccO+ecHfe/rBl4DMNtd/cNUtXD6DtLIAhCpMiSXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIhHnfm0cVirHTam884sVu6Q1GvPkf0heq7VE+UF5bt2y97Vat+VlRniev/EVjjp12NlgdEytLWEy5G2hepDYOt7qGob2L23Dd3valPY6dsW+jvaBOKrkm2ldBVrbag+2tYeq1oX6RxYBsF6SY3vA8to8F0roRJaZmFFK2ASWA6CiT6EhuWkoQ9gablZ6l1oW47aWoF8dpvT6FrOunoD5pa7uf6CaslyV6rqD0guzYHLRK/hwJw40Cu4MUdu9Bt8C8yR4Jt+gRbmzEKvUTicFw8kY3NonOg/aJpTTf2AWWBOBTNBkvrmWF+QNDPnZoLUNOeagpKSOVdKhK550BVa5kGLOFfMCxY92ubFuYouNC9CFdyuebKrYrsyL9hcGpgnAxVaXDJPSrGKrGreVFVkU/NmykDJj1sV2Z55s0e74hwtS9k8KvNzxY8ZozvX+L67M4/uVFwT84Kt9CPz6EjFdUqgMyCjCTSHWD4cq7jOzKMzxtGu8ddwxzzaUXHFgXkTxCqwyLyJOON0j9POc/OCpbAj+hU/Zsz9Pbk2T65VbM/mybOKbd882VexjegLPXk0L154uvF/tR5N7RjJB9bvBsLEPJgI5dCcC2P5wL3QlSClJ+bYSSpIqpljh4IkpWNzapzqB3T9vCGBuGUOtWL9hDNPizMYmjND/QIloTkSJvKB4tHRK1iaE0u9hnhgDgxi/QFJZLmLEv0FvbHlbNzTG9ApWa5KHb0J9cByFNT1DhznGOngWO9CvWQ5KdX1AXweWy7Gn/Uh9CLLQdTTCkgPLLODVCshPrSMarHWgUpkGURrl2c83drWbp+0PlRebCsvFW0G+6FtLNzXxlDuXttGrrtlbQPlacvW1ppmCDPOHgJbQ/BwpmyQnh6siHVwcJoqB3iqNx/tHY/N+pPyg7Rz83Xv0n5zuff1ppPKCSS9audf1V6i9QAAAAAAAAAAAAAAAAAAAAAAEMdyAuVeZ9I4H95/uojGgf0QjKOLT/fD88ak0ysrI6SVo9qXRWgrhIsvtaNKqs2hXNlvD0LbSDho71fKWhsxvulf2NYu+jcro42d+e0isMyCxe18R2/D6HQYWY6i4elIryE9brbMgVbzONVP2G3sBeZMsNfYFf5h715302aDIADP2Lw+CIdDQhKcGuIgKKSIk1MSMND7v6zvBvqprdqY3bWfS1itRto/O+52t+KnW+2+OdSYK+5TViS9LxxqyX07p6xUeq7hXl+WPq/AX15QI+9fDryaw5d31EP7HPGqonMb5rmvYwow/upgWTDzKYQ/C2BV3o8oSNTPYVH26FEY7zGDNfnZo0DeOYclwc6jUN4ugBVxZ0HBFp0YJoxaFK41gn7ZGxWYZtDNrSOqEK0dFLscqMbhArXuIioS3UGnHw9U5uEHFCp9quOXUGfrUSFvC11cl0p1nbK+KwHs92yFYyo2DqFEsKdq+wAqhHsqtw+hQHykescY4rnvNOC7g3TPNOEZwt3QiBuINkxpRDqEZFOaMYVgTzTkCWKFGxqyCSHVkqYsIVQQ0ZQogEwJjUkgkvNpjO8g0ZzmzCHRieacIJBLaU7qIE+bBrUhz5YGbSHPmQadIc+EBk0gT48G9SDPPQ06QZ5gQ3M2AQQa0ZwRqtCExz1kClc0ZRVCqFuacguxEhqSQC53pBlHB8HyDY3Y5BDttgnoinRoQgfinZrTuxrxgeodYiiQ+1TOz6HCy4KqLV6gREHVCqjxSsVeociaaq2hyjOVeoYyXarUhTrdZs4VeaQ6j9DIdZsXEhXpU5U+1EqoSALFtlRjC9VGHlXwRlCuTKlAWkK9rEfxehkMCB8o3EMIE1yfovUdrHiKKFb0BEMuPQrVu8CU9xNFOr3DmtcFxVm8wqBsTGHGGUxya4+CeGsHqwZjijEewDAn5Rt9dOdgWzZt6kAqMm/xylpz1EI8i3hF0SxGXQxPvJrTEHXyMuVVTF9QN+WElZuUqKPiyEodC9RV+cbKvJWos0E1TbTe4wB1l89W/GSrWY4G4G4+NUHebhwEkGGYtPgpWskQAkjSXvr8x/xlGz/RKHcr/jOrXYn/1bh0Jh7/mjfpXPALjXC+O/Av7HfzEL+nERbJZME/tpgkRYg/1Mjms48Wf1PrYzbPIIBW8aDY9j/2vsef8vz9R39bDOL/2qlDIwCBGACCOMTLl4klOpP+i4MimFe7DZy7v3rcuaYqej+f3VE1K09+AgAAAAAAAAAAAAAAAAAAAAAAgBf6wsTW1jN3CAAAAABJRU5ErkJggg=="
              alt={"profile"}
            />
            <Text
              fontWeight={"900"}
              textTransform={"uppercase"}
              color={"orange.700"}
            >
              {userDN}
            </Text>
          </Flex>
          {userId !== `@${user?.email?.split("@")[0]}` && (
            <NotAuthUserAction
              onClickFollow={onClickFollow}
              userDN={userDN}
              userId={userId}
              imageUrl={imageUrl}
              isLoading={loading}
              following={userState.following}
            />
          )}

          {userId === `@${user?.email?.split("@")[0]}` && <AuthUserAction />}
        </Flex>

        <Text fontSize={"sm"} my={"2"}>
          {Bio}
        </Text>

        <Flex fontSize={"2xl"} mt={"7"}>
          {twitter && (
            <>
              <Link href={twitter} target="_blank">
                <Icon as={BsTwitter} mr={"10"} />
              </Link>
            </>
          )}
          {email && (
            <>
              <a href={`mailto: ${email}`} target="_blank">
                <Icon as={IoMail} />
              </a>
            </>
          )}
        </Flex>
        <Flex
          color={"green.300"}
          fontWeight={"500"}
          width={"100%"}
          align={"center"}
          my={"2"}
        >
          <Button
            size={"sm"}
            color={"blackAlpha.900"}
            onClick={(e) => {
              e.stopPropagation();
              setDrawerValue("followers");
              onOpen();
            }}
            variant={"unstyled"}
          >
            followers
          </Button>
          <Button
            ml={"4"}
            size={"sm"}
            color={"blackAlpha.900"}
            onClick={(e) => {
              e.stopPropagation();
              setDrawerValue("following");
              onOpen();
            }}
            variant={"unstyled"}
          >
            following
          </Button>
        </Flex>
        <Divider />
      </Flex>
      {isOpen && (
        <ProfileCardLargeDrawer
          isOpen={isOpen}
          onClose={onClose}
          value={drawerValue}
          cardProfileId={userId}
        />
      )}
    </>
  );
};
type ProfileCardLargeDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  cardProfileId: string;
};
const ProfileCardLargeDrawer: React.FC<ProfileCardLargeDrawerProps> = ({
  isOpen,
  onClose,
  value,
  cardProfileId,
}) => {
  const { getCollection, collectionData, loading } = useGetCollection();

  useEffect(() => {
    getCollection(cardProfileId, value);
  }, [isOpen]);
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex width={"100%"}>
              <Text mr={"5"}>{value}</Text>
              <Text> {collectionData.length}</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody onClick={onClose}>
            {collectionData &&
              collectionData.map((user) => (
                <UserInfoCard
                  imageUrl={user.imageUrl}
                  displayName={user.userDN}
                  profileId={user.userId}
                  key={user.userId}
                />
              ))}
            {loading && <UserSnippetLoader />}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="unstyled" mr={3} onClick={onClose}>
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

type NotAuthUserActionProps = {
  onClickFollow: (user: UserSnippet) => void;
  isLoading: boolean;
  userId: string;
  userDN: string;
  imageUrl: string;
  following: UserSnippet[];
};

const NotAuthUserAction: React.FC<NotAuthUserActionProps> = ({
  onClickFollow,
  isLoading,
  userDN,
  userId,
  imageUrl,
  following,
}) => {
  const follwingUser =
    following &&
    following.find((user) => {
      return user.userId === userId;
    });
  return (
    <>
      <Flex align={"center"}>
        {!follwingUser ? (
          <>
            <Button
              borderRadius={"full"}
              size={"sm"}
              bg={"gray.800"}
              colorScheme="blackAlpha"
              color={"#fff"}
              mr={"3"}
              isLoading={isLoading}
              onClick={(e) => {
                e.stopPropagation();
                onClickFollow({
                  userId,
                  userDN,
                  imageUrl,
                });
              }}
            >
              follow
            </Button>
          </>
        ) : (
          <>
            <Button
              borderRadius={"full"}
              size={"sm"}
              color={"blackAlpha.900"}
              mr={"3"}
              isLoading={isLoading}
              variant={"unstyled"}
              border={"2px solid"}
              px={"2"}
            >
              following
            </Button>
          </>
        )}
      </Flex>
    </>
  );
};

const AuthUserAction: React.FC = () => {
  const route = useRouter();
  return (
    <>
      <Flex align={"center"}>
        <Button
          borderRadius={"full"}
          size={"sm"}
          variant="brandPrimary"
          color={"#fff"}
          onClick={() => {
            route.push("/profile/Dashboard");
          }}
          mr={"3"}
        >
          Dashboard
        </Button>
      </Flex>
    </>
  );
};
export default ProfileCardLarge;
