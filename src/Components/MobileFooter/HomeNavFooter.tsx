import { Flex, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Explore, Search, Bookmarks, Draft, Profile } from "../Icons/Icons";
import { authModalState } from "@/Atoms/AuthModalAtom";
import {
  CiCompass1,
  CiCirclePlus,
  CiSearch,
  CiMemoPad,
  CiUser,
  CiPen,
} from "react-icons/ci";
import { useSetRecoilState } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";

const HomeNavFooter: React.FC = () => {
  const route = useRouter();
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const ID = user?.email?.split("@")[0];

  return (
    <>
      <Flex
        width={"100%"}
        justify={"space-between"}
        px={"5"}
        height={"60px"}
        bg={"#fff"}
        align={"center"}
        zIndex={"10"}
        position={"fixed"}
        bottom={"0"}
        display={{ base: "flex", md: "none" }}
      >
        <Explore value={undefined} />
        <Search value={undefined} />
        {user && <Draft value={undefined} />}
        {user && <Bookmarks value={undefined} />}
        <Profile userID={ID} value={undefined} />
      </Flex>
    </>
  );
};
export default HomeNavFooter;
