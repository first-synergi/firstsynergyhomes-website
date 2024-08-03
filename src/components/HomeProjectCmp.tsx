import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

interface ICmpType {
  data?: any;
  other?: boolean;
  index?: number;
}
const HomeProjectCmp = ({ data, other = false, index }: ICmpType) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const content = document.getElementsByClassName("project_desc");
      if (content !== null || content !== undefined) {
        content &&
          (content[index ?? 0].innerHTML =
            (data?.desc as string) || (data?.summary as string));
      }
    }
  }, [data?.desc, data?.summary, index]);

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
        p={{ md: "28px", base: "20px" }}
        mx={{ base: "auto", lg: 0 }}
      >
        <Heading color={"secondary"} className="heading-4" fontWeight={700}>
          {data?.name || data?.projectName}
        </Heading>
        <Text
          color={"primary"}
          className="body-text-2 project_desc"
          mt={"14px"}
        ></Text>
      </Box>
    </Box>
  );
};

export default HomeProjectCmp;
