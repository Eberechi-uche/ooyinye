import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const TopTrendCard: React.FC = () => {
  const { profile } = useRouter().query;
  return (
    <>
      <Flex
        width={"230px"}
        height={"230px"}
        border={"1px solid"}
        borderRadius={"5px"}
        borderColor={"gray.300"}
        mx={"2"}
        flexDir={"column"}
        justify={profile ? "flex-end" : "space-between"}
        px={"1"}
        // bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , ${
        //     post.imageUrl && `url(${post.imageUrl})`
        //   }`}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , ${`"")`}`}
        color={"#fff"}
        bg={"#71C7EC"}
        backgroundSize={"contain"}
      >
        <Flex
          height={"20%"}
          width={"100%"}
          align={"center"}
          borderBottom={"0.5px solid"}
          position={"relative"}
          display={profile ? "none" : "flex"}
        >
          <Image
            src={"profileplacholder.png"}
            alt={"cardimage"}
            boxSize={"30px"}
            mr={"2"}
            borderRadius={"full"}
          />
          <Text fontSize={"xs"}> User Name</Text>
          <Text
            fontSize={"xs"}
            position={"absolute"}
            right={"2"}
            border={"1px solid"}
            borderRadius={"full"}
            px={"1.5"}
            maxWidth={"30%"}
            isTruncated={true}
          >
            tag
          </Text>
        </Flex>

        <Flex flexDir={"column"}>
          <Text fontWeight={"700"} textTransform={"capitalize"}>
            the quick brown fox
          </Text>
          <Text noOfLines={3} fontSize={"xs"}>
            The quick brown fox jumps over the lazy dog The quick brown fox
            jumps over the lazy dog The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default TopTrendCard;
