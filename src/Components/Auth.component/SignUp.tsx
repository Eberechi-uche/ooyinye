import { authModalState } from "@/Atoms/AuthModalAtom";
import { Flex, Input, Button, Text, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import { FIREBASE_ERROR } from "../Firebase/error";
import { useRouter } from "next/navigation";

const SignUp: React.FC = () => {
  const setAuthViewState = useSetRecoilState(authModalState);
  const [userError, setUserError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const route = useRouter();

  // functions
  const HamdleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const HandleCreateUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword } = userValue;
    setUserError("");
    if (password !== confirmPassword) {
      setUserError("password do not match!");
      return;
    } else if (password.length < 6) {
      setUserError("password too short, must be more than 6 character");

      return;
    }
    createUserWithEmailAndPassword(email, password);
    route.push("/onboarding");
  };
  // Effects

  return (
    <>
      <form onSubmit={HandleCreateUser}>
        <Flex
          flexDir={"column"}
          align={"center"}
          mb={{ base: "50%", md: "20%" }}
        >
          <Input
            value={userValue.email}
            isRequired
            name="email"
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Email"
            type={"email"}
            minLength={6}
            onChange={(event) => {
              HamdleUserInput(event);
            }}
          />
          <Input
            value={userValue.password}
            isRequired
            name="password"
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Password"
            type={"password"}
            onChange={(event) => {
              HamdleUserInput(event);
            }}
          />
          <Input
            value={userValue.confirmPassword}
            isRequired
            name="confirmPassword"
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Confirm Password"
            type={"password"}
            onChange={(event) => {
              HamdleUserInput(event);
            }}
          />
          <Flex fontSize={"xs"} color={"red.400"}>
            {error && (
              <Text>
                {FIREBASE_ERROR[error.code as keyof typeof FIREBASE_ERROR]}
              </Text>
            )}
            {userError && <Text> {userError}</Text>}
          </Flex>

          <Flex width={"100%"} justify={"center"}>
            {loading ? (
              <Spinner size={{ base: "xs", md: "sm" }} />
            ) : (
              <Button
                variant={"solid"}
                type="submit"
                bg={"orange.500"}
                size={"sm"}
                color={"white"}
                _hover={{
                  bg: "orange.300",
                }}
              >
                Sign up
              </Button>
            )}
          </Flex>
          <Flex align={"center"} width={"100%"} justify={"center"}>
            <Text fontSize={"sm"} mt={"1.5"}>
              Already have an account ?
            </Text>
            <Text
              ml={"2"}
              textDecor={"underline"}
              fontWeight={"extrabold"}
              textDecorationColor={"orange.500"}
              cursor={"pointer"}
              onClick={() => {
                setAuthViewState((prev) => ({
                  ...prev,
                  view: "Login",
                }));
              }}
              color={"green.900"}
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
