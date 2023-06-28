import ExploreCard from "@/Components/Card/ExploreCard";
import { firestore } from "@/Components/Firebase/ClientApp";
import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { Flex, ListItem, Text, List, Divider } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export type Topic = {
  id: string;
  desc: string;
  imageUrl: string;
  bgColor: string;
};
const Explore: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  const getTopics = async () => {
    const topicsRef = collection(firestore, "Topics");
    const topicData = await getDocs(topicsRef);
    const topicDocs = topicData.docs.map((topic) => ({
      ...topic.data(),
    }));
    setTopics(topicDocs as Topic[]);
  };

  useEffect(() => {
    getTopics();
  }, []);
  return (
    <>
      <SingleContentLayout>
        <Flex flexDir={"column"} align={"center"} bgPos={"center"}>
          <Flex
            flexDir={"column"}
            width={"100%"}
            maxW={"1500px"}
            minHeight={"100vh"}
            p={"5%"}
          >
            <Flex flexDir={"column"} width={"100%"}>
              <TextHeader text="Explore" />
              <Text> Discover Articles based on your interest</Text>
            </Flex>
            {topics.map((topic) => (
              <ExploreCard {...topic} key={topic.id} />
            ))}
          </Flex>
        </Flex>
      </SingleContentLayout>
    </>
  );
};

export default Explore;
