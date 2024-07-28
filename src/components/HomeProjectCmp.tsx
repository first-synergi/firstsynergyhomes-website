import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ICmpType {
  data?: any;
  other?: boolean;
}
const HomeProjectCmp = ({ data, other = false }: ICmpType) => {
  return (
    <Box w="90%" position={"relative"} flexShrink={0}>
      <Box
        borderRadius={"10px"}
        w="full"
        height={"597px"}
        bg={"gray"}
        bgImage={data?.src}
      ></Box>
      <Box
        w="620px"
        h={other ? "188px" : "323px"}
        bg={"white"}
        position={"relative"}
        top={"-148px"}
        left={"40px"}
        p={"36px"}
      >
        <Heading color={"secondary"} fontSize={"56px"} fontWeight={700}>
          {data?.name}
        </Heading>
        <Text
          color={"primary"}
          fontSize={"20px"}
          fontWeight={400}
          lineHeight={"130%"}
          mt={"14px"}
        >
          {data?.desc}
        </Text>
      </Box>
    </Box>
  );
};

export default HomeProjectCmp;
