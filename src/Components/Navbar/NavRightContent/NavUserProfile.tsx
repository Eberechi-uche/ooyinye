import {
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure,
  List,
  ListIcon,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { CiUser, CiLogin, CiBookmarkCheck, CiSettings } from "react-icons/ci";

import { BsChevronRight } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import {
  BookmarkIcon,
  DashboardIcon,
  DraftIcon,
  ProfileIcon,
  ProfileSetting,
} from "@/Components/Icons/Icons";
import { useProfileData } from "@/Hooks/Profile/useProfileData";
import { useResetRecoilState } from "recoil";
import { authUserAtom } from "@/Atoms/AuthUserAtom";

const NavUserProfile: React.FC = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userState } = useProfileData();
  const resetUserState = useResetRecoilState(authUserAtom);

  return (
    <>
      <Flex align={"center"} onClick={onOpen} cursor={"pointer"}>
        <Image
          src={user?.photoURL!}
          alt={"user profile"}
          boxSize={"30px"}
          objectFit={"cover"}
          borderRadius={"full"}
        />
        <Icon as={BsChevronRight} fontSize={"10px"} ml={"2"} />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader my={"50px"}>
            <Text> {user?.displayName}</Text>
          </DrawerHeader>

          <DrawerBody onClick={onClose} cursor={"pointer"}>
            <UserActions />
          </DrawerBody>
          <Divider />
          <DrawerFooter>
            <Text
              display={"flex"}
              alignItems={"center"}
              width={"100%"}
              justifyContent={"start"}
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
                signOut(auth);
                resetUserState();
              }}
            >
              <Icon as={CiLogin} mr={"2"} />
              Sign out
            </Text>
            <Text fontSize={"xs"}>{user?.email}</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NavUserProfile;

const UserActions: React.FC = () => {
  const route = useRouter();
  return (
    <>
      <List spacing={3} fontSize={"lg"} fontWeight={"light"}>
        <ListItem
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            route.push(`/profile/@${auth.currentUser?.email?.split("@")[0]}`);
          }}
        >
          <ProfileIcon
            value={"Profile"}
            userID={auth.currentUser?.email?.split("@")[0]}
          />
          <Text display={{ lg: "none" }} ml={"2"}>
            Profile
          </Text>
        </ListItem>

        <ListItem
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            route.push(`/profile/Dashboard`);
          }}
        >
          <DashboardIcon value={"Dashboard"} />
          <Text display={{ lg: "none" }} ml={"2"}>
            Dashboard
          </Text>
        </ListItem>
        <ListItem
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            route.push(`/profile/Dashboard/studio`);
          }}
        >
          <DraftIcon value="Draft" />
          <Text display={{ lg: "none" }} ml={"2"}>
            Draft
          </Text>
        </ListItem>
        <ListItem
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            route.push("/Bookmarks");
          }}
        >
          <BookmarkIcon value={"Bookmarks"} />
          <Text display={{ lg: "none" }} ml={"2"}>
            Bookmarks
          </Text>
        </ListItem>
        <ListItem
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            route.push("/profile/profile-setting");
          }}
        >
          <ProfileSetting value="Profile setting" />
          <Text display={{ lg: "none" }} ml={"2"}>
            Profile setting
          </Text>
        </ListItem>
      </List>
    </>
  );
};
