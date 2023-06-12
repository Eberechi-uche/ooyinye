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
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsTwitter } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { useProfileData } from "@/Hooks/Profile/useProfileData";
import { UserSnippet } from "@/Hooks/Profile/useProfileData";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";

import { useState } from "react";
import { TopUsers } from "../LeftContentComponent/HomeSideContent/HomeLHS";

export type ProfileCardLargeProps = {
  email: string | undefined;
  Bio: string | undefined;
  imageUrl: string | undefined;
  userId: string | undefined;
  twitter: string | undefined;
  userDN: string | undefined;
};
const ProfileCardLarge: React.FC<ProfileCardLargeProps> = ({
  email,
  twitter,
  imageUrl = "/ada-lovelace.webp",
  Bio,
  userId = "@adalovelace",
  userDN = "Ada lovelace ",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const route = useRouter();
  const [user] = useAuthState(auth);

  const { onClickFollow, loading } = useProfileData();
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
          {userId !== `@${user?.email?.split("@")[0]}` && (
            <NotAuthUserAction
              onClickFollow={onClickFollow}
              userDN={userDN}
              userId={userId}
              imageUrl={imageUrl}
              isLoading={loading}
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
            size={"xs"}
            colorScheme="blackAlpha"
            color={"#fff"}
            onClick={(e) => {
              e.stopPropagation();
              setDrawerValue("followers");
              onOpen();
            }}
          >
            followers
          </Button>
          <Button
            ml={"4"}
            size={"xs"}
            colorScheme="blackAlpha"
            color={"#fff"}
            onClick={(e) => {
              e.stopPropagation();
              setDrawerValue("following");
              onOpen();
            }}
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
        />
      )}
    </>
  );
};
type ProfileCardLargeDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  value: string;
};
const ProfileCardLargeDrawer: React.FC<ProfileCardLargeDrawerProps> = ({
  isOpen,
  onClose,
  value,
}) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex width={"100%"}>
              <Text mr={"5"}>{value}</Text>
              <Text> 5</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody onClick={onClose}>
            <TopUsers />
            <TopUsers />
            <TopUsers />
            <TopUsers />
            <TopUsers />
            <TopUsers />
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
};

const NotAuthUserAction: React.FC<NotAuthUserActionProps> = ({
  onClickFollow,
  isLoading,
  userDN,
  userId,
  imageUrl,
}) => {
  return (
    <>
      <Flex align={"center"}>
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
