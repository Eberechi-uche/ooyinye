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
      <Flex bg={"orange.500"} justify={"center"} width={"100dvw"} py={"40px"}>
        <Flex
          justify={"center"}
          width={"100%"}
          px={"20px"}
          py={"40px"}
          color={"white"}
          maxW={"1300px"}
        >
          <Flex
            flexDir={"column"}
            width={{ base: "100%", lg: "50%" }}
            justify={"center"}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Heading
              fontWeight={"900"}
              fontSize={{
                base: "50px",
                md: "",
                lg: "100px",
              }}
              bgImage="url('homeTextbg.webp')"
              bgClip="text"
              bgPosition={{
                base: "top",
              }}
              bgSize={"cover"}
            >
              Be On The <br />
              Know.
            </Heading>
            <Flex
              flexDir={"column"}
              // display={"absolute"}

              width={"100%"}
            >
              <Text my={"5"}>
                Create, Read, content that inspires you, <br /> Unleash Yourself
                to the world Today!
              </Text>
              <Button
                onClick={() => {
                  setAuthModalView({
                    view: "Sign Up",
                    open: true,
                  });
                }}
                border={"2px solid "}
                color={"offwhite"}
                variant={"solid"}
                _hover={{
                  bg: "green.900",
                  width: {
                    base: "60%",
                    md: "35%",
                    lg: "30%",
                  },
                }}
                bg={"orange.500"}
                transition={"all 0.5s ease-in-out"}
                display={"flex"}
                justifyContent={"space-between"}
                width={{
                  base: "50%",
                  md: "30%",
                  lg: "25%",
                }}
                alignSelf={{
                  base: "center",
                  lg: "flex-start",
                }}
              >
                Get started
                <Icon as={BsArrowRight} ml={"2"} />
              </Button>
            </Flex>
          </Flex>

          <Flex
            width={"50%"}
            height={"100%"}
            display={{ base: "none", lg: "block" }}
          >
            <Image
              src={"headerHomeImage.gif"}
              alt={"homepageImage"}
              objectFit={"contain"}
              width={"100%"}
              height={"100%"}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default HomePageHeader;
