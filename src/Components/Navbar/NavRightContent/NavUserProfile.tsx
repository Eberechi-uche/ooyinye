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
import { CiUser, CiLogin } from "react-icons/ci";
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
import Link from "next/link";

const NavUserProfile: React.FC = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex align={"center"} onClick={onOpen} cursor={"pointer"}>
        <Image
          src={"profileplacholder.png"}
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
  return (
    <>
      <List spacing={3} fontSize={"lg"} fontWeight={"light"}>
        <ListItem display={"flex"} alignItems={"center"}>
          <Link href={`/${auth.currentUser?.displayName}`}>
            <ListIcon as={CiUser} />
            Profile
          </Link>
        </ListItem>

        <ListItem display={"flex"} alignItems={"center"}>
          <ListIcon as={CiUser} />
          Dashboard
        </ListItem>
        <ListItem display={"flex"} alignItems={"center"}>
          <ListIcon as={CiUser} />
          write
        </ListItem>
      </List>
    </>
  );
};
