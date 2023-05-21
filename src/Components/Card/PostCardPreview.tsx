import { Flex, Text, Image } from "@chakra-ui/react";

const PostCardPreview: React.FC = () => {
  return (
    <>
      <Flex width={"100%"} align={"center"} my={"3"}>
        <Flex width={"20%"} h={"100%"} alignSelf={"flex-end"}>
          <Image
            src={"/journal.jpg"}
            alt={"postImage"}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            borderRadius={"7px"}
          />
        </Flex>
        <Flex width={"80%"} flexDir={"column"} ml={"2"}>
          <Text fontWeight={"700"} fontSize={"sm"}>
            Getting to know the about the sly fox
          </Text>
          <Text fontSize={"xs"} noOfLines={2}>
            The quick brown fox jumped over the lazy Dog The quick brown fox
            jumped over the lazy Dog The quick brown fox jumped over the lazy
            Dog The quick brown fox jumped over the lazy Dog
          </Text>
          <Flex align={"center"}>
            <Image
              src={"/profileplacholder.png"}
              alt={"profilePhoto"}
              boxSize={"20px"}
              borderRadius={"full"}
            />
            <Text fontSize={"2xs"} ml={"4"}>
              {" "}
              Mr Brown Fox
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default PostCardPreview;
