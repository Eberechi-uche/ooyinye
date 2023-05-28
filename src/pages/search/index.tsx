import ContentLayout from "@/Components/Layout/Content.Layout";
import HomeRHS from "@/Components/LeftContentComponent/HomeLHS/HomeRHS";
import { Flex, Text } from "@chakra-ui/react";

const Search: React.FC = () => {
  return (
    <>
      <ContentLayout>
        <>
          <HomeRHS />
        </>
        <>
          <Flex>
            <Text>Search for post</Text>
          </Flex>
        </>
        <></>
      </ContentLayout>
    </>
  );
};
export default Search;
