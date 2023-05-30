import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure,
  Image,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import Comments from "@/Components/Comments/Comment";

import BlogPostHeader from "@/Components/Headers/BlogPost.Header";
import BlogParser from "@/Components/BlogParser/BlogParser";

import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import BlogNavFooter from "@/Components/MobileFooter/BlogNavFooter";
import PostcardLarge from "@/Components/Card/PostcardLarge";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";

const Post: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SingleContentLayout>
        <>
          <BlogNavFooter onOpen={onOpen} />
          <BlogPostHeader />
          <Image alt={"imageName"} src={"/blogsample.png"} />
          <Flex minH={"100vh"} flexDir={"column"} width={"100%"}>
            <BlogParser />
            <Flex
              flexDir={"column"}
              mt={"10"}
              bg={"gray.50"}
              width={"100%"}
              align={"center"}
            >
              <Text fontWeight={"700"} m={"4"} fontSize={"2xl"}>
                more by
              </Text>

              <ProfileCardLarge
                imageUrl={undefined}
                Bio={undefined}
                email={undefined}
                userDN={undefined}
                userId={undefined}
                twitter={undefined}
              />
              <SimpleGrid columns={{ base: 1, md: 2 }} placeItems={"center"}>
                <PostcardLarge showProfile={false} />
                <PostcardLarge showProfile={false} />
                <PostcardLarge showProfile={false} />
                <PostcardLarge showProfile={false} />
                <PostcardLarge showProfile={false} />
                <PostcardLarge showProfile={false} />
              </SimpleGrid>
            </Flex>
            <Flex
              flexDir={"column"}
              bg={"gray.700"}
              width={"100%"}
              align={"center"}
              color={"#fff"}
              pb={"10"}
            >
              <Text fontWeight={"700"} m={"4"} fontSize={"2xl"}>
                Recommendation
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} placeItems={"center"}>
                <PostcardLarge showProfile={true} />
                <PostcardLarge showProfile={true} />
                <PostcardLarge showProfile={true} />
                <PostcardLarge showProfile={true} />
                <PostcardLarge showProfile={true} />
                <PostcardLarge showProfile={true} />
              </SimpleGrid>
            </Flex>
          </Flex>
          <CommentDrawer onClose={onClose} isOpen={isOpen} />
        </>
      </SingleContentLayout>
    </>
  );
};

type CommentDrawerProps = {
  isOpen: boolean;

  onClose: () => void;
};
const CommentDrawer: React.FC<CommentDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} size={"lg"}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex width={"100%"} align={"center"}>
              <Text mr={"5"}> comments</Text>
              <Text fontSize={"sm"}> 200</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDir={"column"}>
              <Divider />
              <Input placeholder={"comment"} />
              <Comments />
              <Comments />
              <Comments />
            </Flex>
          </DrawerBody>

          <DrawerFooter py={"10"}>
            <Button variant={"unstyled"} onClick={onClose}>
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Post;
