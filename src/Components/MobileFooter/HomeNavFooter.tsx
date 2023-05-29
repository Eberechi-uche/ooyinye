import { Flex, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { authModalState } from "@/Atoms/AuthModalAtom";
import {
  CiCompass1,
  CiCirclePlus,
  CiSearch,
  CiMemoPad,
  CiUser,
} from "react-icons/ci";
import { useSetRecoilState } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";

const HomeNavFooter: React.FC = () => {
  const route = useRouter();
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);

  return (
    <>
      <Flex
        width={"100%"}
        justify={"space-between"}
        px={"4"}
        height={"60px"}
        bg={"#fff"}
        align={"center"}
        zIndex={"10"}
        mx={"0"}
        position={"fixed"}
        bottom={"0"}
        display={{ base: "flex", md: "none" }}
      >
        <Icon
          as={CiCompass1}
          fontSize={"2xl"}
          onClick={() => {
            route.push("/explore");
          }}
        />
        <Icon
          as={CiSearch}
          fontSize={"2xl"}
          onClick={() => {
            route.push("/search");
          }}
        />
        <Icon
          as={CiCirclePlus}
          fontSize={"4xl"}
          color={"blue.600"}
          onClick={() => {
            route.push("/write");
          }}
        />
        <Icon
          as={CiMemoPad}
          fontSize={"2xl"}
          onClick={() => {
            route.push("/Bookmarks");
          }}
        />
        <Icon
          as={CiUser}
          fontSize={"2xl"}
          onClick={() => {
            if (!user) {
              setAuthState({
                view: "Login",
                open: true,
              });
              return;
            }
            route.push(`/profile/${user.displayName}`);
          }}
        />
      </Flex>
    </>
  );
};
export default HomeNavFooter;
