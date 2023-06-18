import { authModalState } from "@/Atoms/AuthModalAtom";
import { Flex, Input, Button, Text, Spinner } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import { useState } from "react";
import { FIREBASE_ERROR } from "../Firebase/error";

const Login: React.FC = () => {
  const setAuthViewState = useSetRecoilState(authModalState);
  const [userDetails, setUserDetails] = useState({
    Email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    event.preventDefault();
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const HandleUserLogin = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInWithEmailAndPassword(userDetails.Email, userDetails.password);
    if (user) {
      setAuthViewState({
        view: "Login",
        open: false,
      });
    }
  };
  return (
    <form onSubmit={HandleUserLogin}>
      <Flex
        height={"50%"}
        flexDir={"column"}
        align={"center"}
        mb={{ base: "50%", md: "20%" }}
      >
        <Text my={"2"}> welcome back </Text>
        <Input
          value={userDetails.Email}
          required
          name="Email"
          type={"email"}
          variant={"pill"}
          my={"10px"}
          width={{ base: "80%", md: "50%" }}
          placeholder="Email"
          onChange={handleUserInput}
        />
        <Input
          required
          value={userDetails.password}
          type={"password"}
          name="password"
          variant={"pill"}
          my={"10px"}
          width={{ base: "80%", md: "50%" }}
          placeholder="Password"
          onChange={handleUserInput}
        />
        {error && (
          <Text color={"red.700"} fontSize={"sm"} pb={"2"}>
            {FIREBASE_ERROR[error.message as keyof typeof FIREBASE_ERROR]}
          </Text>
        )}
        {loading ? (
          <Spinner size={{ base: "xs", md: "sm" }} />
        ) : (
          <Button
            variant={"solid"}
            type="submit"
            bg="green.900"
            color={"white"}
            size={"sm"}
            _hover={{
              bg: "green.500",
            }}
          >
            Log in
          </Button>
        )}

        <Flex align={"center"}>
          <Text fontSize={"sm"} mt={"1.5"}>
            Don't have an account ?
          </Text>
          <Text
            ml={"2"}
            textDecor={"underline"}
            fontWeight={"extrabold"}
            textDecorationColor={"teal.400"}
            cursor={"pointer"}
            onClick={() => {
              setAuthViewState((prev) => ({
                ...prev,
                view: "Sign Up",
              }));
            }}
            color={"orange.500"}
          >
            Sign up
          </Text>
        </Flex>
      </Flex>
    </form>
  );
};
export default Login;
