import Welcome from "@/Components/Auth.component/Welcome";
import ContentLayout from "@/Components/Layout/Content.Layout";
import { Flex, Text, Image, Button, Icon, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import { RxDot, RxDotFilled } from "react-icons/rx";

const flowArray = [
  {
    heading: "Journals - ",
    subHeading: "grow at your own pace",
    body: "Every memory matters and we know that it is also a great way to grow, we made it posible to write journals that is private to you alone",
    image: "journal2.jpg",
    bg: "#e1b382",
  },
  {
    heading: " Blog - ",
    subHeading: "Inspire, Share ",
    body: " Share your story to inspire someone, or you finally figured that thing, well we are eager to know what it is.feeling down 😥, write,  it's known to be therapeutic",
    image: "series.jpg",
    bg: "#9bc400",
  },
];
const Onboarding: React.FC = () => {
  const [page, setPage] = useState(0);

  const handlePageChange = () => {
    if (page < 2) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <>
      <ContentLayout>
        <>
          <Flex
            width={"100%"}
            height={"100%"}
            flexDir={"column"}
            justify={"center"}
            align={"center"}
          >
            {page === 2 && <Welcome />}
            {page < 2 && (
              <OnboardingFLow page={page} change={handlePageChange} />
            )}
          </Flex>
        </>
        <></>
      </ContentLayout>
    </>
  );
};
export default Onboarding;
type OnboardingFlowProp = {
  page: number;
  change: () => void;
};

const OnboardingFLow: React.FC<OnboardingFlowProp> = ({ page, change }) => {
  const { heading, subHeading, body, image, bg } = flowArray[page];
  return (
    <>
      <Flex
        flexDir={"column"}
        height={"100%"}
        width={"100%"}
        justify={"space-between"}
        bg={bg}
        transition={"all 1s ease-in-out"}
        color={"white"}
      >
        <Flex pt={"0"} h={"45vh"}>
          <Image
            src={image}
            alt={"onboarding"}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
          />
        </Flex>
        <Flex px={"10px"} flexDir={"column"}>
          <Flex flexDir={"column"}>
            <Text fontWeight={"extrabold"} fontSize={{ base: "3vh" }}>
              {heading}
            </Text>
            <Text fontWeight={"extrabold"} fontSize={{ base: "3vh" }}>
              {subHeading}
            </Text>
            <Text>{body}</Text>
          </Flex>
          <Flex justify={"space-around"} align={"center"} p={"7"}>
            <Flex justify={"start"} align={"center"} fontSize={"4xl"}>
              <Icon as={page === 0 ? RxDotFilled : RxDot} p={"0"} />
              <Icon as={page === 1 ? RxDotFilled : RxDot} />
            </Flex>
            <Button variant={"unstyled"} onClick={change}>
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
