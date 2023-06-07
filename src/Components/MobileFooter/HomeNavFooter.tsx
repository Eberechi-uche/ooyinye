import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  ExploreIcon,
  SearchIcon,
  BookmarkIcon,
  ProfileIcon,
  DraftIcon,
} from "../Icons/Icons";
import { authModalState } from "@/Atoms/AuthModalAtom";
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
        height={"50px"}
        bg={"#fff"}
        align={"center"}
        zIndex={"10"}
        position={"fixed"}
        bottom={"0"}
        display={{ base: "flex", md: "none" }}
      >
        <ExploreIcon value={undefined} />
        <SearchIcon value={undefined} />
        {user && <DraftIcon value={undefined} />}
        {user && <BookmarkIcon value={undefined} />}
        <ProfileIcon userID={ID} value={undefined} />
      </Flex>
    </>
  );
};
export default HomeNavFooter;
