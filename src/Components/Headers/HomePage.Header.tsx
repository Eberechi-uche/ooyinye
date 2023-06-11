import { authModalState } from "@/Atoms/AuthModalAtom";
import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
      <Flex bg={"gray.900"} justify={"center"}>
        <Flex
          height={"70vh"}
          justify={"center"}
          width={"100%"}
          px={"20px"}
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
              bgPosition={"center"}
              bgSize={"cover"}
            >
              Be On The <br />
              Know.
            </Heading>
            <Flex flexDir={"column"} display={"absolute"}>
              <Text my={"5"}>
                Create, Read, content that <br />
                inspires you
              </Text>
              <Button
                onClick={() => {
                  setAuthModalView({
                    view: "Sign Up",
                    open: true,
                  });
                }}
                variant={"brandPrimary"}
              >
                Get Started
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
