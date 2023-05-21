import PostCardPreview from "@/Components/Card/PostCardPreview";

import { IoChatbubblesOutline, IoHeartOutline } from "react-icons/io5";
import { Divider, Flex, Icon, Text } from "@chakra-ui/react";

const BlogLHS: React.FC = () => {
  return (
    <>
      <Flex flexDir={"column"} maxW={"400px"}>
        <Flex flexDir={"column"} my={"10"}>
          <Flex width={"100%"} align={"center"} justify={"space-between"}>
            <Text fontSize={"3xl"} display={"flex"}>
              Comments
            </Text>
            <Flex width={"50%"} justify={"space-between"}>
              <Text display={"flex"} alignItems={"center"}>
                500
                <Icon as={IoChatbubblesOutline} fontSize={"2xl"} />
              </Text>
              <Text display={"flex"} alignItems={"center"}>
                700
                <Icon as={IoHeartOutline} fontSize={"2xl"} />
              </Text>
            </Flex>
          </Flex>

          <Divider />
        </Flex>

        <Flex flexDir={"column"} my={"10"}>
          <Text fontSize={"3xl"}>More by John Doe</Text>
          <Divider />
          <PostCardPreview />
          <PostCardPreview />
          <PostCardPreview />
          <PostCardPreview />
          <PostCardPreview />
        </Flex>
        <Flex flexDir={"column"} my={"10"}>
          <Text fontSize={"3xl"}>Recommendation</Text>
          <Divider />
          <PostCardPreview />
        </Flex>
        <Flex></Flex>
      </Flex>
    </>
  );
};
export default BlogLHS;
