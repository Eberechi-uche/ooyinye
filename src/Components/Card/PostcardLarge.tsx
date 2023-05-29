import { Divider, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsDot, BsBookmarkPlus, BsFillPinFill, BsClock } from "react-icons/bs";
import { CiBookmarkPlus, CiHeart } from "react-icons/ci";
import CardProfileMini from "./ProfileCardMini";
type PostcardLargeProps = {
  showProfile: boolean;
};
const PostcardLarge: React.FC<PostcardLargeProps> = ({ showProfile }) => {
  const { profile } = useRouter().query;
  return (
    <>
      <Flex
        width={"90%"}
        borderColor={"gray.300"}
        flexDir={"column"}
        mx={"2"}
        my={"5"}
      >
        <Flex maxH={"400px"} width={"100%"} position={"relative"}>
          <Image
            src={"/insight.jpg"}
            objectFit={"cover"}
            width={"100%"}
            alt={"user-profile"}
            borderTopRadius={"7px"}
          />
        </Flex>
        {showProfile && <CardProfileMini />}

        <Flex flexDir={"column"}>
          <Text fontWeight={"500"} textTransform={"capitalize"}>
            The quick brown fox jumps over the lazy dog The quick brown fox
          </Text>
          <Text noOfLines={1} fontSize={"sm"} fontWeight={"200"}>
            The quick brown fox jumps over the lazy dog The quick brown fox
            jumps over the lazy dog The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </Text>

          <Flex
            width={"100%"}
            fontWeight={"200"}
            justify={"space-between"}
            align={"center"}
          >
            <Flex>
              <Text fontSize={"xs"} my={"2"}>
                26 may, 2022
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                mx={"2"}
                fontSize={"xs"}
              >
                <Icon as={BsClock} mx={"1"} />
                10min Read
              </Text>
            </Flex>
            <Icon as={CiBookmarkPlus} />
          </Flex>
        </Flex>
        <Flex width={"100%"} justify={"space-between"} my={"2"}></Flex>
      </Flex>
    </>
  );
};
export default PostcardLarge;
