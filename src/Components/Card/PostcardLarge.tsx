import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsBookmark, BsBookmarkPlus, BsClock } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import CardProfileMini from "./ProfileCardMini";
import { IoBookmarkSharp } from "react-icons/io5";
type PostcardLargeProps = {
  showProfile: boolean;
};
const PostcardLarge: React.FC<PostcardLargeProps> = ({ showProfile }) => {
  return (
    <>
      <Flex width={"85%"} borderColor={"gray.50"} flexDir={"column"} my={"5"}>
        <Flex
          maxH={"170px"}
          minH={"170px"}
          width={"100%"}
          position={"relative"}
          mb={"2"}
        >
          <Image
            src={"/insight.jpg"}
            objectFit={"cover"}
            width={"100%"}
            alt={"user-profile"}
            borderRadius={"4px"}
          />
        </Flex>
        <CardProfileMini />

        <Flex flexDir={"column"} my={"2"}>
          <Text fontWeight={"900"} textTransform={"capitalize"} my={"2"}>
            The quick brown fox jumps over the lazy dog The quick brown fox
          </Text>
          <Text
            noOfLines={2}
            fontSize={"sm"}
            my={"1"}
            fontWeight={"500"}
            color={"gray.500"}
          >
            The quick brown fox jumps over the lazy dog The quick brown fox
            jumps over the lazy dog The quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dog
          </Text>

          <Flex
            width={"100%"}
            fontWeight={"200"}
            justify={"space-between"}
            align={"center"}
            my={"2"}
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
            <Icon as={BsBookmark} />
          </Flex>
        </Flex>
        <Flex width={"100%"} justify={"space-between"} my={"2"}></Flex>
      </Flex>
    </>
  );
};
export default PostcardLarge;
