import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

export const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height={"90px"} borderRadius={"lg"} />
      <Skeleton height={"90px"} />

      <Skeleton height={"90px"} />

      <Skeleton height={"90px"} />

      <Skeleton height={"90px"} />
      <Skeleton height={"90px"} />
    </Stack>
  );
};
