import { Divider, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  BsDot,
  BsBookmarkPlus,
  BsFillPinFill,
  BsClockFill,
} from "react-icons/bs";

const TopTrendCard: React.FC = () => {
  const { profile } = useRouter().query;
  return (
    <>
      <Flex
        width={"250px"}
        height={"200px"}
        borderColor={"gray.300"}
        flexDir={"column"}
        mx={"2"}
      >
        <Flex height={"65%"} width={"100%"} position={"relative"}>
          <Flex
            height={"20%"}
            width={"100%"}
            align={"center"}
            position={"absolute"}
            py={"5"}
            px={"2"}
            color={"#fff"}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) `}
          >
            <Flex align={"center"} display={profile ? "none" : "flex"}>
              <Image
                src={"series.webp"}
                alt={"cardimage"}
                boxSize={"30px"}
                mr={"2"}
                borderRadius={"full"}
              />
              <Text fontSize={"xs"}> User Name</Text>
              <Icon as={BsDot} mx={"2"} />
            </Flex>

            <Flex>
              <Text fontSize={"12px"} display={"flex"} alignItems={"center"}>
                <Icon as={BsClockFill} mx={"2"} />8 mins
              </Text>
            </Flex>
          </Flex>
          <Image
            src={"/blogimage.png"}
            objectFit={"cover"}
            width={"100%"}
            alt={"user-profile"}
          />
        </Flex>

        <Flex flexDir={"column"}>
          <Text fontWeight={"700"} textTransform={"capitalize"}>
            the quick brown fox
          </Text>
          <Text noOfLines={2} fontSize={"xs"}>
            The quick brown fox jumps over the lazy dog The quick brown fox
            jumps over the lazy dog The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default TopTrendCard;
