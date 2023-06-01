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
  SimpleGrid,
} from "@chakra-ui/react";

import BlogPostHeader from "@/Components/Headers/BlogPost.Header";
import BlogParser from "@/Components/BlogParser/BlogParser";

import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import BlogNavFooter from "@/Components/MobileFooter/BlogNavFooter";
import PostcardLarge from "@/Components/Card/PostcardLarge";
import ProfileCardLarge from "@/Components/Card/ProfileCardLarge";
import UserAuth from "@/Components/Auth.component/UserAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import { User } from "firebase/auth";
import Comments from "@/Components/Comments/Comment";
import { useEffect, useState } from "react";
import {
  CommentsIcon,
  LikeIcon,
  ShareIcon,
  SupportIcon,
} from "@/Components/Icons/Icons";

const Post: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);

  return (
    <>
      <SingleContentLayout>
        <>
          <BlogNavFooter onOpen={onOpen} />
          <BlogPostHeader />
          <Image alt={"imageName"} src={"/blogsample.png"} />
          <Flex
            width={"100%"}
            align={"center"}
            justify={"space-between"}
            py={"2"}
            px={"5"}
            my={"5"}
            borderY={"1px solid"}
            borderColor={"gray.300"}
            pos={"sticky"}
            top={"20"}
            bg={"white"}
            zIndex={"10"}
            display={{ base: "none", md: "flex" }}
            cursor={"pointer"}
          >
            <CommentsIcon children={"(3 comments)"} onOpen={onOpen} />
            <ShareIcon children={"share"} />
            <LikeIcon children={"5 like(s)"} />
            <SupportIcon children={"support"} />
          </Flex>
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
          {isOpen && (
            <CommentDrawer onClose={onClose} isOpen={isOpen} user={user} />
          )}
        </>
      </SingleContentLayout>
    </>
  );
};

type CommentDrawerProps = {
  isOpen: boolean;
  user: User | null | undefined;

  onClose: () => void;
};
const CommentDrawer: React.FC<CommentDrawerProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement={window.innerWidth < 700 ? "bottom" : "right"}
        onClose={onClose}
        size={"sm"}
      >
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
              {user ? (
                <>
                  <Input placeholder={"comment"} />
                </>
              ) : (
                <>
                  <Flex
                    width={{ base: "100%", md: "60%" }}
                    flexDir={"column"}
                    p={"4"}
                    alignSelf={"center"}
                    onClick={onClose}
                  >
                    <Text textAlign={"center"} mb={"2"}>
                      Login to Join the conversation
                    </Text>
                    <UserAuth />
                  </Flex>
                </>
              )}

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
