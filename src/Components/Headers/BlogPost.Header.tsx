import { Flex, Icon, Divider, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsBookFill, BsDot } from "react-icons/bs";

const BlogPostHeader: React.FC = () => {
  return (
    <>
      <Flex width={"100%"} flexDir={"column"}>
        <Flex flexDir={"column"}>
          <Text fontSize={{ base: "5vw", lg: "3vw" }} fontWeight={"900"}>
            The mystery behind Lorem Ipsum -
          </Text>
          <Flex align={"center"}>
            <Text mr={"5"} display={"flex"} alignItems={"center"}>
              <Icon as={BsBookFill} mr={"2"} />8 mins
            </Text>
            <Icon as={BsDot} mr={"2"} fontSize={"xx-large"} />
            <Text> january 25th </Text>
          </Flex>
        </Flex>
        <Divider />
        <Link href={"/john doe"}>
          <Flex py={"5"} align={"center"}>
            <Image
              src={"/series.webp"}
              boxSize={"45px"}
              alt={"profileImage"}
              borderRadius={"full"}
              mr={"2"}
            />
            <Text>John Doe</Text>
          </Flex>
        </Link>
      </Flex>
    </>
  );
};
export default BlogPostHeader;
