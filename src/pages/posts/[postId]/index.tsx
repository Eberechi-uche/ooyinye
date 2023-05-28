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
import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import BlogNavFooter from "@/Components/MobileFooter/BlogNavFooter";

const Post: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SingleContentLayout>
        <>
          <BlogNavFooter onOpen={onOpen} />
          <BlogPostHeader />
          <Flex minH={"100vh"} flexDir={"column"} width={"100%"}>
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
