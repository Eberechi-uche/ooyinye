import { Icon, Text, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/router";
import { auth } from "../Firebase/ClientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";

import { RiSettings3Line } from "react-icons/ri";
import { FaCompass, FaRegComment, FaSearch, FaUser } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";
import { BsBookmarkPlus, BsCoin, BsFillBookmarksFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

import { RxDashboard } from "react-icons/rx";
import { BiHomeAlt } from "react-icons/bi";
import { GrShare } from "react-icons/gr";

type IconProps = {
  value: string | undefined;
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
        <Icon as={FaCompass} fontSize={"xl"} />
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
        <Icon as={BsFillBookmarksFill} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};
export const DraftIcon: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/profile/Dashboard/studio");
        }}
      >
        <Icon as={CgNotes} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
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
        <Icon as={FaUser} fontSize={"xl"} />
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
        <Icon as={FaRegComment} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const LikeIcon: React.FC<IconProps> = ({ value }) => {
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
        }}
      >
        <Icon as={RiHeartAddFill} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
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

export const SupportIcon: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();

  return (
    <>
      <Flex align={"center"}>
        <Icon as={BsCoin} fontSize={"3xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};
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

export const AddbookMarkIcon: React.FC<IconProps> = ({ value }) => {
  return (
    <>
      <Flex align={"center"}>
        <Icon as={BsBookmarkPlus} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};
