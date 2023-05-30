import Carousel from "@/Components/Layout/Carousel.Layout";

import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";

import { Button, Divider, Flex, Input, Text } from "@chakra-ui/react";

const Search: React.FC = () => {
  return (
    <>
      <SingleContentLayout>
        <Flex width={"100%"} justify={"center"} flexDir={"column"}>
          <Flex width={"100%"} flexDir={"column"} p={"5"} minH={"20vh"}>
            <Text
              fontSize={{ base: "20vw", md: "20vw", lg: "15vw" }}
              fontWeight={"600"}
              color={"gray.200"}
              textAlign={"center"}
            >
              Search
            </Text>
            <Input
              bg={"white"}
              borderRadius={"full"}
              placeholder="search blog"
            />
            <Carousel>
              <Button
                mx={"2"}
                colorScheme="blue"
                variant={"unstyled"}
                color={"gray.400"}
              >
                Artificial Inteligence
              </Button>
              <Button
                mx={"2"}
                colorScheme="blue"
                variant={"unstyled"}
                color={"gray.400"}
              >
                Programming
              </Button>
              <Button
                mx={"2"}
                colorScheme="blue"
                variant={"unstyled"}
                color={"gray.400"}
              >
                Life
              </Button>
              <Button
                mx={"2"}
                colorScheme="blue"
                variant={"unstyled"}
                color={"gray.400"}
              >
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
