import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsDot, BsBookmarkPlus, BsFillPinFill } from "react-icons/bs";

const PostCard: React.FC = () => {
  const { profile } = useRouter().query;
  return (
    <>
      <Flex flexDir={"column"} py={"5"}>
        {profile ? (
          <Flex width={"100%"} justify={"space-between"}>
            <Text> date</Text> <Icon as={BsFillPinFill} />
          </Flex>
        ) : (
          <Flex>
            <Image
              src="profileplacholder.png"
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

        <Flex align={"center"} mt={"4"}>
          <Flex flexDir={"column"}>
            <Text fontWeight={"700"}>
              The QUick brown fox the Quickiest brown fox
            </Text>
            <Text fontSize={{ base: "xs" }} noOfLines={[3, 4, 6]}>
              The Quick fox jumped over the lazy Dog The Quick fox jumped over
              the lazy DogThe Quick fox jumped over the lazy DogThe Quick fox
              jumped over the lazy DogThe Quick fox jumped over the lazy Dog The
              Quick fox jumped over the lazy Dog The Quick fox jumped over the
              lazy DogThe Quick fox jumped over the lazy DogThe Quick fox jumped
              over the lazy DogThe Quick fox jumped over the lazy Dog
            </Text>
          </Flex>

          <Image
            alt={"postImage"}
            src={"journal2.jpg"}
            width={{ base: "30%" }}
            objectFit={"cover"}
            ml={"4"}
            borderRadius={"5px"}
          />
        </Flex>
      </Flex>
    </>
  );
};
export default PostCard;
