import { Icon, Text, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CiGrid41, CiSettings } from "react-icons/ci";
import { useRouter } from "next/router";
import { auth } from "../Firebase/ClientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";

import { RiSettings3Line } from "react-icons/ri";
import {
  FaCommentAlt,
  FaCompass,
  FaRegHeart,
  FaSearch,
  FaShareSquare,
  FaUser,
} from "react-icons/fa";
import { BsCoin, BsFillBookmarksFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

type IconProps = {
  value: string | undefined;
};
export const Explore: React.FC<IconProps> = ({ value }) => {
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

export const Search: React.FC<IconProps> = ({ value }) => {
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

export const Bookmarks: React.FC<IconProps> = ({ value }) => {
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
export const Draft: React.FC<IconProps> = ({ value }) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/");
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
export const Profile: React.FC<ProfileProps & IconProps> = ({
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
          route.push(`/profile/${userID}`);
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
        <Icon as={FaCommentAlt} fontSize={"xl"} />
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
        <Icon as={FaRegHeart} fontSize={"xl"} />
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
        <Icon as={FaShareSquare} fontSize={"xl"} />
        {value && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {value}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const Dashboard: React.FC<IconProps> = ({ value }) => {
  return (
    <>
      <Flex align={"center"}>
        <Icon as={CiGrid41} fontSize={"4xl"} />
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
        <Icon as={RiSettings3Line} fontSize={"4xl"} />
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
