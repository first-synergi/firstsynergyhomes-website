import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomeProjectCmp from "@/components/HomeProjectCmp";
import BlogItemCmp from "@/components/BlogItemCmp";
import FooterCmp from "@/components/FooterCmp";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProjectDetails } from "@/static/project";
import ProjectPicCmp from "@/components/ProjectPicCmp";

export default function Projects() {
  const router = useRouter();
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.4 });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const { id } = router.query;
  const project = ProjectDetails.projects?.find((el) => el.id === id);
  const projectIndex = ProjectDetails.projects?.findIndex((el) => el.id === id);
  const otherPosts = ProjectDetails.projects?.filter((el) => el.id !== id);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const content = document.getElementById("summary-text");
      if (content !== null || content !== undefined) {
        content && (content.innerHTML = project?.summary as string);
      }
    }
  }, [project?.summary, id]);

  return (
    <>
      <Head>
        <title>First Synergi Homes - Projects</title>
        <meta
          name="description"
          content="Building exceptional homes and a lifestyle of opulence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand-logo-gold.svg" />
      </Head>
      <main>
        <nav className="section-container">
          <Box
            display={{ lg: "block", base: "none" }}
            position={"absolute"}
            top={"40px"}
            w="full"
            left={0}
            px={"100px"}
            mx={"auto"}
            zIndex={2}
          >
            <Navbar />
          </Box>
          <Box
            display={{ lg: "block", base: "none" }}
            position={"fixed"}
            top={"40px"}
            w="full"
            left={0}
            px={"100px"}
            mx={"auto"}
            zIndex={2}
          >
            <Box
              display={isInView ? "none" : "block"}
              opacity={isInView ? 0 : 1}
              transition={"opacity .5s ease-in-out"}
              bg={"white"}
              boxShadow={"2px 2px 8px 0px rgba(0, 0, 0, 0.08)"}
              p="20px"
              borderRadius={"8px"}
            >
              <Navbar />
            </Box>
          </Box>
          <Box
            display={{ lg: "none", base: "block" }}
            position={"fixed"}
            top={"24px"}
            w="full"
            left={0}
            px={"16px"}
            zIndex={3}
          >
            <Box
              bg={"rgba(255, 255, 255, 0.98)"}
              boxShadow={"0px 12px 24px 6px rgba(153, 167, 177, 0.12)"}
              p="13px"
              borderRadius={"8px"}
            >
              <Navbar />
            </Box>
          </Box>
        </nav>
        <section ref={navRef}>
          <Box
            className="section-container"
            color={"primary"}
            pt={{ lg: "200px", base: "150px" }}
          >
            <Link href={"/projects"}>
              <Flex
                alignItems={"center"}
                gap={"8px"}
                color={"secondary"}
                cursor={"pointer"}
                fontWeight={600}
              >
                <ArrowBackIcon />
                <Text>Back to projects</Text>
              </Flex>
            </Link>
            <Flex
              alignItems={{ lg: "flex-start", base: "center" }}
              color={"primary"}
              gap={"16px"}
            >
              <Heading
                className="blog-heading"
                mt={"20px"}
                maxW={{ lg: "665px", base: "70%" }}
              >
                {project?.projectName}
              </Heading>
              <Center
                borderRadius={"30px"}
                border={"1px solid #002E3B"}
                p={{ lg: "16px", base: "8px" }}
                w="fit-content"
                h={{ lg: "52px", base: "fit-content" }}
                ml={"auto"}
              >
                <Text className="body-text-2" textTransform={"capitalize"}>
                  {isMobile
                    ? project?.status?.toLowerCase() === "completed"
                      ? "completed"
                      : "ongoing"
                    : project?.status}
                </Text>
              </Center>
            </Flex>
            <Box
              bg={"gray"}
              bgImage={project?.headerImg}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              bgPosition={"center"}
              borderRadius={"10px"}
              h={{ lg: "542px", base: "204px" }}
              w="full"
              mt={"20px"}
            ></Box>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              color={"primary"}
              mt={"56px"}
            >
              <Box maxW={"665px"}>
                <Heading className="heading">Summary</Heading>
                <Text
                  id="summary-text"
                  className="body-text-2"
                  mt={"21px"}
                ></Text>
              </Box>
              <Box
                color={"primary"}
                textAlign={{ lg: "right", base: "left" }}
                ml={{ lg: "auto", base: 0 }}
                mt={{ lg: 0, base: "24px" }}
              >
                <Box>
                  <Text
                    color={"rgba(0, 46, 59, 0.27)"}
                    fontSize={"16px"}
                    letterSpacing={"0.064"}
                    lineHeight={"100%"}
                    textTransform={"uppercase"}
                  >
                    LOCATION
                  </Text>
                  <Text className="body-text-2" mt={"8px"}>
                    {project?.location}
                  </Text>
                </Box>
                <Box mt={{ lg: "40px" }}>
                  <Text
                    color={"rgba(0, 46, 59, 0.27)"}
                    fontSize={"16px"}
                    letterSpacing={"0.064"}
                    lineHeight={"100%"}
                    textTransform={"uppercase"}
                    mt={"8px"}
                  >
                    {project?.status === "Completed"
                      ? "Year completed"
                      : "Proposed Completion Timeline"}
                  </Text>
                  <Text className="body-text-2" mt={"8px"}>
                    {project?.completionYear}
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </section>
        <section className="section-container">
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            gap={{ lg: "30px", base: "16px" }}
            overflow={"scroll"}
            className="no-scrollbar"
            mt={"30px"}
            overflowY={"clip"}
            height={{ lg: "700px", base: "auto" }}
          >
            {project?.otherImgs.map((img, idx) => (
              <Box key={idx} w="full" maxW={"765px"} flexShrink={0}>
                <ProjectPicCmp imgSrc={img} />
              </Box>
            ))}
          </Flex>
          <Flex
            gap={"16px"}
            alignItems={"center"}
            justify={"center"}
            my={{ lg: "157px", base: "100px" }}
          >
            {projectIndex > 0 && (
              <Button
                label={isMobile ? "Previous" : "See previous project"}
                width={{ lg: "fit-content", base: "120px" }}
                onClick={() =>
                  router.push(
                    `/projects/${
                      ProjectDetails.projects?.[projectIndex - 1]?.id
                    }`
                  )
                }
              />
            )}
            {projectIndex !== ProjectDetails.projects?.length - 1 && (
              <Button
                label={isMobile ? "Next" : "See next project"}
                width={{ lg: "fit-content", base: "120px" }}
                onClick={() =>
                  router.push(
                    `/projects/${
                      ProjectDetails.projects?.[projectIndex + 1]?.id
                    }`
                  )
                }
              />
            )}
          </Flex>
        </section>
      </main>
      <FooterCmp />
    </>
  );
}
