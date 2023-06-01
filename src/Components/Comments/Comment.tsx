import { Flex, Text, Image } from "@chakra-ui/react";
import ProfileCardMini from "../Card/ProfileCardMini";

const Comments: React.FC = () => {
  return (
    <>
      <Flex mt={"10"} flexDir={"column"} px={"2"}>
        <Flex align={"center"} fontSize={"xs"}>
          <Image
            alt={"userProfile"}
            src={"/profile.jpeg"}
            boxSize={"15px"}
            mr={"2"}
            objectFit={"cover"}
            borderRadius={"full"}
          />

          <Text> Charles Babbage</Text>
          <Text mx={"5"}> follow</Text>
        </Flex>

        <Text fontSize={"sm"}>
          thanks, post was amazing, learn't alot , looking forward to more post.
        </Text>
      </Flex>
    </>
  );
};
export default Comments;
