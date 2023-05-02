import { Button, Flex, Icon, Text, Image } from "@chakra-ui/react";
import PostCardPreview from "@/Components/Card/PostCardPreview";

const HomeLHS: React.FC = () => {
  return (
    <>
      <Flex
        position={"sticky"}
        top={"20"}
        flexDir={"column"}
        maxH={"90vh"}
        overflowY={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex>
          <Anouncements />
        </Flex>

        <Flex flexDir={"column"} my={"10"}>
          <Text fontWeight={"700"}> Top writters</Text>
          <TopUsers />
          <TopUsers />
          <TopUsers />
          <TopUsers />
          <TopUsers />
          <TopUsers />
        </Flex>
        <Flex flexDir={"column"}>
          <Text fontWeight={"700"}> Saved Posts</Text>
          <PostCardPreview />
          <PostCardPreview />
          <PostCardPreview />
          <PostCardPreview />
          <PostCardPreview />
          <PostCardPreview />
        </Flex>
      </Flex>
    </>
  );
};
const Anouncements: React.FC = () => {
  return (
    <>
      <Flex
        width={"100%"}
        bg={"gray.50"}
        align={"center"}
        p={"5"}
        borderRadius={"7px"}
      >
        <Flex flexDir={"column"} width={"50%"}>
          <Text fontWeight={"700"}>
            comming soon - <br /> series
          </Text>
          <Text fontSize={"xs"}>
            Because Great thing take time you can write in bit and we would help
            you group it
          </Text>
          <Button size={"xs"} my={"2"} borderRadius={"7px"}>
            find out more
          </Button>
        </Flex>
        <Flex width={"50%"} h={"100%"} px={"2"}>
          <Image
            alt={"postinseries"}
            src={"seriesPost.jpg"}
            height={"100%"}
            w={"100%"}
            objectFit={"cover"}
            borderRadius={"7px"}
          />
        </Flex>
      </Flex>
    </>
  );
};

const TopUsers: React.FC = () => {
  return (
    <>
      <Flex align={"center"} my={"2"}>
        <Image
          src={"profileplacholder.png"}
          alt={"userProfile"}
          boxSize={"45px"}
          borderRadius={"full"}
        />
        <Flex>
          <Text textTransform={"capitalize"} fontWeight={"700"} ml={"2"}>
            Quick fox
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeLHS;
