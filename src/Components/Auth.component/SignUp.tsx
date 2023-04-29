import { authModalState } from "@/Atoms/AuthModalAtom";
import { Flex, Input, Button, Text, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";

const SignUp: React.FC = () => {
  const setAuthViewState = useSetRecoilState(authModalState);
  const [userError, setUserError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userValue, setUserValue] = useState({
    Email: "",
    password: "",
    confirmPassword: "",
  });
  const handleUserAuth = () => {
    setUserError("");
    if (userValue.password !== userValue.confirmPassword) {
      setUserError("password do not match!");
      return;
    }
  };
  return (
    <>
      <form>
        <Flex
          flexDir={"column"}
          align={"center"}
          mb={{ base: "50%", md: "20%" }}
        >
          <Input
            isRequired
            name="Email"
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Email"
            type={"email"}
          />
          <Input
            isRequired
            name="password"
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Password"
            type={"password"}
          />
          <Input
            isRequired
            name="confirmPassword"
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Confirm Password"
            type={"password"}
          />
          <Flex width={"100%"} justify={"center"}>
            {loading ? (
              <Spinner size={{ base: "xs", md: "sm" }} />
            ) : (
              <Button variant={"unstyled"} type="submit">
                SignUp
              </Button>
            )}
          </Flex>
          <Flex align={"center"} width={"100"} justify={"center"}>
            <Text fontSize={"sm"} mt={"1.5"}>
              Already have an accunt ?
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
                  view: "Login",
                }));
              }}
            >
              Login
            </Text>
          </Flex>
        </Flex>
      </form>
    </>
  );
};
export default SignUp;
