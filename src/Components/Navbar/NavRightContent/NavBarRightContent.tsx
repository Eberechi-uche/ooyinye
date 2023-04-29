import { Flex } from "@chakra-ui/react";
import NavUserProfile from "./NavUserProfile";
import UserAuth from "@/Components/Auth.component/UserAuth";

const NavRightContent: React.FC = () => {
  return (
    <>
      <Flex>
        <NavUserProfile />
        <UserAuth />
      </Flex>
    </>
  );
};
export default NavRightContent;
