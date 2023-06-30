import {
  AvatarGroup,
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import UserInfoCard from "./UserInfoCard";

export type LikedUserDetails = {
  authorId: string;
  authorDN: string;
  authorImageUrl: string;
};

type LikeCardProps = {
  likesArray: LikedUserDetails[];
  totalLikes: number;
};
const LikesCard: React.FC<LikeCardProps> = ({ likesArray, totalLikes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <AvatarGroup
        size="sm"
        max={4}
        onClick={() => {
          onOpen();
        }}
      >
        {likesArray.map((like) => (
          <Avatar
            name={like.authorDN}
            src={like.authorImageUrl}
            key={like.authorId}
          />
        ))}
      </AvatarGroup>
      {isOpen && (
        <>
          <LikesModal
            isOpen={isOpen}
            onClose={onClose}
            likesArray={likesArray}
            totalLikes={totalLikes}
          />
        </>
      )}
    </>
  );
};
export default LikesCard;

type LikesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  likesArray: LikedUserDetails[];
  totalLikes: number;
};
const LikesModal: React.FC<LikesModalProps> = (props) => {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={{
          base: "full",
          lg: "3xl",
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"sm"}>
            {props.totalLikes} Like(s) from {props.likesArray.length} member(s)
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.likesArray.map((like) => (
              <UserInfoCard
                displayName={like.authorDN}
                imageUrl={like.authorImageUrl}
                profileId={like.authorId}
                key={like.authorId}
              />
            ))}
          </ModalBody>

          <ModalFooter>
            <Button size={"sm"} mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
