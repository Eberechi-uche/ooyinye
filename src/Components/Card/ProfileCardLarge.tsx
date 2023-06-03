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
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SupportIcon } from "../Icons/Icons";
import { BsDot, BsTwitter } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { useProfileData } from "@/Hooks/Profile/useProfileData";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import ProfileCardMini from "./ProfileCardMini";
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
  email = "https://beebom.com/cool-interesting-websites/",
  twitter = "https://beebom.com/cool-interesting-websites/",
  imageUrl = "/ada-lovelace.webp",
  Bio = "First female programer, mathematician, built the analytical engine",
  userId = "@adalovelace",
  userDN = "Ada Lovelace",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const route = useRouter();
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
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
          <Flex align={"center"}>
            <Button
              borderRadius={"full"}
              size={"sm"}
              colorScheme="green"
              color={"#fff"}
              mr={"3"}
              isLoading={loading}
              onClick={() => {
                if (!user) {
                  setAuthModalState({
                    view: "Login",
                    open: true,
                  });
                  return;
                }
                onClickFollow({
                  userID: "@Adalovelace",
                  userDN: "Ada lovelace",
                  imagerUrl: "testcase",
                });
              }}
            >
              follow
            </Button>
            <SupportIcon value={"Support"} />
          </Flex>
        </Flex>

        <Text fontSize={"sm"} my={"2"}>
          {Bio}
        </Text>

        <Flex fontSize={"2xl"} mt={"7"}>
          <Link href={twitter} target="_blank">
            <Icon as={BsTwitter} mr={"10"} />
          </Link>
          <Link href={email}>
            <Icon as={IoMail} />
          </Link>
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
            colorScheme="green"
            color={"#fff"}
            onClick={(e) => {
              e.stopPropagation();
              setDrawerValue("followers");
              onOpen();
            }}
          >
            followers
          </Button>
          <Icon as={BsDot} mx={"4"} fontSize={"2xl"} />
          <Button
            size={"xs"}
            colorScheme="green"
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

export default ProfileCardLarge;
