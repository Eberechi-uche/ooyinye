import { authModalState } from "@/Atoms/AuthModalAtom";
import { useRecoilState } from "recoil";
import Login from "@/Components/Auth.component/Login";
import SignUp from "@/Components/Auth.component/SignUp";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Draft, draftAtom } from "@/Atoms/DraftAtom";
import ArticleDraftCard from "@/Components/Card/ArticleDraftCard";
import { useCreateNewArticle } from "@/Hooks/Blog/useCreateNewArticle";

const AuthModal: React.FC = () => {
  const [value, setValue] = useRecoilState(authModalState);

  return (
    <>
      <Modal
        size={{
          base: "full",
          md: "xl",
        }}
        isOpen={value.open}
        onClose={() => {
          setValue((prev) => ({
            ...prev,
            open: false,
          }));
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{value.view}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            position={"relative"}
          >
            {value.view === "Login" && <Login />}
            {value.view === "Sign Up" && <SignUp />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
