import {
  Flex,
  Text,
  Image,
  Icon,
  Button,
  Input,
  Divider,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export type ProfilePageHeaderProps = {
  profile: string | undefined | string[];
};

const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({ profile }) => {
  return (
    <>
      <Text
        display={{ base: "none", lg: "block" }}
        fontSize={"4xl"}
        textTransform={"capitalize"}
        fontWeight={"500"}
        px={"10px"}
        py={"20px"}
      >
        {profile}
      </Text>
      {/* show on mobile view */}
      <Flex
        py={"20px"}
        align={"center"}
        width={{
          base: "100%",
        }}
        display={{ lg: "none" }}
        flexDir={"column"}
      >
        <ProfileInfo profile={profile} />
      </Flex>
    </>
  );
};

type ProfileInfoProps = {
  profile: string | undefined | string[];
};
export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex width={"100%"} justify={"center"} position={"relative"}>
        <Image
          src={"/series.webp"}
          alt={"userProfile"}
          boxSize={"150px"}
          objectFit={"cover"}
          borderRadius={"full"}
        />
      </Flex>

      <Flex
        flexDir={"column"}
        ml={"2"}
        width={"100%"}
        align={"center"}
        mt={"20px"}
      >
        <Text textTransform={"capitalize"} fontSize={"2xl"} fontWeight={"700"}>
          {profile}
        </Text>
        <Flex width={{ base: "80%", md: "50%" }} justify={"space-around"}>
          <Button variant={"brandPrimary"}> follow</Button>
          <Button variant={"brandPrimary"} onClick={onOpen}>
            more
          </Button>
        </Flex>

        <ProfileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </>
  );
};

export const UserSocials: React.FC = () => {
  return (
    <>
      <Flex width={"100%"} flexDir={"column"} align={"center"} my={"5"}>
        <Flex
          bg={"gray.200"}
          width={"80%"}
          height={"50px"}
          justify={"center"}
          align={"center"}
          borderRadius={"5px"}
          my={"3"}
        >
          <Text fontSize={"sm"} fontWeight={"bold"}>
            About
          </Text>
        </Flex>
        <Flex
          bg={"gray.200"}
          width={"80%"}
          height={"50px"}
          justify={"space-evenly"}
          align={"center"}
          borderRadius={"5px"}
        >
          <Text fontSize={"sm"}> subscribers</Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            100
          </Text>
        </Flex>
        <Flex></Flex>
      </Flex>
    </>
  );
};

type ProfileDrawerProps = {
  isOpen: boolean;

  onClose: () => void;
};
const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex flexDir={"column"}>
              <Text> About</Text>
              <Divider />
              <Text>
                the quick brown fox jumped over the lazy Dog the quick brown fox
                jumped over the lazy Dog the quick brown fox jumped over the
                lazy Dog the quick brown fox jumped over the lazy Dog the quick
                brown fox jumped over the lazy Dog the quick brown fox jumped
                over the lazy Dog
              </Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter py={"10"}>
            <Flex flexDir={"column"} width={"100%"}>
              <Text borderTop={"1px solid"} borderColor={"blue.100"}>
                Socials
              </Text>
              <Flex width={"100%"} justify={"space-evenly"} py={"5"}>
                <Icon as={FaTwitterSquare} fontSize={"3xl"} />
                <Icon as={FaLinkedin} fontSize={"3xl"} />
                <Icon as={FaInstagramSquare} fontSize={"3xl"} />
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default ProfilePageHeader;
