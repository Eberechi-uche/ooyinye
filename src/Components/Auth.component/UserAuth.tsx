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
        variant={"brandPrimary"}
      >
        join
      </Button>
      <AuthModal />
    </>
  );
};
export default UserAuth;
