import Carousel from "@/Components/Layout/Carousel.Layout";

import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";

import { Button, Divider, Flex, Input, Text } from "@chakra-ui/react";

const Search: React.FC = () => {
  return (
    <>
      <SingleContentLayout>
        <Flex width={"100%"} justify={"center"} flexDir={"column"}>
          <Flex
            width={"100%"}
            overflow={"hidden"}
            height={"15vh"}
            flexDir={"column"}
            textAlign={"center"}
          >
            <Text
              fontSize={{ base: "100px", md: "10vw", lg: "80px" }}
              fontWeight={"700"}
              color={"gray.200"}
            >
              Search
            </Text>
          </Flex>
          <Flex width={"100%"} flexDir={"column"} p={"5"} minH={"20vh"}>
            <Input
              bg={"white"}
              borderRadius={"full"}
              placeholder="search blog"
            />
            <Carousel>
              <Button mx={"2"} colorScheme="blue" variant={"unstyled"}>
                Artificial Inteligence
              </Button>
              <Button mx={"2"} colorScheme="blue" variant={"unstyled"}>
                Programming
              </Button>{" "}
              <Button mx={"2"} colorScheme="blue" variant={"unstyled"}>
                Life
              </Button>{" "}
              <Button mx={"2"} colorScheme="blue" variant={"unstyled"}>
                Fiction
              </Button>
            </Carousel>
          </Flex>
          <Divider />
        </Flex>
      </SingleContentLayout>
    </>
  );
};
export default Search;
