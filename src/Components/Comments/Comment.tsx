import { Flex, Text, Image } from "@chakra-ui/react";

const Comments: React.FC = () => {
  return (
    <>
      <Flex
        mt={"10"}
        borderLeft={"1px solid"}
        flexDir={"column"}
        px={"2"}
        borderColor={"gray.200"}
      >
        <Flex>
          <Image
            alt={"userProfile"}
            src={"/series.webp"}
            boxSize={"35px"}
            mr={"2"}
            borderRadius={"full"}
          />
          <Text> John Doe</Text>
        </Flex>

        <Text fontSize={"sm"}>
          thanks, post was amazing, learn't alot , looking forward to more post
        </Text>
      </Flex>
    </>
  );
};
export default Comments;
