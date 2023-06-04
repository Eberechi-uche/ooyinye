import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsDot, BsFillPinFill, BsClockFill } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import ProfileCardMini from "./ProfileCardMini";

type PostCardProps = {
  showProfile: boolean;
};

const PostCard: React.FC<PostCardProps> = ({ showProfile }) => {
  const { profile } = useRouter().query;
  return (
    <>
      <Flex flexDir={"column"} py={"5"} px={"5"}>
        {profile ? (
          <Flex width={"100%"} justify={"space-between"}>
            <Text> date</Text> <Icon as={BsFillPinFill} />
          </Flex>
        ) : (
          <Flex align={"center"}>
            <Flex flexDir={"column"} width={"100%"}>
              {showProfile && <ProfileCardMini />}

              <Flex align={"center"} justify={"space-between"}>
                <Flex>
                  <Text
                    fontSize={"12px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    1st April
                  </Text>
                  <Text
                    fontSize={"12px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Icon as={BsDot} mx={"2"} />
                    <Icon as={BsClockFill} mx={"2"} />8 mins
                  </Text>
                </Flex>

                <Flex fontSize={"2xl"}>
                  <Icon as={CiBookmarkPlus} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}
        <Link
          href={`/article/${"@adalovelave"}/${"the-mystery-behind-lorem-ipsum"}`}
        >
          <Flex
            align={"center"}
            mt={"2"}
            fontSize={{ base: "sm", md: "sm" }}
            justify={"space-between"}
            width={"100%"}
          >
            <Flex
              flexDir={"column"}
              alignSelf={"flex-start"}
              height={"fit-content"}
              width={"80%"}
            >
              <Text fontWeight={"700"} noOfLines={[3, 4]}>
                The mystery behind lorem ipsum, origin, uses and everything
                inbetween
              </Text>
            </Flex>

            <Image
              alt={"postImage"}
              src={"/fiction.webp"}
              width={{ base: "25%", md: "15%" }}
              height={{ base: "80%", md: "40%" }}
              objectFit={"cover"}
              ml={"4"}
              borderRadius={"3px"}
              alignSelf={"center"}
            />
          </Flex>
        </Link>
      </Flex>
    </>
  );
};
export default PostCard;
