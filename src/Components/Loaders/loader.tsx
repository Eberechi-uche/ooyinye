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
        <Flex align={"center"}>
          <SkeletonCircle size={"7"} />
        </Flex>

        <Flex flexDir={"column"}>
          <Skeleton height="10px" my={"1"} />
          <Skeleton height="10px" my={"1"} />
          <Skeleton height="10px" my={"1"} />
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
          <Skeleton height="30vh" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
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
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
          <Skeleton height="10px" my={"2"} />
        </Flex>
      </Flex>
    </>
  );
};

export const commentsLoader: React.FC = () => {
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
