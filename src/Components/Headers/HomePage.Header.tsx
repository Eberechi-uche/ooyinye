import { authModalState } from "@/Atoms/AuthModalAtom";
import { Button, Flex, Heading, Text, Image, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiArrowFromRight } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ReactTextTransition, { presets } from "react-text-transition";
import { useSetRecoilState } from "recoil";

const TEXTS = ["Journal", "Blog", "Connect", "Grow"];

const HomePageHeader: React.FC = () => {
  const [index, setIndex] = useState(0);
  const setAuthModalView = useSetRecoilState(authModalState);
  useEffect(() => {
    const animateTiming = setInterval(() => setIndex((prev) => prev + 1), 2000);
    return () => {
      clearTimeout(animateTiming);
    };
  }, []);
  return (
    <>
      <Flex justify={"center"} py={"40px"} bg={"red.700"}>
        <Flex
          justify={"center"}
          width={"100%"}
          px={"20px"}
          py={"40px"}
          maxW={"1300px"}
          align={"center"}
          color={"white"}
        >
          <Flex
            w={{
              base: "70%",
              md: "65%",
              lg: "50%",
            }}
            flexDir={"column"}
            textAlign={"center"}
          >
            <Text
              fontSize={{
                base: "3xl",
                lg: "6xl",
              }}
              fontWeight={"700"}
            >
              Create, read, and connect
            </Text>
            <Flex w={"100%"} my={"4"} justify={"center"}>
              <Button
                onClick={() => {
                  setAuthModalView({
                    view: "Sign Up",
                    open: true,
                  });
                }}
                w={"50%"}
                color={"white"}
                colorScheme={"whiteAlpha"}
              >
                get started
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default HomePageHeader;
