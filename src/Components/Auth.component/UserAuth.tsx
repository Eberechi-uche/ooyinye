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
        borderRadius={"full"}
        width={{ base: "70px" }}
        height={{ base: "35px" }}
        variant={"outline"}
        bg={"black"}
        fontWeight={"900"}
        color="#fff"
        _hover={{
          bg: "#fff",
          color: "#000",
          borderColor: "#000",
        }}
      >
        join
      </Button>
      <AuthModal />
    </>
  );
};
export default UserAuth;
