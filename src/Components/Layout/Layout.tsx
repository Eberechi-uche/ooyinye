import { Flex } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { ReactComponentElement } from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Flex flexDir={"column"}>{children}</Flex>
    </>
  );
};

export default Layout;
