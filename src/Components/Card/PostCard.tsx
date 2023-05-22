import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsDot,
  BsBookmarkPlus,
  BsFillPinFill,
  BsClockFill,
} from "react-icons/bs";

const PostCard: React.FC = () => {
  const { profile } = useRouter().query;
  return (
    <>
      <Link href={"/posts/blooger"}>
        <Flex flexDir={"column"} py={"5"} px={"5"}>
          {profile ? (
            <Flex width={"100%"} justify={"space-between"}>
              <Text> date</Text> <Icon as={BsFillPinFill} />
            </Flex>
          ) : (
            <Flex>
              <Image
                src="/series.webp"
                alt={"userprofile"}
                boxSize={"30"}
                borderRadius={"full"}
              />
              <Flex ml={"2"} flexDir={"column"} width={"100%"}>
                <Flex align={"center"} justify={"space-between"}>
                  <Flex>
                    <Text> Quick Fox</Text>
                    <Text
                      fontSize={"12px"}
                      color={"gray.500"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Icon as={BsDot} mx={"2"} />
                      1st April
                    </Text>
                    <Text
                      fontSize={"12px"}
                      color={"gray.500"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Icon as={BsDot} mx={"2"} />
                      <Icon as={BsClockFill} mx={"2"} />8 mins
                    </Text>
                  </Flex>

                  <Flex>
                    {profile ? (
                      <Icon as={BsFillPinFill} />
                    ) : (
                      <Icon as={BsBookmarkPlus} />
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}

          <Flex align={"center"} mt={"2"}>
            <Flex
              flexDir={"column"}
              alignSelf={"flex-start"}
              height={"fit-content"}
            >
              <Text fontWeight={"700"} noOfLines={[1, 2]}>
                The Quick brown fox the Quickiest brown fox
              </Text>
              <Text fontSize={{ base: "xs" }} noOfLines={[2, 4]}>
                The Quick fox jumped over the lazy Dog The Quick fox jumped over
                the lazy DogThe Quick fox jumped over the lazy DogThe Quick fox
                jumped over the lazy DogThe Quick fox jumped over the lazy Dog
                The Quick fox jumped over the lazy Dog The Quick fox jumped over
                the lazy DogThe Quick fox jumped over the lazy DogThe Quick fox
                jumped over the lazy DogThe Quick fox jumped over the lazy Dog
              </Text>
            </Flex>

            <Image
              alt={"postImage"}
              src={"/blogsample.png"}
              width={{ base: "35%" }}
              height={{ base: "80%", md: "60%" }}
              objectFit={"cover"}
              ml={"4"}
              borderRadius={"3px"}
              alignSelf={"flex-start"}
            />
          </Flex>
        </Flex>
      </Link>
    </>
  );
};
export default PostCard;
