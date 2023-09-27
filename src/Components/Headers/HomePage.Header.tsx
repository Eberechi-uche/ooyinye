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
              base: "100%",
              md: "75%",
              lg: "65%",
            }}
            flexDir={"column"}
            textAlign={"center"}
          >
            <Text
              fontSize={{
                base: "xl",
                md: "4xl",
                lg: "5xl",
              }}
              fontWeight={"600"}
            >
              Unite ✊🏾, craft 🖋️, share and inspire.
              <br />
              Be part of the storytelling revolution.
            </Text>
            <Text
              fontSize={{
                base: "sm",
                md: "lg",
                lg: "xl",
              }}
              fontWeight={"300"}
            >
              explore diverse Perspective and collaborate <br /> seamlessly on
              your journey through words
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
