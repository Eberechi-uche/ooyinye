import Welcome from "@/Components/Auth.component/Welcome";
import { Flex, Text, Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { RxDot, RxDotFilled } from "react-icons/rx";

const flowArray = [
  {
    heading: "Welcome to Ooyinye - ",
    subHeading: "Blog, Read, Connect and grow",

    bg: "#DD6B20",
  },
  {
    heading: "Enter your Display name below ",
    subHeading: "This Appears on your authored blog post and comment",

    bg: "#22543D",
  },
];
const Onboarding: React.FC = () => {
  const [page, setPage] = useState(0);

  const handlePageChange = () => {
    if (page < 1) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <>
      <>
        <Flex
          width={"100%"}
          height={"100%"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
        >
          <OnboardingFLow page={page} change={handlePageChange} />
        </Flex>
      </>
    </>
  );
};
export default Onboarding;
type OnboardingFlowProp = {
  page: number;
  change: () => void;
};

const OnboardingFLow: React.FC<OnboardingFlowProp> = ({ page, change }) => {
  const { heading, bg, subHeading } = flowArray[page];
  return (
    <>
      <Flex
        flexDir={"column"}
        height={"100vh"}
        width={"100%"}
        justify={"space-between"}
        bg={bg}
        transition={"all 1s ease-in-out"}
        color={"white"}
      >
        <Flex flexDir={"column"} align={"center"} p={"10"}>
          <Text fontSize={"2xl"}>{heading}</Text>
          <Text> {subHeading}</Text>
          {page == 1 && <Welcome />}
        </Flex>
        <Flex px={"10px"} flexDir={"column"} mb={"5"}>
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
