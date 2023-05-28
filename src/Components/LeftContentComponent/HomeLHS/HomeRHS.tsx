import {
  CiCompass1,
  CiCirclePlus,
  CiSearch,
  CiMemoPad,
  CiUser,
} from "react-icons/ci";
import { useRouter } from "next/router";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";

const HomeRHS: React.FC = () => {
  const route = useRouter();
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);

  return (
    <>
      <Flex
        position={"sticky"}
        top={"20"}
        flexDir={"column"}
        maxH={"100vh"}
        overflowY={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        width={"100%"}
        height={"50vh"}
        justify={"space-evenly"}
      >
        <Flex
          width={"100%"}
          justify={"space-between"}
          onClick={() => {
            route.push("/explore");
          }}
        >
          <Icon as={CiCompass1} fontSize={"2xl"} mr={"2"} />
          <Text
            display={{ base: "none", md: "none", lg: "unset" }}
            fontSize={"sm"}
            minW={"200px"}
          >
            Explore
          </Text>
        </Flex>

        <Flex
          width={"100%"}
          align={"center"}
          onClick={() => {
            route.push("/search");
          }}
        >
          <Icon as={CiSearch} fontSize={"2xl"} mr={"2"} />
          <Text
            display={{ base: "none", md: "none", lg: "unset" }}
            fontSize={"sm"}
            minW={"200px"}
          >
            search
          </Text>
        </Flex>

        <Flex
          width={"100%"}
          align={"center"}
          onClick={() => {
            route.push("/write");
          }}
        >
          <Icon as={CiCirclePlus} fontSize={"2xl"} mr={"2"} />
          <Text
            display={{ base: "none", md: "none", lg: "unset" }}
            fontSize={"sm"}
            minW={"200px"}
          >
            write
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          align={"center"}
          onClick={() => {
            route.push("/Bookmarks");
          }}
        >
          <Icon as={CiMemoPad} fontSize={"2xl"} mr={"2"} />
          <Text
            display={{ base: "none", md: "none", lg: "unset" }}
            fontSize={"sm"}
            minW={"200px"}
          >
            Reading List
          </Text>
        </Flex>
        <Flex
          width={"100%"}
          align={"center"}
          onClick={() => {
            if (!user) {
              setAuthState({
                view: "Login",
                open: true,
              });
              return;
            }
            route.push("/profile/eberechi");
          }}
        >
          <Icon as={CiUser} fontSize={"2xl"} mr={"2"} />
          <Text
            display={{ base: "none", md: "none", lg: "unset" }}
            fontSize={"sm"}
            minW={"200px"}
          >
            profile
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default HomeRHS;
