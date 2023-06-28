import exploreAtom from "@/Atoms/ExploreAtom";
import { Topic } from "@/pages/explore";
import { Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  PiCheckCircleFill,
  PiArrowRightBold,
  PiPlusCircleBold,
} from "react-icons/pi";
import { useRecoilState } from "recoil";
import { FollowTopicIcon } from "../Icons/Icons";

const ExploreCard: React.FC<Topic> = (props) => {
  const [exploreTopic, setExploreTopic] = useRecoilState(exploreAtom);
  const route = useRouter();
  return (
    <>
      <Flex width={"100%"} flexDir={"column"} my={"4"} py={"3"}>
        <Image
          alt={"exloreT"}
          src={props.imageUrl}
          boxSize={"50"}
          objectFit={"cover"}
        />
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Text
            textTransform={"uppercase"}
            fontWeight={"900"}
            align={"center"}
            color={props.bgColor}
          >
            {props.id}
          </Text>
          <FollowTopicIcon {...props} size={"xl"} following={true} />
        </Flex>
        <Flex
          cursor={"pointer"}
          align={"flex-end"}
          flexWrap={"wrap"}
          onClick={() => {
            setExploreTopic({ ...props });
            route.push(`/explore/${props.id}`);
          }}
        >
          <Text noOfLines={2}>{props.desc}</Text>
          <Flex align={"center"} color={props.bgColor}>
            <Text>Articles</Text>

            <Icon as={PiArrowRightBold} mx={"4"} />
          </Flex>
        </Flex>
        <Divider my={"2"} />
      </Flex>
    </>
  );
};

export default ExploreCard;
