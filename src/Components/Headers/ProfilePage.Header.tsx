import { Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const ProfilePageHeader: React.FC = () => {
  const { profile } = useRouter().query;
  return (
    <>
      <Text
        display={{ base: "none", lg: "block" }}
        fontSize={"4xl"}
        textTransform={"capitalize"}
        fontWeight={"500"}
        px={"10px"}
        py={"20px"}
      >
        {profile}
      </Text>
      <Flex
        py={"20px"}
        align={"center"}
        width={{
          base: "100%",
        }}
        display={{ md: "none" }}
        flexDir={"column"}
      >
        <Flex width={"100%"} justify={"center"} position={"relative"}>
          <Image
            src={"/series.jpg"}
            alt={"userProfile"}
            boxSize={"100px"}
            borderRadius={"full"}
          />
        </Flex>

        <Flex
          flexDir={"column"}
          ml={"2"}
          width={"100%"}
          align={"center"}
          mt={"20px"}
        >
          <Text
            textTransform={"capitalize"}
            fontSize={"2xl"}
            fontWeight={"500"}
          >
            {profile}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfilePageHeader;
