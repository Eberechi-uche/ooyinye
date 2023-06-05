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
  Avatar,
  AvatarGroup,
  Icon,
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
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";

const Post: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);
  const { authorId, articleSlug } = useRouter().query;

  return (
    <>
      <SingleContentLayout>
        <Flex pos={"relative"} flexDir={"column"} width={"100%"}>
          <BlogNavFooter onOpen={onOpen} />
          <BlogPostHeader />
          <Image alt={"imageName"} src={"/blogsample.png"} />
          <Flex
            width={"100%"}
            align={"center"}
            justify={"space-between"}
            py={"2"}
            px={"5"}
            top={"0"}
            pos={"sticky"}
            bg={"white"}
            zIndex={"15"}
            display={{ base: "none", md: "flex" }}
            cursor={"pointer"}
          >
            <CommentsIcon value={"(3 comments)"} onOpen={onOpen} />
            <ShareIcon value={"share"} />
            <LikeIcon value={"5 like(s)"} />
            <SupportIcon value={"support"} />
          </Flex>
          <Flex minH={"100vh"} flexDir={"column"} width={"100%"}>
            <BlogParser />
            <Divider
              width={"20%"}
              colorScheme="blackAlpha"
              border={"1px solid"}
              alignSelf={"center"}
            />

            <Flex
              fontSize={"xs"}
              align={"center"}
              width={"100%"}
              p={"5"}
              justify={"center"}
            >
              <AvatarGroup
                max={6}
                color={"black"}
                size={{ base: "sm", md: "md" }}
              >
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
              </AvatarGroup>
              <Icon as={BsArrowRight} mx={"5"} />
              <Text color={"red.500"} fontWeight={"700"}>
                likes
              </Text>
            </Flex>

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
            <Flex flexDir={"column"} width={"100%"} align={"center"} pb={"10"}>
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
        </Flex>
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
