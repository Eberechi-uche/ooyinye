import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <>
      <Flex justify={"center"} width={"100vw"}>
        <Flex width={"100%"} maxWidth={"1500px"}>
          <Flex
            display={{ base: "none", md: "flex" }}
            minH={"100vh"}
            minWidth={"70px"}
            p={"5"}
            width={"max-content"}
            flexDir={"column"}
            align={"center"}
            borderRight={"1px solid"}
            borderColor={"orange.300"}
          >
            {children && children[0 as keyof typeof children]}
          </Flex>
          <Flex
            flexDir={"column"}
            width={{ base: "100%", lg: "70%" }}
            maxW={"900px"}
            align={"center"}
          >
            {children && children[1 as keyof typeof children]}
          </Flex>
          <Flex
            display={{ base: "none", lg: "unset" }}
            borderColor={"gray.200"}
            minH={"100vh"}
            p={"4"}
            maxW={"400px"}
          >
            {children && children[2 as keyof typeof children]}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default ContentLayout;
