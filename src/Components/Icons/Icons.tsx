import { Icon, Text, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/router";
import { auth } from "../Firebase/ClientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";

import { RiChat1Line, RiSettings3Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineBookmark } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { BiHomeAlt } from "react-icons/bi";
import { GrArticle, GrShare } from "react-icons/gr";
import { FcBookmark } from "react-icons/fc";
import { useArticleData } from "@/Hooks/Blog/useArticleData";
import { Article } from "@/Atoms/ArticleAtom";

type IconProps = {
  value: string | number | undefined;
  iconAction?: () => void;
  size?: string;
};
export const ExploreIcon: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();
  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/explore");
        }}
      >
        <Icon as={MdOutlineExplore} fontSize={"2xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const SearchIcon: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();
  return (
    <>
      <Flex
        onClick={() => {
          route.push("/search");
        }}
      >
        <Icon as={FaSearch} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const BookmarkIcon: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/Bookmarks");
        }}
      >
        <Icon as={FcBookmark} fontSize={"2xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};
export const DraftIcon: React.FC<IconProps> = (props) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/profile/Dashboard/studio");
        }}
      >
        <Icon as={GrArticle} fontSize={"2xl"} />
        {props.value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {props.value}
          </Text>
        )}
      </Flex>
    </>
  );
};

type ProfileProps = {
  userID: String | undefined;
};
export const ProfileIcon: React.FC<ProfileProps & IconProps> = ({
  userID,
  value,
}) => {
  const route = useRouter();
  const setAuthState = useSetRecoilState(authModalState);

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          if (!userID) {
            setAuthState({
              view: "Login",
              open: true,
            });
            return;
          }
          route.push(`/profile/@${userID}`);
        }}
      >
        <Icon as={AiOutlineUser} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

type CommentIconProp = {
  onOpen: () => void;
};

export const CommentsIcon: React.FC<IconProps & CommentIconProp> = ({
  value,
  onOpen,
}) => {
  return (
    <>
      <Flex align={"center"} onClick={onOpen}>
        <Icon as={RiChat1Line} fontSize={"2xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const LikeIcon: React.FC<IconProps> = ({ value, iconAction }) => {
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          if (!user) {
            setAuthState({
              view: "Login",
              open: true,
            });
            return;
          }
          iconAction && iconAction();
        }}
      >
        {/* <Icon as={RiHeartAddFill} fontSize={"2xl"} /> */}

        <Text
          fontSize={"xl"}
          _hover={{
            transform: `scale(1.3)`,
            transition: "0.5s ease-in-out",
          }}
        >
          &#128079;&#127997;
        </Text>

        <Text
          // display={{ base: "none", lg: "flex" }}
          ml={"3"}
          border={"1px solid"}
          borderColor={"gray.300"}
          borderRadius={"full"}
          fontSize={"sm"}
          px={"2"}
        >
          {value}
        </Text>
      </Flex>
    </>
  );
};

export const ShareIcon: React.FC<IconProps> = ({ value }) => {
  return (
    <>
      <Flex align={"center"}>
        <Icon as={GrShare} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const DashboardIcon: React.FC<IconProps> = ({ value }) => {
  return (
    <>
      <Flex align={"center"}>
        <Icon as={RxDashboard} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};
export const ProfileSetting: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/profile/profile-setting");
        }}
      >
        <Icon as={RiSettings3Line} fontSize={"2xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

// export const SupportIcon: React.FC<IconProps> = ({ value }) => {
//   const route = useRouter();

//   return (
//     <>
//       <Flex align={"center"}>
//         <Icon as={BsCoin} fontSize={"3xl"} />
//         {value && (
//           <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
//             {value}
//           </Text>
//         )}
//       </Flex>
//     </>
//   );
// };
export const HomeIcon: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();
  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/");
        }}
      >
        <Icon as={BiHomeAlt} fontSize={"2xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const AddbookMarkIcon: React.FC<IconProps & Article> = (props) => {
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const { saveArticle } = useArticleData();
  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          if (!user) {
            setAuthState({
              view: "Login",
              open: true,
            });
            return;
          }
          saveArticle(props);
        }}
      >
        <Icon
          as={HiOutlineBookmark}
          fontSize={props.size}
          color={"orange.600"}
        />
        {props.value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {props.value}
          </Text>
        )}
      </Flex>
    </>
  );
};
