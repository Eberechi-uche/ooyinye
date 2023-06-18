import { Button, Flex, Icon, Text, Image, Divider } from "@chakra-ui/react";
import PostCardPreview from "@/Components/Card/PostCardPreview";
import Link from "next/link";
import { SavedPostCard } from "@/Components/Card/SavePostCard";
import useGetCollection from "@/Hooks/DataFetching/useGetCollection";
import UserInfoCard from "@/Components/Card/UserInfoCard";
import { UserSnippetLoader } from "@/Components/Loaders/loader";
import { useEffect } from "react";

const HomeLHS: React.FC = () => {
  const { getAllCollection, collectionData, loading } = useGetCollection();
  useEffect(() => {
    getAllCollection();
  }, []);
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
        my={"10"}
      >
        <Flex>
          <Anouncements />
        </Flex>

        <Flex flexDir={"column"}>
          <Text fontWeight={"700"}> Authors to follow</Text>
          {collectionData &&
            collectionData.map((user) => (
              <UserInfoCard
                imageUrl={user.imageUrl}
                displayName={user.userDN}
                profileId={user.userId}
                key={user.userId}
              />
            ))}
          {loading && <UserSnippetLoader />}
        </Flex>
        <Flex flexDir={"column"}></Flex>
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

export default HomeLHS;
