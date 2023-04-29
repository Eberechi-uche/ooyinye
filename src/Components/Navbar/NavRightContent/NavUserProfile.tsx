import {
  Flex,
  Icon,
  Image,
  Text,
  Button,
  useDisclosure,
  List,
  ListIcon,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { CiUser, CiLogin } from "react-icons/ci";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

const NavUserProfile: React.FC = () => {
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
            <Text> Obi Okwonko</Text>
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
            >
              <Icon as={CiLogin} mr={"2"} />
              Sign out
            </Text>
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
          <ListIcon as={CiUser} />
          Profile
        </ListItem>
      </List>
    </>
  );
};
