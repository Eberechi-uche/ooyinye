import { Flex, Text, Image } from "@chakra-ui/react";

const ExplorePost: React.FC = () => {
  return (
    <>
      <Flex width={"100vw"} justify={"center"} px={"3"}>
        <Flex width={"100%"} maxW={"700px"} flexDir={"column"}>
          <Flex flexDir={"column"}>
            <Text fontSize={"2xl"}> Ai</Text>
            <Image src={"/insight.jpg"} width={"100%"} />
            <Text>
              the quick brown fox jumped over the lazy dog the quick brown fox
              jumped over the lazy dog the quick brown fox jumped over the lazy
              dog the quick brown fox jumped over the lazy dog the quick brown
              fox jumped over the lazy dog the quick brown fox jumped over the
              lazy dog
            </Text>
          </Flex>
        </Flex>
        <Flex></Flex>
      </Flex>
    </>
  );
};
export default ExplorePost;
