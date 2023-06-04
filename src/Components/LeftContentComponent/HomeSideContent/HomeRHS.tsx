import { CiCompass1, CiPen, CiSearch, CiMemoPad, CiUser } from "react-icons/ci";
import { useRouter } from "next/router";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import {
  Bookmarks,
  Draft,
  Explore,
  Profile,
  Search,
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
          <Explore value={"Explore"} />
        </Flex>

        <Flex
          width={"100%"}
          align={"center"}
          onClick={() => {
            route.push("/search");
          }}
        >
          <Search value={"Search"} />
        </Flex>

        {user && (
          <Flex width={"100%"} align={"center"}>
            <Draft value={"Drafts"} />
          </Flex>
        )}
        {user && (
          <Flex width={"100%"} align={"center"}>
            <Bookmarks value={"Bookmarks"} />
          </Flex>
        )}

        <Flex width={"100%"} align={"center"}>
          <Profile userID={ID} value={"Profile"} />
        </Flex>
      </Flex>
    </>
  );
};
export default HomeRHS;
