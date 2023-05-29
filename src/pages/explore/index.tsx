import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { Flex, ListItem, Text, List, Divider } from "@chakra-ui/react";

const Explore: React.FC = () => {
  return (
    <>
      <Flex width={"100vw"} bg={"thistle"} flexDir={"column"} align={"center"}>
        <Flex
          flexDir={"column"}
          width={"100%"}
          maxW={"1500px"}
          minHeight={"100vh"}
          p={"5%"}
        >
          <Flex flexDir={"column"} width={"100%"}>
            <Text
              fontSize={{ base: "20vw", md: "15vw", lg: "150px" }}
              color={"gray.200"}
              fontWeight={"700"}
            >
              Explore
            </Text>
            <Text> Discover Articles based on your interest</Text>
          </Flex>
          <Flex fontWeight={"500"}>
            <List width={"100%"}>
              <ListItem my={"20"}>
                <Flex>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    Artififial Inteligence
                  </Text>
                  <Divider mx={"4"} />
                  <Text fontSize={"sm"} fontWeight={"300"}>
                    Explore the fascinating world of Artificial Intelligence
                    (AI) and its profound impact on our lives. In this digital
                    era, AI has emerged as a transformative force,
                    revolutionizing industries and shaping the way we interact
                    with technology.
                  </Text>
                </Flex>
              </ListItem>
              <ListItem my={"20"}>
                <Flex justify={"center"}>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    Programming
                  </Text>
                  <Divider mx={"4"} />
                  <Text fontSize={"sm"} fontWeight={"300"}>
                    embark on a thrilling exploration of the boundless world of
                    programming. In this digital age, programming has become an
                    indispensable skill, empowering individuals to shape
                    technology and bring their creative ideas to life.
                  </Text>
                </Flex>
              </ListItem>
              <ListItem my={"20"}>
                <Flex justify={"center"}>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    life
                  </Text>
                  <Divider mx={"4"} />
                  <Text fontSize={"sm"} fontWeight={"300"}>
                    Sanctuary of reflection and exploration, where we delve into
                    the profound essence of life itself. In this ever-changing
                    world, it's essential to pause, breathe, and contemplate the
                    beauty and complexity that surrounds us
                  </Text>
                </Flex>
              </ListItem>
              <ListItem my={"20"}>
                <Flex justify={"center"}>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    Fiction
                  </Text>
                  <Divider mx={"4"} />
                  <Text fontSize={"sm"} fontWeight={"300"}>
                    A captivating realm where fiction comes alive, and
                    imagination knows no bounds. Here, we embark on a magical
                    journey through the pages of extraordinary stories,
                    exploring the infinite possibilities of the human
                    imagination.
                  </Text>
                </Flex>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Explore;
