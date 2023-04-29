import { Flex } from "@chakra-ui/react";
import NavUserProfile from "./NavUserProfile";
import UserAuth from "@/Components/Auth.component/UserAuth";
import { User } from "firebase/auth";

type NavBarRightContentProp = {
  user: User | undefined | null;
};

const NavRightContent: React.FC<NavBarRightContentProp> = ({ user }) => {
  return (
    <>
      <Flex>{user ? <NavUserProfile /> : <UserAuth />}</Flex>
    </>
  );
};
export default NavRightContent;
