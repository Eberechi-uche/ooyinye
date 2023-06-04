import TextHeader from "@/Components/Headers/TextHeader";
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiDraftLine } from "react-icons/ri";
const Dashboard: React.FC = () => {
  const route = useRouter();
  return (
    <SingleContentLayout>
      <Flex flexDir={"column"} width={"100%"} px={"3"}>
        <TextHeader text="Dashboard" />
        <Flex flexDir={"column"} mx={"5"}>
          <Text fontWeight={"900"}> Stats</Text>
          <Flex
            flexWrap={"wrap"}
            width={"100%"}
            justify={"space-between"}
            my={"5"}
          >
            <OverViewCard heading="Followers" value={0} />
            <OverViewCard heading="Articles" value={0} />
            <OverViewCard heading="Views" value={0} />
          </Flex>
          <Flex
            minHeight={"10vh"}
            border={"1px solid"}
            minWidth={"100px"}
            justify={"center"}
            align={"center"}
            borderColor={"gray.200"}
            flexDir={"column"}
            p={"10"}
            onClick={() => {
              route.push("/profile/Dashboard/studio");
            }}
            cursor={"pointer"}
          >
            <Icon as={RiDraftLine} fontSize={"6xl"} color={"green.500"} />
            <Text> new Article</Text>
          </Flex>
        </Flex>
      </Flex>
    </SingleContentLayout>
  );
};
export default Dashboard;

type OverViewCardProps = {
  heading: string;
  value: number;
};
const OverViewCard: React.FC<OverViewCardProps> = ({ heading, value }) => {
  return (
    <>
      <Flex
        flexDir={"column"}
        h={{ base: "10vh" }}
        borderRadius={"5px"}
        border={"1px solid"}
        borderColor={"gray.200"}
        w={{ base: "100%", md: "30%" }}
        justify={"center"}
        py={"10"}
        px={"5"}
        mb={"4"}
      >
        <Text>{heading}</Text>
        <Text fontWeight={"700"}> {value}</Text>
      </Flex>
    </>
  );
};
