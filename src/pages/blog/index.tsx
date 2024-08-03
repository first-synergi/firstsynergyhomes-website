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
import FooterCmp from "@/components/FooterCmp";
import { BlogArticles } from "@/static/blog";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.6 });
  return (
    <>
      <Head>
        <title>First Synergi Homes - Blog</title>
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
            pt={{ lg: "240px", base: "150px" }}
          >
            <Heading
              color={"primary"}
              className="heading-2"
              mb={{ lg: "32px", base: "20px" }}
            >
              First Synergi insights
            </Heading>
            <Box
              borderRadius={"10px"}
              h={{ lg: "607px", base: "307px" }}
              bg={"gray"}
              bgImage={{
                lg: BlogArticles.blog[0].headerImg,
                base: BlogArticles.blog[0].thumbnail,
              }}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              bgPosition={"center"}
            ></Box>
            <Box
              color={"primary"}
              mt={"24px"}
              onClick={() => router.push(`/blog/${BlogArticles.blog[0].id}`)}
            >
              <Text
                fontSize={"14px"}
                lineHeight={"16px"}
                fontWeight={500}
                letterSpacing={"1.4px"}
                color={"secondary"}
                textTransform={"uppercase"}
              >
                {BlogArticles.blog[0].tag}
              </Text>
              <Heading className="blog-heading" mt={"5px"}>
                {BlogArticles.blog[0].title}
              </Heading>
              {/* <Text
                fontSize={"20px"}
                fontWeight={400}
                lineHeight={"26px"}
                letterSpacing={"-0.2px"}
                mt={"12px"}
              >
                Meet the awesome individuals who have decided to show off their
                badass by creating their mind blowing First Synergi pages
              </Text> */}
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
              mt={"40px"}
              gridTemplateColumns={{
                xl: "repeat(3, 1fr)",
                lg: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)",
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
            {/* <Box w="fit-content" mx={"auto"} mt={"58px"}>
              <Button label="Load more" />
            </Box> */}
          </Box>
        </section>
      </main>
      <FooterCmp />
    </>
  );
};

export default Blog;
