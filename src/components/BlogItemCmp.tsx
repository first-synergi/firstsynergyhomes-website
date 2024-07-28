import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BlogItemCmp = () => {
  return (
    <Box>
      <Box borderRadius="16px" bg={"gray"} h="307px"></Box>
      <Stack spacing={"12px"} mt="24px">
        <Text
          fontSize={"12px"}
          fontWeight={500}
          lineHeight={"18px"}
          letterSpacing={"1.2px"}
          color={"secondary"}
        >
          INNOVATION
        </Text>
        <Heading
          color={"primary"}
          fontSize={"20px"}
          fontWeight={600}
          lineHeight={"110%"}
          letterSpacing={"-0.8px"}
        >
          {`Introducing first Synergi home's latest feature - Twin
                    Towers.`}
        </Heading>
        <Text
          color={"black"}
          fontSize={"16px"}
          fontWeight={400}
          lineHeight={"130%"}
        >
          The exceptional way to show your work, sell products and receive
          payments seamlessly
        </Text>
      </Stack>
    </Box>
  );
};

export default BlogItemCmp;
