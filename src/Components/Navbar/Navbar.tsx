import { Flex, Text, Image, Divider, Button } from "@chakra-ui/react";
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
        bg={"#ffff"}
        zIndex={"5"}
      >
        <Flex p={"10px 5px"}>
          <Flex justify={"space-between"} width={"100%"} align={"center"}>
            <Link href={"/"}>
              <Flex align={"center"}>
                <Image
                  src={"logo.png"}
                  alt={"logo"}
                  boxSize={{ base: "10vw", md: "4vw" }}
                />
                <Text fontSize={"4vh"} display={{ base: "none", md: "block" }}>
                  ònyìnyé
                </Text>
              </Flex>
            </Link>
            <Flex>
              <NavRightContent user={user} />
            </Flex>
          </Flex>
        </Flex>

        <Divider />
      </Flex>
    </>
  );
};
export default Navbar;
