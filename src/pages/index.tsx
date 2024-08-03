import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomeProjectCmp from "@/components/HomeProjectCmp";
import BlogItemCmp from "@/components/BlogItemCmp";
import ImageList from "@/images.json";
import FooterCmp from "@/components/FooterCmp";
import SectionAnimation from "@/components/SectionAnimation";
import { useRouter } from "next/router";
import BounceAnimation from "@/components/BounceAnimation";
import { BlogArticles } from "@/static/blog";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.8 });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <Head>
        <title>First Synergi Homes</title>
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
        <motion.section
          ref={navRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            bgImage={{
              lg: ImageList.home.hero,
              base: ImageList.home.heroMobile,
            }}
            height={{ lg: "900px", base: "732px" }}
            bgPosition={"center"}
            bgSize={"cover"}
          >
            <Box color={"primary"} className="section-container" pt={"206px"}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
              >
                <Heading className="heading-1" maxW={"889px"}>
                  Building <span style={{ color: "#C0972D" }}>exceptional</span>{" "}
                  homes and a lifestyle of opulence.
                </Heading>
              </motion.div>
              <Button
                display={{ lg: "none" }}
                label="Build with us"
                mt={"50px"}
                onClick={() => router.push("/build-with-us")}
              />
            </Box>
          </Box>
        </motion.section>
        <section className="section-container">
          <SectionAnimation>
            <Box py={{ md: "108px", base: "32px" }}>
              <Flex
                flexDirection={{ md: "row", base: "column" }}
                justify={"space-between"}
                gap={{ base: "32px", md: 0 }}
              >
                <Box w={{ md: "55%", base: "full" }} maxW={"655px"}>
                  <Text
                    fontSize={{ md: "20px", base: "16px" }}
                    fontWeight={600}
                    letterSpacing={"4px"}
                    textTransform={"uppercase"}
                    color={"secondary"}
                  >
                    our goal
                  </Text>
                  <Heading
                    color={"primary"}
                    fontSize={{ md: "56px", base: "32px" }}
                    fontWeight={700}
                    lineHeight={"100%"}
                    letterSpacing={{ lg: "-1.12px", base: "-0.64px" }}
                    my={{ md: "21px", base: "16px" }}
                  >
                    Building for maximum results
                  </Heading>
                  <Text
                    color={"primary"}
                    fontSize={{ md: "20px", base: "16px" }}
                    fontWeight={400}
                    lineHeight={"130%"}
                  >
                    First Synergi Homes is a captivating capsule of innovation,
                    energy, and symbiosis with its surroundings.
                  </Text>
                </Box>
                <Flex
                  flexDirection={{ md: "column", base: "row" }}
                  color={"primary"}
                  w={{ md: "45%", base: "full" }}
                  textAlign={{ md: "right", base: "left" }}
                >
                  <Box>
                    <Heading
                      fontSize={{ md: "64px", base: "32px" }}
                      fontWeight={400}
                    >
                      100+
                    </Heading>
                    <Text
                      fontSize={{ md: "30px", base: "18px" }}
                      fontWeight={700}
                      lineHeight={"100%"}
                    >
                      Homes
                    </Text>
                  </Box>
                  <Box
                    mt={{ md: "40px", base: 0 }}
                    ml={{ base: "auto", md: 0 }}
                  >
                    <Heading
                      fontSize={{ md: "64px", base: "32px" }}
                      fontWeight={400}
                    >
                      15+
                    </Heading>
                    <Text
                      fontSize={{ md: "30px", base: "18px" }}
                      fontWeight={700}
                      lineHeight={"100%"}
                    >
                      Years of excellence
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Flex
                color={"secondary"}
                alignItems={"center"}
                gap={"4px"}
                mt={{ md: "50px", base: "32px" }}
                fontWeight={600}
                cursor={"pointer"}
                onClick={() => router.push("/about-us")}
              >
                <Text>About First Synergi homes</Text>
                <ArrowForwardIcon />
              </Flex>
              <Box
                borderRadius={"10px"}
                aspectRatio={344 / 229}
                bg={"gray"}
                mt={{ md: "86px", base: "66px" }}
              >
                <iframe
                  src="https://drive.google.com/file/d/1me4bd_CD30S8cBLXuMc8jvvp4FMQLYSp/preview"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                  allow="autoplay"
                ></iframe>
              </Box>
            </Box>
          </SectionAnimation>
        </section>
        <section style={{ backgroundColor: "#002E3B" }}>
          <SectionAnimation>
            <Box
              className="section-container"
              color={"white"}
              py={{ md: "98px", base: "72px" }}
            >
              <Text
                fontSize={{ md: "20px", base: "16px" }}
                fontWeight={600}
                letterSpacing={"4px"}
                color={"secondary"}
                textTransform={"uppercase"}
              >
                Projects
              </Text>
              <Flex
                alignItems={"flex-start"}
                flexDirection={{ md: "row", base: "column" }}
                mt={{ md: "21px", base: "16px" }}
                justify={"space-between"}
                gap={{ base: "32px", md: 0 }}
              >
                <Stack spacing={"21px"} maxW={"665px"}>
                  <Heading
                    fontSize={{ md: "56px", base: "32px" }}
                    letterSpacing={"-2.24px"}
                  >
                    Developing with the future in mind
                  </Heading>
                  <Text
                    fontSize={{ md: "20px", base: "16px" }}
                    fontWeight={400}
                    lineHeight={"130%"}
                  >
                    We bring beautiful homes to market 3x faster.
                  </Text>
                </Stack>
                <Flex
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={() => router.push("/projects")}
                  color={"secondary"}
                  gap={"4px"}
                >
                  <Text
                    fontSize={{ md: "20px", base: "18px" }}
                    fontWeight={600}
                  >
                    View featured projects
                  </Text>
                  <ArrowForwardIcon />
                </Flex>
              </Flex>
              <Flex
                className="no-scrollbar"
                flexDirection={{ lg: "row", base: "column" }}
                gap={{ lg: "64px", base: "40px" }}
                mt={"102px"}
                position={"relative"}
                overflow={"scroll"}
              >
                {ImageList.home.projects.map((obj, index) => (
                  <Link key={index} href={`/projects/${obj.id}`}>
                    <HomeProjectCmp key={index} data={obj} />
                  </Link>
                ))}
              </Flex>
              <Box textAlign={"center"}>
                <Heading
                  color={"secondary"}
                  fontSize={{ lg: "56px", base: "32px" }}
                  letterSpacing={"-2.24px"}
                >
                  We are trusted
                </Heading>
                <Text
                  fontSize={{ md: "20px", base: "16px" }}
                  fontWeight={400}
                  lineHeight={"130%"}
                  mt={"16px"}
                >
                  Since inception we’ve been working with amazing clients to
                  create meaningful
                  <br /> impact and compelling experiences
                </Text>
                <BounceAnimation>
                  <Flex
                    alignItems={"center"}
                    width={"full"}
                    maxW={isMobile ? "338px" : "full"}
                    mx={"auto"}
                    mt={"40px"}
                    gap={isMobile ? "34px" : "64px"}
                    justify={isMobile ? "space-between" : "center"}
                    position={"relative"}
                  >
                    <Image
                      src={ImageList.home.clients[0]}
                      alt="client-logo"
                      width={isMobile ? 110 : 202}
                      height={isMobile ? 56 : 104}
                      style={{
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                    />
                    <Image
                      src={ImageList.home.clients[1]}
                      alt="client-logo"
                      width={isMobile ? 64 : 118}
                      height={isMobile ? 46 : 85}
                      style={{
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                    />
                    <Image
                      src={ImageList.home.clients[2]}
                      alt="client-logo"
                      width={isMobile ? 101 : 186}
                      height={isMobile ? 49 : 81}
                      style={{
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                    />
                  </Flex>
                </BounceAnimation>
              </Box>
            </Box>
          </SectionAnimation>
        </section>
        <section className="section-container">
          <SectionAnimation>
            <Box py={{ lg: "96px", base: "45px" }}>
              <Flex
                color={"primary"}
                alignItems={"flex-start"}
                justify={"space-between"}
                flexDirection={{ lg: "row", base: "column" }}
              >
                <Box>
                  <Heading
                    fontSize={{ lg: "56px", base: "32px" }}
                    letterSpacing={"-2.24px"}
                  >
                    First insights
                  </Heading>
                  <Text
                    fontSize={{ md: "20px", base: "16px" }}
                    lineHeight={"130%"}
                    mt={{ lg: "16px", base: "8px" }}
                  >
                    Stay informed with our latest insights
                  </Text>
                </Box>
                <Link href={"/blog"}>
                  <Flex
                    display={{ base: "none", lg: "flex" }}
                    color={"primary"}
                    alignItems={"center"}
                    gap={"4px"}
                  >
                    <Text>View all</Text>
                    <ArrowForwardIcon />
                  </Flex>
                </Link>
              </Flex>
              <Grid
                gridGap={"20px"}
                mt={{ lg: "48px", base: "40px" }}
                gridTemplateColumns={{
                  xl: "repeat(3, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                {BlogArticles.blog.map((item) => (
                  <GridItem
                    key={item.id}
                    onClick={() => router.push(`/blog/${item.id}`)}
                  >
                    <BlogItemCmp
                      tag={item.tag}
                      title={item.title}
                      thumbnail={item.thumbnail}
                    />
                  </GridItem>
                ))}
              </Grid>
              <Link href={"/blog"}>
                <Flex
                  color={"primary"}
                  display={{ base: "flex", lg: "none" }}
                  alignItems={"center"}
                  gap={"4px"}
                  mt={"16px"}
                >
                  <Text>View all</Text>
                  <ArrowForwardIcon />
                </Flex>
              </Link>
            </Box>
          </SectionAnimation>
        </section>
      </main>
      <FooterCmp />
    </>
  );
}
