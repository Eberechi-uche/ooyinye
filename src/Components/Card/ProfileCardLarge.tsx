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
              <Link href={email}>
                <Icon as={IoMail} />
              </Link>
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
