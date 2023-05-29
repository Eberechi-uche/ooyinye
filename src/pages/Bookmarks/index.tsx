import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { Flex, Text } from "@chakra-ui/react";

const Bookmarks: React.FC = () => {
  return (
    <>
      <SingleContentLayout>
        <Flex width={"100%"} justify={"center"}>
          <Text
            fontSize={{ base: "15vw", md: "10vw", lg: "7vw" }}
            fontWeight={"700"}
            color={"gray.200"}
            textAlign={"center"}
          >
            Reading List
          </Text>
        </Flex>
      </SingleContentLayout>
    </>
  );
};
export default Bookmarks;
