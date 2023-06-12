import { SavedPostCard } from "@/Components/Card/SavePostCard";
import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { Flex, Stack, Text } from "@chakra-ui/react";

const Bookmarks: React.FC = () => {
  return (
    <>
      <SingleContentLayout>
        <TextHeader text="Saved article" />

        <Flex px={"1"} flexDir={"column"} align={"center"} width={"100%"}>
          <Text> No saved articles</Text>
        </Flex>
      </SingleContentLayout>
    </>
  );
};
export default Bookmarks;
