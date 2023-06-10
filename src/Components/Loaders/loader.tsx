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
          <SkeletonCircle size={"5"} />
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
