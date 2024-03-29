import {
  Flex,
  Text,
  Image,
  Divider,
  Textarea,
  Button,
  Icon,
} from "@chakra-ui/react";
import ProfileCardMini from "../Card/ProfileCardMini";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import { useEffect, useState } from "react";
import UserAuth from "../Auth.component/UserAuth";
import { useArticleData } from "@/Hooks/Blog/useArticleData";
import { RiChat1Line } from "react-icons/ri";
import { PiChatTeardropTextBold } from "react-icons/pi";

export type CommentData = {
  text: string;
  authorId: string;
  authorImageUrl: string;
  authorDN: string;
  commentId?: string;
};

type CommentsComponentProps = {
  onClose: () => void;
  articleID: string;
};
const CommentsComponent: React.FC<CommentsComponentProps> = (props) => {
  const { addComment, getArticleComment, loading } = useArticleData();
  const [user] = useAuthState(auth);
  const [allComments, setAllComments] = useState<CommentData[]>([]);
  const userId = `@${user?.email?.split("@")[0]}`;
  const [userComment, setUserComment] = useState("");
  const handleSend = () => {
    const comment: CommentData = {
      authorDN: user?.displayName!,
      authorId: userId!,
      authorImageUrl: user?.photoURL!,
      text: userComment,
    };
    addComment(props.articleID, comment);
    setUserComment("");
    setAllComments((prev) => [...prev, comment]);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = await getArticleComment(props.articleID);
      if (fetchedComments) {
        setAllComments(fetchedComments);
      }
    };
    fetchComments();
  }, []);

  return (
    <>
      <Flex mt={"1"} flexDir={"column"} px={"1"} width={"100%"}>
        <Flex justify={"flex-start"} flexDir={"column"} mb={"5"}>
          {user ? (
            <CommentHeader
              value={userComment}
              setValue={setUserComment}
              handleSend={handleSend}
              profileDN={user.displayName!}
              profileImage={user.photoURL!}
              loading={loading}
            />
          ) : (
            <>
              <Flex
                width={{ base: "100%", md: "60%" }}
                flexDir={"column"}
                p={"4"}
                alignSelf={"center"}
                onClick={props.onClose}
              >
                <Text textAlign={"center"} mb={"2"}>
                  Login to Join the conversation
                </Text>
                <UserAuth />
              </Flex>
            </>
          )}
        </Flex>
        <Flex flexDir={"column"} mt={"5"}>
          {allComments &&
            allComments.map((comment, index) => (
              <Comment
                authorDN={comment.authorDN}
                authorId={comment.authorId}
                authorImageUrl={comment.authorImageUrl}
                text={comment.text}
                key={index}
              />
            ))}
          {!allComments.length && (
            <Flex width={"100%"} flexDir={"column"} align={"center"}>
              <Text fontWeight={"900"}>No comments yet</Text>
              <Icon as={PiChatTeardropTextBold} fontSize={"25vh"} />
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};

const Comment: React.FC<CommentData> = (props) => {
  return (
    <>
      <Flex mt={"1"} flexDir={"column"} px={"1"} width={"100%"}>
        <ProfileCardMini
          displayName={props.authorDN}
          imageUrl={props.authorImageUrl}
          profileId={props.authorId}
        />
        <Flex width={"100%"}>
          <Flex mr={"5"} ml={"3"} align={"center"}>
            <Divider orientation={"vertical"} />
          </Flex>
          <Flex>
            <Text fontSize={"sm"}>{props.text}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
type CommentHeaderProps = {
  value: string;
  setValue: (e: string) => void;
  handleSend: () => void;
  profileDN: string;
  profileImage: string;
  loading: boolean;
};
const CommentHeader: React.FC<CommentHeaderProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setValue(e.target.value);
  };
  return (
    <>
      <Flex
        flexDir={"column"}
        border={"1.5px solid"}
        borderColor={"gray.200"}
        borderRadius={"16px"}
        maxW={"100%"}
        px={"2"}
      >
        <Flex width={"100%"} my={"2"}>
          <Image
            alt={"profile-Image"}
            src={props.profileImage}
            boxSize={"30"}
            borderRadius={"full"}
            objectFit={"cover"}
          />
          {/* <Text fontWeight={"600"} ml={"2"}>
            {props.profileDN}
          </Text> */}
        </Flex>
        <Textarea
          px={"0"}
          value={props.value}
          onChange={handleChange}
          placeholder={"comment..."}
          fontWeight={"400"}
          _placeholder={{
            fontSize: "xs",
            fontWeight: "600",
          }}
          border={"none"}
          _focus={{ boxShadow: "none" }}
        />
      </Flex>
      <Flex my={"1"} justify={"flex-end"}>
        <Button
          variant={"brandPrimary"}
          isDisabled={props.value.length <= 0}
          onClick={props.handleSend}
          isLoading={props.loading}
        >
          send
        </Button>
      </Flex>
    </>
  );
};
export default CommentsComponent;
