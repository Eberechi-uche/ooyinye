import { Flex, Icon, Divider, Image, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { CiCircleChevDown } from "react-icons/ci";

const BlogPostHeader: React.FC = () => {
  return (
    <>
      <Flex
        width={"100%"}
        flexDir={"column"}
        p={"2"}
        height={"100vh"}
        bg={"blue.900"}
        align={"center"}
        textAlign={"center"}
        justify={"space-evenly"}
        color={"gray.100"}
      >
        <Flex flexDir={"column"} width={"80%"} align={"center"}>
          <Heading fontWeight={"500"}>The mystery behind Lorem Ipsum </Heading>
          <Flex
            width={{ base: "100%", md: "80%", lg: "60%" }}
            color={"gray.300"}
          >
            <Text>
              the quick brown fox jumped over the lazy dog the quick brown fox
            </Text>
          </Flex>
          <Flex align={"center"} justify={"space-evenly"} mt={"2"}>
            <Text textTransform={"uppercase"} fontSize={"xs"}>
              by John Doe
            </Text>
            <Divider height={"10px"} orientation="vertical" mx={"1"} />
            <Text fontSize={"xs"}> 26 may 2023</Text>
          </Flex>
        </Flex>
        <Icon as={CiCircleChevDown} fontSize={"4xl"} />
      </Flex>
    </>
  );
};
export default BlogPostHeader;
