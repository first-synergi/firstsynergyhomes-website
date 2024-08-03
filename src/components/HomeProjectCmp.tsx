import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ICmpType {
  data?: any;
  other?: boolean;
}
const HomeProjectCmp = ({ data, other = false }: ICmpType) => {
  return (
    <Box w={{ lg: "90%", base: "100%" }} position={"relative"} flexShrink={0}>
      <Box
        borderRadius={"10px"}
        w="full"
        height={{ lg: "597px", base: "auto" }}
        aspectRatio={{ base: 343 / 236 }}
        bg={"gray"}
        bgImage={data?.src || data?.imgSrc}
        bgSize={"cover"}
      ></Box>
      <Box
        w={{ lg: "620px", base: "95%" }}
        // h={{ lg: other ? "188px" : "323px", base: "auto" }}
        bg={"white"}
        position={"relative"}
        top={{ lg: "-148px", base: "-50px" }}
        left={{ lg: "40px", base: 0 }}
        p={{ md: "36px", base: "20px" }}
        mx={{ base: "auto", lg: 0 }}
      >
        <Heading
          color={"secondary"}
          fontSize={{ lg: "56px", base: "24px" }}
          fontWeight={700}
        >
          {data?.name || data?.projectName}
        </Heading>
        <Flex alignItems={"center"} color={"primary"} gap={"8px"} mt={"20px"}>
          <Text>Learn more</Text>
          <ArrowForwardIcon />
        </Flex>
        {/* <Text
          color={"primary"}
          fontSize={{ lg: "20px", base: "16px" }}
          fontWeight={400}
          lineHeight={"130%"}
          mt={"14px"}
        >
          {data?.desc}
        </Text> */}
      </Box>
    </Box>
  );
};

export default HomeProjectCmp;
