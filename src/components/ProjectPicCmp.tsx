import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <BounceAnimation>
      <Box
        id={projectName}
        bg={"gray"}
        bgImage={imgSrc}
        bgSize={"cover"}
        bgPosition={"top"}
        bgRepeat={"no-repeat"}
        borderRadius={"10px"}
        height={{ lg: "542px", base: "229px" }}
        w="full"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {(show || isMobile) && (
          <Flex
            bg={
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00)0%, rgba(0, 0, 0, 0.60)57.2%)"
            }
            borderRadius={"10px"}
            px={{ lg: "55px", base: "24px" }}
            py={{ lg: "48px", base: "24px" }}
            h={"full"}
            w="full"
            flexDirection={"column"}
          >
            {status && (
              <Center
                borderRadius={"30px"}
                border={"1px solid #EFF1F6"}
                p={{ lg: "16px", base: "8px" }}
                w="fit-content"
                h={{ lg: "52px", base: "30px" }}
                color={"white"}
              >
                <Text className="body-text-2" textTransform={"capitalize"}>
                  {status}
                </Text>
              </Center>
            )}
            <Box color={"white"} mt="auto">
              <Text className="body-text-1">{location}</Text>
              <Heading className="blog-heading">{projectName}</Heading>
            </Box>
          </Flex>
        )}
      </Box>
    </BounceAnimation>
  );
};

export default ProjectPicCmp;
