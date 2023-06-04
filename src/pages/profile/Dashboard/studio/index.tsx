import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { Flex, Text } from "@chakra-ui/react";

const NewArticle: React.FC = () => {
  return (
    <>
      <SingleContentLayout>
        <TextHeader text="Studio" />
        <Flex></Flex>
      </SingleContentLayout>
    </>
  );
};
export default NewArticle;
