import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { CiBookmarkMinus, CiBookmarkPlus } from "react-icons/ci";
import ProfileCardMini from "./ProfileCardMini";

export const SavedPostCard: React.FC = () => {
  return (
    <>
      <Flex
        width={"90%"}
        borderColor={"gray.300"}
        flexDir={"column"}
        my={"2"}
        borderRadius={"5px"}
        bg={"gray.50"}
      >
        <Flex width={"100%"}>
          <Image
            src={"/insight.jpg"}
            objectFit={"cover"}
            width={"20%"}
            height={"100px"}
            alt={"user-profile"}
            mr={"2"}
          />
          <Flex flexDir={"column"} width={"70%"} py={"2"}>
            <Text fontSize={"xs"} fontWeight={"600"}>
              Here is to all project that never left localhost 3000, and even
              those that never left this would be great phase
            </Text>
            <Flex align={"center"} width={"100%"} justify={"space-between"}>
              <ProfileCardMini />
              <Icon as={CiBookmarkMinus} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
