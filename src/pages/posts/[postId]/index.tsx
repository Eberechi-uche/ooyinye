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
  Icon,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Comments from "@/Components/Comments/Comment";
import ContentLayout from "@/Components/Layout/Content.Layout";
import {
  IoChatbubbles,
  IoHeartOutline,
  IoShareSocial,
  IoBookmarks,
} from "react-icons/io5";
import BlogLHS from "@/Components/LeftContentComponent/Blog/BlogLHS";
import { RiShareForwardFill } from "react-icons/ri";
import BlogPostHeader from "@/Components/Headers/BlogPost.Header";
import BlogParser from "@/Components/BlogParser/BlogParser";
import PostCard from "@/Components/Card/PostCard";

const Post: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ContentLayout>
        <>
          <BlogPostHeader />
          <Flex minH={"100vh"} flexDir={"column"} width={"100%"}>
            <Flex
              width={{ base: "95%", md: "50%" }}
              justify={"space-between"}
              alignSelf={"center"}
              align={"center"}
              bg={"blue.100"}
              borderRadius={"5px"}
              position={"sticky"}
              px={"10%"}
              top={"10%"}
              display={{ base: "flex", lg: "none" }}
            >
              <Flex
                height={{ base: "50px", md: "80px" }}
                align={"center"}
                justify={"space-between"}
              >
                <Icon as={RiShareForwardFill} fontSize={"2xl"} mr={"5"} />
                <Icon as={IoBookmarks} fontSize={"2xl"} />
              </Flex>
              <Flex height={"50px"} align={"center"}>
                <Icon
                  as={IoChatbubbles}
                  mr={"7"}
                  fontSize={"2xl"}
                  onClick={onOpen}
                />
                <Icon as={IoHeartOutline} fontSize={"2xl"} />
              </Flex>
            </Flex>
            <BlogParser />
            <Flex flexDir={"column"} my={"10"} bg={"teal.200"} width={"100%"}>
              <Text fontWeight={"700"} mx={"4"}>
                More by John Doe
              </Text>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </Flex>
          </Flex>
          <CommentDrawer onClose={onClose} isOpen={isOpen} />
        </>
        <>
          <BlogLHS />
        </>
      </ContentLayout>
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
              {" "}
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Post;
