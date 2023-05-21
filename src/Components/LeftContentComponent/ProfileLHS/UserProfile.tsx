import ProfilePageHeader, {
  ProfileInfo,
} from "@/Components/Headers/ProfilePage.Header";
import { ProfilePageHeaderProps } from "@/Components/Headers/ProfilePage.Header";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

const UserProfleLHS: React.FC<ProfilePageHeaderProps> = ({ profile }) => {
  return (
    <>
      <Flex
        position={"sticky"}
        top={"20"}
        flexDir={"column"}
        maxH={"90vh"}
        overflowY={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex width={"100%"} justify={"center"}>
          <Image
            src={"/series.webp"}
            alt={"userProfile"}
            width={"100%"}
            height={"200px"}
            objectFit={"cover"}
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
          <Flex>
            <Text>
              the quick brown fox jumped over the lazy dog the quick brown fox
              jumped over the lazy dog the quick brown fox jumped over the lazy
              dog v the quick brown fox jumped over the lazy dog the quick brown
              fox jumped over the lazy dog
            </Text>
          </Flex>

          <Flex width={"80%"} justify={"space-around"}>
            <Button variant={"brandPrimary"}> follow</Button>
            <Button variant={"brandPrimary"}> connect</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default UserProfleLHS;
