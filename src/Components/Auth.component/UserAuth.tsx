import { authModalState } from "@/Atoms/AuthModalAtom";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import AuthModal from "@/ChakraUi/modals/UserAuthModal";

const UserAuth: React.FC = () => {
  const setAuthState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        onClick={() => {
          setAuthState((prev) => ({
            view: "Login",
            open: true,
          }));
        }}
        variant={"solid"}
        size={"sm"}
        bg="green.900"
        color={"white"}
        _hover={{
          bg: "green.500",
        }}
      >
        Log in
      </Button>
      <AuthModal />
    </>
  );
};
export default UserAuth;
