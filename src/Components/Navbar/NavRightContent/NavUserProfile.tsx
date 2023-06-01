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
import {
  CiUser,
  CiLogin,
  CiGrid41,
  CiBookmarkCheck,
  CiPen,
  CiSettings,
  CiFileOn,
} from "react-icons/ci";

import { BsBookmarkFill, BsChevronRight, BsFillBookFill } from "react-icons/bs";
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
import Link from "next/link";
import { useRouter } from "next/router";

const NavUserProfile: React.FC = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

          <DrawerBody>
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
          <ListIcon as={CiUser} />
          Profile
        </ListItem>

        <ListItem display={"flex"} alignItems={"center"}>
          <ListIcon as={CiGrid41} />
          Dashboard
        </ListItem>
        <ListItem display={"flex"} alignItems={"center"}>
          <ListIcon as={CiFileOn} />
          Draft
        </ListItem>
        <ListItem
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            route.push("/Bookmarks");
          }}
        >
          <ListIcon as={CiBookmarkCheck} />
          Bookmarks
        </ListItem>
        <ListItem
          display={"flex"}
          alignItems={"center"}
          onClick={() => {
            route.push("/profile/profile-setting");
          }}
        >
          <ListIcon as={CiSettings} />
          Profile settings
        </ListItem>
      </List>
    </>
  );
};
