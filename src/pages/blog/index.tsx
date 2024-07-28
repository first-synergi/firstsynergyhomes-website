import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { ArrowForwardIcon, CalendarIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomeProjectCmp from "@/components/HomeProjectCmp";
import BlogItemCmp from "@/components/BlogItemCmp";

const Blog = () => {
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.6 });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="section-container">
          <Box
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
              //   opacity={isInView ? 0 : 1}
              transition={"opacity .5s ease-in-out"}
              bg={"white"}
              boxShadow={"2px 2px 8px 0px rgba(0, 0, 0, 0.08)"}
              p="20px"
              borderRadius={"8px"}
            >
              <Navbar />
            </Box>
          </Box>
        </nav>
        <section ref={navRef}>
          <Box className="section-container" pt={"240px"}>
            <Box borderRadius={"10px"} h="607px" bg={"gray"}></Box>
            <Box color={"primary"} mt={"24px"}>
              <Text
                fontSize={"14px"}
                lineHeight={"16px"}
                fontWeight={500}
                letterSpacing={"1.4px"}
                color={"secondary"}
              >
                COMPANY
              </Text>
              <Heading
                fontSize={"32px"}
                lineHeight={"48px"}
                letterSpacing={"-1.5px"}
                mt={"5px"}
              >
                {`Introducing first Synergi home's latest feature - Twin Towers.`}
              </Heading>
              <Text
                fontSize={"20px"}
                fontWeight={400}
                lineHeight={"26px"}
                letterSpacing={"-0.2px"}
                mt={"12px"}
              >
                Meet the awesome individuals who have decided to show off their
                badass by creating their mind blowing First Synergi pages
              </Text>
              <Flex alignItems={"center"} gap={"4px"} mt={"16px"}>
                <CalendarIcon color={"secondary"} />
                <Text
                  fontSize={"14px"}
                  lineHeight={"16px"}
                  fontWeight={500}
                  letterSpacing={"1.4px"}
                  color={"secondary"}
                >
                  Jun 01, 2022
                </Text>
              </Flex>
            </Box>
          </Box>
        </section>
        <section className="section-container">
          <Box mt={"58px"} pb={"108px"}>
            <Grid
              gridGap={"30px"}
              gridTemplateColumns={"repeat(3, 1fr)"}
              mt={"40px"}
            >
              <GridItem>
                <BlogItemCmp />
              </GridItem>
              <GridItem>
                <BlogItemCmp />
              </GridItem>
              <GridItem>
                <BlogItemCmp />
              </GridItem>
              <GridItem>
                <BlogItemCmp />
              </GridItem>
            </Grid>
            <Box w="fit-content" mx={"auto"} mt={"58px"}>
              <Button label="Load more" />
            </Box>
          </Box>
        </section>
      </main>
      <footer style={{ backgroundColor: "#002E3B" }}>
        <Box className="section-container" pt={"80px"} pb={"96px"} w="100%">
          <Heading
            textAlign={"center"}
            color={"secondary"}
            fontSize={"56px"}
            lineHeight={"100%"}
            letterSpacing={"-2.24px"}
          >
            Stay informed of
            <br /> our developments
          </Heading>
          <Box maxW={"492px"} mx={"auto"} mt={"59px"}>
            <Input
              borderColor={"white"}
              color={"white"}
              variant={"flushed"}
              placeholder="add your email"
              textAlign={"center"}
              fontSize={"32px"}
              fontWeight={400}
              fontFamily={"body"}
              pb={"22px"}
              h={"54px"}
            />
            <Box mx={"auto"} w="fit-content" mt={"44px"}>
              <Button
                label="Join our mailing list"
                border={"1px solid"}
                borderColor={"secondary"}
                _hover={{ color: "white", bgColor: "secondary" }}
                color={"secondary"}
                bg={"none"}
                transition={"background .5s linear"}
              />
            </Box>
          </Box>
          <Box pt={"76px"}>
            <Box
              w="100%"
              pb={"17.1px"}
              borderBottom={"1px solid rgba(225, 225, 225, 0.1)"}
            >
              <Image
                src={"/brand-logo-colored.svg"}
                alt="brand-logo"
                width={128}
                height={48.8}
              />
            </Box>
            <Flex color={"white"} mt={"15px"} justify={"space-between"}>
              <Stack spacing={"16px"} fontSize={"18px"}>
                <Text>
                  17 Emma Abimbola Cole Street,
                  <br /> Lekki Scheme 1, Lagos – Nigeria.{" "}
                </Text>
                <Text>+(234) 081-2268-7371</Text>
                <Text>info@firstsynergihomes.com</Text>
              </Stack>
              <Flex gap={"40px"} fontSize={"18px"} fontWeight={600}>
                <Text>Projects</Text>
                <Text>About us</Text>
                <Text>Blog</Text>
              </Flex>
            </Flex>
            <Flex mt={"54px"} justify={"space-between"}>
              <Flex color={"white"} fontSize={"18px"} gap={"40px"}>
                <Text>Terms & Conditions</Text>
                <Text>Privacy Policy</Text>
              </Flex>
              <Image
                src={"/socials.svg"}
                alt="brand-logo"
                width={133}
                height={22}
              />
            </Flex>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Blog;
