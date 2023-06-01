import { Box, Icon, Text, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  CiCompass1,
  CiCirclePlus,
  CiSearch,
  CiMemoPad,
  CiUser,
  CiShare1,
  CiHeart,
  CiChat2,
  CiDollar,
} from "react-icons/ci";
import { useRouter } from "next/router";
import { auth } from "../Firebase/ClientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";
import { ReactNode } from "react";

type IconProps = {
  children: ReactNode | undefined;
};
export const Explore: React.FC<IconProps> = ({ children }) => {
  const route = useRouter();
  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/explore");
        }}
      >
        <Icon as={CiCompass1} fontSize={"2xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const Search: React.FC<IconProps> = ({ children }) => {
  const route = useRouter();
  return (
    <>
      <Flex
        onClick={() => {
          route.push("/search");
        }}
      >
        <Icon as={CiSearch} fontSize={"2xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const Bookmarks: React.FC<IconProps> = ({ children }) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/Bookmarks");
        }}
      >
        <Icon as={CiMemoPad} fontSize={"2xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
          </Text>
        )}
      </Flex>
    </>
  );
};
export const Draft: React.FC<IconProps> = ({ children }) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/");
        }}
      >
        <Icon as={CiCirclePlus} fontSize={"4xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
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
  children,
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
        <Icon as={CiUser} fontSize={"2xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
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
  children,
  onOpen,
}) => {
  const route = useRouter();

  return (
    <>
      <Flex align={"center"} onClick={onOpen}>
        <Icon as={CiChat2} fontSize={"2xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const LikeIcon: React.FC<IconProps> = ({ children }) => {
  const route = useRouter();
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
        <Icon as={CiHeart} fontSize={"2xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const ShareIcon: React.FC<IconProps> = ({ children }) => {
  const route = useRouter();

  return (
    <>
      <Flex
        align={"center"}
        onClick={() => {
          route.push("/Bookmarks");
        }}
      >
        <Icon as={CiShare1} fontSize={"2xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
          </Text>
        )}
      </Flex>
    </>
  );
};

export const SupportIcon: React.FC<IconProps> = ({ children }) => {
  const route = useRouter();

  return (
    <>
      <Flex align={"center"}>
        <Icon as={CiDollar} fontSize={"4xl"} />
        {children && (
          <Text display={{ base: "none", lg: "flex" }} ml={"3"}>
            {children}
          </Text>
        )}
      </Flex>
    </>
  );
};
