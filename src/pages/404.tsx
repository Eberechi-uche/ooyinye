import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { PiArrowLeftDuotone, PiMaskSadDuotone } from "react-icons/pi";

export default function Custom404() {
  return (
    <SingleContentLayout>
      <Flex
        width={"100%"}
        align={"center"}
        flexDir={"column"}
        justify={"center"}
      >
        <h1>404 - Page Not Found</h1>
        <Icon as={PiMaskSadDuotone} fontSize={"35vh"} />
        {/* <Icon as={PiArrowLeftDuotone} fontSize={"5xl"} my={"5"}>
          go back
        </Icon> */}
      </Flex>
    </SingleContentLayout>
  );
}
