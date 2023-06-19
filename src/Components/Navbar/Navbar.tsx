import { Flex, Text, Image } from "@chakra-ui/react";
import NavRightContent from "./NavRightContent/NavBarRightContent";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Flex
        position={"sticky"}
        top={"0"}
        flexDir={"column"}
        zIndex={"7"}
        color={"black"}
        bg={"whiteAlpha.800"}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
      >
        <Flex p={"5px 5px"}>
          <Flex justify={"space-between"} width={"100%"} align={"center"}>
            <Link href={"/"}>
              <Flex align={"center"}>
                <Image
                  src={"/favicon.ico"}
                  alt={"logo"}
                  objectFit={"contain"}
                  boxSize={{ base: "7vw", md: "2vw" }}
                />
                <Text
                  fontSize={"4vh"}
                  display={{ base: "none", md: "block" }}
                  fontWeight={"700"}
                >
                  ònyìnyé
                </Text>
              </Flex>
            </Link>
            <Flex
              width={{ base: "50%", md: "30%" }}
              justify={"space-between"}
              cursor={"pointer"}
              align={"center"}
            >
              <Text
                fontWeight={"900"}
                fontSize={{ base: "sm", md: "md" }}
                _hover={{
                  borderBottom: "2px",
                  borderColor: "orange.500",
                }}
              >
                <span
                  style={{
                    fontWeight: "200",
                  }}
                >
                  meet {""}
                </span>
                Oònyìnyé
              </Text>
              <NavRightContent user={user} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Navbar;
