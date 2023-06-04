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
        <Flex justify={"center"} width={"100%"} maxWidth={"1300px"}>
          <Flex
            direction={"column"}
            width={{ base: "100%", lg: "65%" }}
            pos={"relative"}
            h={"100vh"}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default SingleContentLayout;
