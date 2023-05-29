import { Flex, Text, Image, Icon, Button, Divider } from "@chakra-ui/react";
import { CiShare1, CiHeart, CiChat2, CiDollar } from "react-icons/ci";

const ProfileCardLarge: React.FC = () => {
  return (
    <>
      <Flex width={"100%"} p={"5"} flexDir={"column"}>
        <Flex justify={"space-between"} width={"100%"}>
          <Flex width={"100%"} align={"center"}>
            <Image
              src={"/programming.jpg"}
              boxSize={"50px"}
              objectFit={"cover"}
              borderRadius={"full"}
              mr={"2"}
            />
            <Text fontWeight={"500"}> Ada loveLace</Text>
          </Flex>
          <Flex align={"center"}>
            <Button
              borderRadius={"full"}
              size={"sm"}
              colorScheme="blue"
              color={"#fff"}
            >
              follow
            </Button>
            <Icon as={CiDollar} fontSize={"4xl"} />
          </Flex>
        </Flex>
        <Text fontSize={"sm"}>users bio here if available</Text>
        <Divider my={"5"} />
      </Flex>
    </>
  );
};
export default ProfileCardLarge;
