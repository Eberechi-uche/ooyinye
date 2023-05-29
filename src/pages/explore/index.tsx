import {
  Flex,
  ListItem,
  Image,
  Text,
  UnorderedList,
  List,
  Divider,
  Button,
} from "@chakra-ui/react";

const Explore: React.FC = () => {
  return (
    <>
      <Flex>
        <Flex flexDir={"column"} width={"100vw"} height={"100vh"} p={"5%"}>
          <Flex flexDir={"column"}>
            <Text fontSize={{ base: "20vw", md: "15vw", lg: "10vw" }}>
              Explore
            </Text>
            <Text> Discover Articles based on your interest</Text>
          </Flex>
          <Flex fontWeight={"500"}>
            <List width={"100%"}>
              <ListItem my={"5"}>
                <Flex>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    Artififial Inteligence
                  </Text>
                  <Divider />
                  <Text fontSize={"xs"}>
                    Explore the fascinating world of Artificial Intelligence
                    (AI) and its profound impact on our lives. In this digital
                    era, AI has emerged as a transformative force,
                    revolutionizing industries and shaping the way we interact
                    with technology.
                  </Text>
                </Flex>
                <Divider my={"5"} colorScheme="blackAlpha" />
              </ListItem>
              <ListItem my={"5"}>
                <Flex justify={"center"}>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    Programming
                  </Text>
                  <Divider />
                  <Text fontSize={"xs"}>
                    embark on a thrilling exploration of the boundless world of
                    programming. In this digital age, programming has become an
                    indispensable skill, empowering individuals to shape
                    technology and bring their creative ideas to life.
                  </Text>
                </Flex>
                <Divider my={"5"} />
              </ListItem>
              <ListItem my={"5"}>
                <Flex justify={"center"}>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    life
                  </Text>
                  <Divider />
                  <Text fontSize={"xs"}>
                    Sanctuary of reflection and exploration, where we delve into
                    the profound essence of life itself. In this ever-changing
                    world, it's essential to pause, breathe, and contemplate the
                    beauty and complexity that surrounds us
                  </Text>
                </Flex>
                <Divider my={"5"} />
              </ListItem>
              <ListItem my={"5"}>
                <Flex justify={"center"}>
                  <Text textTransform={"uppercase"} fontWeight={"600"}>
                    Fiction
                  </Text>
                  <Divider />
                  <Text fontSize={"xs"}>
                    A captivating realm where fiction comes alive, and
                    imagination knows no bounds. Here, we embark on a magical
                    journey through the pages of extraordinary stories,
                    exploring the infinite possibilities of the human
                    imagination.
                  </Text>
                </Flex>
                <Divider my={"5"} />
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Explore;
