import { Flex } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { ReactComponentElement } from "react";
import HomeLHS from "../LeftContentComponent/HomeLHS/HomeLHS";
import HomeRHS from "../LeftContentComponent/HomeLHS/HomeRHS";

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
