import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
type CarouselProps = {
  children: ReactNode;
};
const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <>
      <Flex
        width={"100%"}
        borderBottom={"0.5px solid"}
        borderColor={"gray.900"}
        overflowX={"scroll"}
        pb={"20px"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        py={"4"}
      >
        <Flex>{children}</Flex>
      </Flex>
    </>
  );
};
export default Carousel;
