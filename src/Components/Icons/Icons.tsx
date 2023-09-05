import { Icon, Text, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/router";
import { auth } from "../Firebase/ClientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";

import { RiSettings3Line } from "react-icons/ri";

import {
  PiChatTeardropTextBold,
  PiCompass,
  PiCompassBold,
  PiCompassDuotone,
  PiExportBold,
  PiHandsClappingFill,
  PiHandsClappingThin,
  PiHouseBold,
  PiHouseDuotone,
  PiMagnifyingGlassDuotone,
  PiNewspaperFill,
  PiNutBold,
  PiNutDuotone,
  PiPlusCircleBold,
  PiShareDuotone,
  PiSquaresFourBold,
  PiSquaresFourDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import { HiOutlineBookmark, HiOutlineNewspaper } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineCompass,
} from "react-icons/ai";
import { FcBookmark } from "react-icons/fc";
import { LuSettings2 } from "react-icons/lu";
import { useArticleData } from "@/Hooks/Blog/useArticleData";
import { Article } from "@/Atoms/ArticleAtom";
import { Topic } from "@/pages/explore";
import { LikedUserDetails } from "../Card/LikesCard";
import { BsDashSquare } from "react-icons/bs";

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
        fontWeight={"600"}
      >
        <Icon as={PiCompass} fontSize={"2xl"} />
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
        fontWeight={"600"}
      >
        <Icon as={AiOutlineSearch} fontSize={"xl"} />
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
        fontWeight={"600"}
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
        fontWeight={"600"}
      >
        <Icon as={HiOutlineNewspaper} fontSize={"2xl"} />
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
        fontWeight={"600"}
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
      <Flex align={"center"} onClick={onOpen} fontWeight={"600"}>
        <Icon as={PiChatTeardropTextBold} fontSize={"2xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

type LikeIconsProp = {
  liked: LikedUserDetails | undefined;
};
export const LikeIcon: React.FC<IconProps & LikeIconsProp> = ({
  value,
  iconAction,
  liked,
}) => {
  const setAuthState = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);

  return (
    <>
      <Flex
        fontWeight={"600"}
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
        transition={"all 0.5s ease-in-out"}
        _hover={{
          transform: "scale(1.2)",
        }}
      >
        {liked ? (
          <>
            <Icon as={PiHandsClappingFill} fontSize={"2xl"} color={"#000"} />
          </>
        ) : (
          <>
            <Icon as={PiHandsClappingThin} fontSize={"2xl"} />
          </>
        )}

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
      <Flex align={"center"} fontWeight={"600"}>
        <Icon as={PiExportBold} fontSize={"xl"} color={"gray.900"} />
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
      <Flex align={"center"} fontWeight={"600"}>
        <Icon as={BsDashSquare} fontSize={"xl"} />
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
        fontWeight={"600"}
        align={"center"}
        onClick={() => {
          route.push("/profile/profile-setting");
        }}
      >
        <Icon as={LuSettings2} fontSize={"2xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

type FollowTopicProps = {
  following: boolean;
  size: string;
};
export const FollowTopicIcon: React.FC<Topic & FollowTopicProps> = (props) => {
  return (
    <>
      <Flex align={"center"}>
        <Icon as={PiPlusCircleBold} fontSize={props.size} />
      </Flex>
    </>
  );
};
export const HomeIcon: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();
  return (
    <>
      <Flex
        fontWeight={"600"}
        align={"center"}
        onClick={() => {
          route.push("/");
        }}
      >
        <Icon as={PiHouseBold} fontSize={"2xl"} />
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
        fontWeight={"600"}
        align={"center"}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
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
        <Icon as={CiBookmark} fontSize={props.size} />
        {props.value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {props.value}
          </Text>
        )}
      </Flex>
    </>
  );
};
