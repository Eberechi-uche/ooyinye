import { Flex, Text, Image, Divider, Textarea, Button } from "@chakra-ui/react";
import ProfileCardMini from "../Card/ProfileCardMini";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/ClientApp";
import { useEffect, useState } from "react";
import UserAuth from "../Auth.component/UserAuth";
import { useArticleData } from "@/Hooks/Blog/useArticleData";

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
            <>
              <Text fontWeight={"900"}>No comments yet</Text>
            </>
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
        border={"1px solid"}
        borderColor={"gray.200"}
        borderRadius={"5px"}
        h={"20vh"}
      >
        <Flex width={"100%"} my={"2"} px={"2"}>
          <Image
            alt={"profile-Image"}
            src={props.profileImage}
            boxSize={"30"}
            borderRadius={"full"}
            objectFit={"cover"}
          />
          <Text fontWeight={"600"} ml={"2"}>
            {props.profileDN}
          </Text>
        </Flex>
        <Textarea
          value={props.value}
          onChange={handleChange}
          fontSize={"sm"}
          placeholder={"comment..."}
          fontWeight={"600"}
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
          variant={"outline"}
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
