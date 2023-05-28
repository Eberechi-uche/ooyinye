import { Flex, Text } from "@chakra-ui/react";
import TextEditor from "@/Components/TextEditor/TextEditor";
import { useRef } from "react";
const Dashboard: React.FC = () => {
  const editorRef = useRef(null);
  return (
    <>
      <Text> i am a dashboard </Text>
      <Flex px={"10"} flexDir={"column"}>
        <TextEditor />
      </Flex>
    </>
  );
};
export default Dashboard;
