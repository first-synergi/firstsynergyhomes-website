import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BounceAnimation from "./BounceAnimation";

interface IProjectPic {
  status?: string;
  location?: string;
  projectName?: string;
  imgSrc?: string;
}
const ProjectPicCmp = ({
  status,
  location,
  projectName,
  imgSrc,
}: IProjectPic) => {
  return (
    <BounceAnimation>
      <Box
        bg={"gray"}
        bgImage={imgSrc}
        bgSize={"cover"}
        bgPosition={"top"}
        bgRepeat={"no-repeat"}
        borderRadius={"10px"}
        height={{ lg: "542px", base: "229px" }}
        w="full"
      >
        <Flex
          visibility={"hidden"}
          bg={
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00)0%, rgba(0, 0, 0, 0.60)57.2%)"
          }
          borderRadius={"10px"}
          px={{ lg: "55px" }}
          py={{ lg: "48px" }}
          h={"full"}
          w="full"
          flexDirection={"column"}
          _hover={{ visibility: "visible" }}
        >
          <Center
            borderRadius={"30px"}
            border={"1px solid #EFF1F6"}
            w="fit-content"
            h={{ lg: "52px", base: "20px" }}
            color={"primary"}
          >
            <Text className="body-text-2" textTransform={"capitalize"}>
              {status}
            </Text>
          </Center>
          <Box color={"primary"} mt="auto">
            <Text className="body-text-1">{location}</Text>
            <Heading className="blog-heading">{projectName}</Heading>
          </Box>
        </Flex>
      </Box>
    </BounceAnimation>
  );
};

export default ProjectPicCmp;
