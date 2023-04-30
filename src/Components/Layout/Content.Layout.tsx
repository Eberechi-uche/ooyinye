import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <>
      <Flex justify={"center"}>
        <Flex justify={"center"} width={"100%"} maxWidth={"760"}>
          <Flex
            direction={"column"}
            width={{ base: "100%", lg: "70%" }}
            px={{ base: "0", lg: "2" }}
          >
            {children && children[0 as keyof typeof children]}
          </Flex>
          <Flex
            flexGrow={"1"}
            display={{ base: "none", lg: "unset" }}
            borderStart={"1.5px solid"}
            borderColor={"gray.200"}
          >
            {children && children[1 as keyof typeof children]}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default ContentLayout;
