import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <>
      <Flex justify={"center"}>
        <Flex justify={"center"} width={"100%"} maxWidth={"1300px"}>
          <Flex
            direction={"column"}
            width={{ base: "100%", lg: "65%" }}
            p={"4"}
          >
            {children && children[0 as keyof typeof children]}
          </Flex>
          <Flex
            flexGrow={"1"}
            display={{ base: "none", lg: "unset" }}
            borderStart={"1px solid"}
            borderColor={"gray.200"}
            minH={"100vh"}
            p={"4"}
          >
            {children && children[1 as keyof typeof children]}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default ContentLayout;
