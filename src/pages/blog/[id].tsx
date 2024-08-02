import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Center,
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
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
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

const BlogDetails = () => {
  const router = useRouter();
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.8 });
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const { id } = router.query;
  const blogPost = BlogArticles.blog?.find((el) => el.id === id);
  const otherPosts = BlogArticles.blog?.filter((el) => el.id !== id);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const content = document.getElementById("blog-content");
      if (content !== null || content !== undefined) {
        content && (content.innerHTML = blogPost?.content as string);
      }
    }
  }, [blogPost?.content, id]);

  return (
    <>
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
            py={{ lg: "250px", base: "150px" }}
          >
            <Link href={"/blog"}>
              <Flex
                alignItems={"center"}
                gap={"8px"}
                color={"secondary"}
                cursor={"pointer"}
              >
                <ArrowBackIcon />
                <Text>Back to blog</Text>
              </Flex>
            </Link>
            <Heading className="blog-heading" mt={"20px"}>
              {blogPost?.title}
            </Heading>
            {/* <Text className="body-text-2" mt={"21px"}>
              desc
            </Text> */}
            <Box
              bg={"gray"}
              bgImage={{ lg: blogPost?.headerImg, base: blogPost?.thumbnail }}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              bgPosition={"center"}
              borderRadius={"10px"}
              h={{ lg: "542px", base: "228px" }}
              w="full"
              mt={"20px"}
            ></Box>
            <Flex
              flexDirection={{ lg: "row", base: "column-reverse" }}
              mt={{ lg: "40px", base: "32px" }}
              gap={"50px"}
              justify={"space-between"}
            >
              <Box w="full" maxW={"163px"}>
                <Text className="blog-text" fontWeight={600}>
                  Share this article
                </Text>
              </Box>
              <Box
                id="blog-content"
                className="blog-text"
                w="full"
                maxW={"776px"}
              >
                {blogPost?.content}
              </Box>
            </Flex>
            <Box w="full" mt={{ lg: "80px", base: "50px" }}>
              <Heading
                color={"primary"}
                fontSize={{ lg: "32px", base: "24px" }}
              >
                Read these next
              </Heading>
            </Box>
            <Grid
              gridGap={"20px"}
              mt={{ lg: "48px", base: "35px" }}
              gridTemplateColumns={{
                xl: "repeat(3, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
            >
              {otherPosts?.map((item) => (
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
          </Box>
        </section>
      </main>
      <FooterCmp />
    </>
  );
};

export default BlogDetails;
