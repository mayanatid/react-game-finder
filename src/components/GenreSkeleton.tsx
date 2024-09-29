import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText />
    </HStack>
  );
};

export default GenreSkeleton;
