import { Icon, Text, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/router";
import { auth } from "../Firebase/ClientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";

import { RiSettings3Line } from "react-icons/ri";

import {
  PiChatTeardropTextBold,
  PiCompassDuotone,
  PiExportBold,
  PiHandsClappingThin,
  PiHouseDuotone,
  PiMagnifyingGlassDuotone,
  PiNewspaperFill,
  PiNutDuotone,
  PiShareDuotone,
  PiSquaresFourDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import { HiOutlineBookmark } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { GrArticle } from "react-icons/gr";
import { FcBookmark } from "react-icons/fc";
import { useArticleData } from "@/Hooks/Blog/useArticleData";
import { Article } from "@/Atoms/ArticleAtom";
import { CiShare1 } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";

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
        <Icon as={PiCompassDuotone} fontSize={"2xl"} />
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
        <Icon as={PiMagnifyingGlassDuotone} fontSize={"xl"} />
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
        <Icon as={PiNewspaperFill} fontSize={"2xl"} />
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
        <Icon as={PiUserDuotone} fontSize={"xl"} />
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

export const LikeIcon: React.FC<IconProps> = ({ value, iconAction }) => {
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
      >
        <Icon as={PiHandsClappingThin} fontSize={"2xl"} />

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
        <Icon as={PiSquaresFourDuotone} fontSize={"xl"} />
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
        <Icon as={PiNutDuotone} fontSize={"2xl"} />
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
        fontWeight={"600"}
        align={"center"}
        onClick={() => {
          route.push("/");
        }}
      >
        <Icon as={PiHouseDuotone} fontSize={"2xl"} />
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
