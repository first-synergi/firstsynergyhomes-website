import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface IBlogData {
  title: string;
  thumbnail: string;
  tag?: string;
}

const BlogItemCmp = ({ title, thumbnail, tag = "company" }: IBlogData) => {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, bounce: 20 }}
      viewport={{ once: true }}
    >
      <Box cursor={"pointer"}>
        <Box
          borderRadius="16px"
          bg={"gray"}
          bgImage={thumbnail}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          bgPosition={"center"}
          h="307px"
        ></Box>
        <Stack spacing={"12px"} mt="24px">
          <Text
            fontSize={"12px"}
            fontWeight={500}
            lineHeight={"18px"}
            letterSpacing={"1.2px"}
            color={"secondary"}
            textTransform={"uppercase"}
          >
            {tag}
          </Text>
          <Heading
            color={"primary"}
            fontSize={"20px"}
            fontWeight={600}
            lineHeight={"110%"}
            letterSpacing={"-0.8px"}
          >
            {title}
          </Heading>
          {/* <Text
            color={"black"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"130%"}
          >
            The exceptional way to show your work, sell products and receive
            payments seamlessly
          </Text> */}
        </Stack>
      </Box>
    </motion.div>
  );
};

export default BlogItemCmp;
