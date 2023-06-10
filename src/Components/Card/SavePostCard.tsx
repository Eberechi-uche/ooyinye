import { Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { CiBookmarkMinus, CiBookmarkPlus } from "react-icons/ci";
import ProfileCardMini from "./ProfileCardMini";

export const SavedPostCard: React.FC = () => {
  return (
    <>
      <Flex width={"90%"} borderColor={"gray.300"} flexDir={"column"} my={"2"}>
        <Flex width={"100%"} flexDir={"column"}>
          <Flex width={"100%"}>
            <Image
              src={"/insight.jpg"}
              objectFit={"cover"}
              width={{ base: "30%", md: "20%" }}
              borderRadius={"2px"}
              alt={"user-profile"}
              mr={"2"}
            />
            <Text fontSize={"sm"} fontWeight={"900"}>
              Here is to all project that never left localhost 3000, and even
              those that never left this would be great phase
            </Text>
          </Flex>
          <Flex align={"center"} width={"100%"} justify={"space-between"}>
            <ProfileCardMini />
            <Icon as={CiBookmarkMinus} />
          </Flex>
        </Flex>
        <Divider mb={"3"} />
      </Flex>
    </>
  );
};
