import { authModalState } from "@/Atoms/AuthModalAtom";
import { Flex, Input, Button, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

const Login: React.FC = () => {
  const setAuthViewState = useSetRecoilState(authModalState);
  return (
    <>
      <form>
        <Flex
          height={"50%"}
          flexDir={"column"}
          align={"center"}
          mb={{ base: "50%", md: "20%" }}
        >
          <Input
            required
            name="Email"
            type={"email"}
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Email"
          />
          <Input
            required
            type={"password"}
            name="password"
            variant={"pill"}
            my={"10px"}
            width={{ base: "80%", md: "50%" }}
            placeholder="Password"
          />
          <Button variant={"unstyled"} type="submit">
            Login
          </Button>
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
            >
              Sign up
            </Text>
          </Flex>
        </Flex>
      </form>
    </>
  );
};
export default Login;
