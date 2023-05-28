import {
  Button,
  Flex,
  Highlight,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/Atoms/AuthModalAtom";
import { useRouter } from "next/router";

const Welcome: React.FC = () => {
  const [name, setName] = useState("");
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const setAuthModalState = useSetRecoilState(authModalState);
  const route = useRouter();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleNameUpdate = () => {
    setLoading(true);
    try {
      updateProfile(user!, {
        displayName: name,
      })
        .then(() => {
          setAuthModalState((prev) => ({
            ...prev,
            open: false,
          }));
        })
        .then(() => {
          toast({
            title: `Welcome! 🎉 ${name}`,
            description: "Your Amazing journey starts now",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
          route.push("/");
        });
    } catch (error: any) {
      console.log("welcome", error.message);
    }
  };

  return (
    <>
      <Flex
        width={"100%"}
        align={"center"}
        flexDir={"column"}
        textAlign={"center"}
        height={"30vh"}
        justify={"end"}
        fontSize={{ base: "xs", md: "sm" }}
      >
        <Highlight
          query={"Great!"}
          styles={{
            px: "1",
            py: "0",
            rounded: "full",
            bg: "teal.100",
          }}
        >
          Great! lets get to know you, please enter your display name below
        </Highlight>
        <Input
          value={name}
          required
          name="name"
          type={"email"}
          variant={"pill"}
          my={"10px"}
          width={{ base: "100%", md: "50%" }}
          maxW={"300px"}
          placeholder="Display name"
          onChange={(e) => {
            handleUserInput(e);
          }}
          maxLength={25}
          color={"blackAlpha.900"}
        />
        <Button
          color={"gray.900"}
          borderRadius={"full"}
          isDisabled={name.length < 5}
          onClick={handleNameUpdate}
          isLoading={loading}
        >
          Done
        </Button>
      </Flex>
    </>
  );
};
export default Welcome;
