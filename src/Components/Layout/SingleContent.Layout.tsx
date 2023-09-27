import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
type SingleContentLayoutProps = {
  children: ReactNode;
};
const SingleContentLayout: React.FC<SingleContentLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Flex justify={"center"}>
        <Flex justify={"center"} width={"100%"} maxWidth={"1300px"} h={"100%"}>
          <Flex
            direction={"column"}
            width={{ base: "100%", lg: "70%" }}
            pos={"relative"}
            minH={"100vh"}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default SingleContentLayout;
