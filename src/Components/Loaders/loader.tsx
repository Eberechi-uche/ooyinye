import {
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

export const ArticleLoaders: React.FC = () => {
  return (
    <>
      <Flex flexDir={"column"} px={"4"} my={"4"}>
        <Flex flexDir={"column"}>
          <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
        </Flex>
        <Flex align={"center"} my={"2"}>
          <SkeletonCircle size={"7"} />
        </Flex>
      </Flex>
    </>
  );
};
export const PageContent: React.FC = () => {
  return (
    <>
      <Flex flexDir={"column"} px={"1"} my={"4"}>
        <Skeleton height={"70vh"} />

        <Flex flexDir={"column"}>
          <SkeletonText mt="4" noOfLines={10} spacing="4" skeletonHeight="2" />
        </Flex>
      </Flex>
    </>
  );
};
export const ProfileContentLoadState: React.FC = () => {
  return (
    <>
      <Flex flexDir={"column"} px={"1"} my={"4"}>
        <SkeletonCircle size={"10"} my={"2"} />
        <Skeleton height={"10vh"} />
        <Flex flexDir={"column"} my={"5"}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Flex>
      </Flex>
    </>
  );
};

export const CommentsLoader: React.FC = () => {
  return (
    <>
      <Flex flexDir={"column"}>
        <SkeletonCircle size={"7"} my={"1"} />
        <Skeleton height="10px" my={"1"} />
        <Skeleton height="10px" my={"1"} />
      </Flex>
    </>
  );
};
export const UserSnippetLoader: React.FC = () => {
  return (
    <>
      <Flex width={"100%"}>
        <SkeletonCircle
          size={"9"}
          my={"1"}
          display={"inline-flex"}
          fitContent={true}
        />

        <Skeleton height="10px" my={"1"} />
        <Skeleton height="10px" my={"1"} />
      </Flex>
    </>
  );
};
