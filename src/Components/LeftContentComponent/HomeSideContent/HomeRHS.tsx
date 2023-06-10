import { useRouter } from "next/router";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import {
  BookmarkIcon,
  DraftIcon,
  ExploreIcon,
  ProfileIcon,
  SearchIcon,
} from "@/Components/Icons/Icons";

const HomeRHS: React.FC = () => {
  const route = useRouter();
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const ID = user?.email?.split("@")[0];

  return (
    <>
      <Flex
        position={"sticky"}
        top={"20"}
        flexDir={"column"}
        // maxH={"100vh"}
        // overflowY={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        minWidth={"fit-content"}
        px={"4"}
        align={"center"}
        height={"80vh"}
        justify={"space-between"}
        cursor={"pointer"}
      >
        <Flex width={"100%"}>
          <ExploreIcon value={"Explore"} />
        </Flex>

        <Flex
          width={"100%"}
          align={"center"}
          onClick={() => {
            route.push("/search");
          }}
        >
          <SearchIcon value={"Search"} />
        </Flex>

        {user && (
          <Flex width={"100%"} align={"center"}>
            <DraftIcon value={"Drafts"} />
          </Flex>
        )}
        {user && (
          <Flex width={"100%"} align={"center"}>
            <BookmarkIcon value={"Bookmarks"} />
          </Flex>
        )}

        <Flex width={"100%"} align={"center"}>
          <ProfileIcon userID={ID} value={"Profile"} />
        </Flex>
      </Flex>
    </>
  );
};
export default HomeRHS;
