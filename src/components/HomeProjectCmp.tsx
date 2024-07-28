import { Box } from "@chakra-ui/react";
import React from "react";

const HomeProjectCmp = ({ other = false }) => {
  return (
    <Box w="90%" position={"relative"} flexShrink={0}>
      <Box borderRadius={"10px"} w="full" height={"597px"} bg={"gray"}></Box>
      <Box
        w="620px"
        h={other ? "188px" : "323px"}
        bg={"steelblue"}
        position={"relative"}
        top={"-148px"}
        left={"40px"}
        p={"36px"}
      ></Box>
    </Box>
  );
};

export default HomeProjectCmp;
