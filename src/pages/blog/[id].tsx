import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import {
  Box,
  Circle,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BlogItemCmp from "@/components/BlogItemCmp";
import FooterCmp from "@/components/FooterCmp";
import { useRouter } from "next/router";
import { BlogArticles } from "@/static/blog";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const BlogDetails = () => {
  const router = useRouter();
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.5 });
  console.log(isInView);
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

  const url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${id}`;
  const quote = `${blogPost?.title}`;

  return (
    <>
      <Head>
        <title>First Synergi Homes - Blog post</title>
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
            pt={{ lg: "250px", base: "150px" }}
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
          </Box>
        </section>
        <section className="section-container">
          <Flex
            color={"primary"}
            flexDirection={{ lg: "row", base: "column-reverse" }}
            mt={{ lg: "40px", base: "32px" }}
            gap={"50px"}
            justify={"space-between"}
          >
            <Box w="full" maxW={"163px"}>
              <Text className="blog-text" fontWeight={600}>
                Share this article
              </Text>
              <Flex gap={"12px"} mt={"12px"}>
                <TwitterShareButton url={url} title={quote}>
                  <Circle bg="secondary" size={"38px"}>
                    <Image
                      src={"/twitter-icon-white.png"}
                      alt="social-icon"
                      width={24}
                      height={24}
                    />
                  </Circle>
                </TwitterShareButton>
                <LinkedinShareButton url={url} title={quote}>
                  <Circle bg="secondary" size={"38px"}>
                    <Image
                      src={"/linked-in-icon-white.png"}
                      alt="social-icon"
                      width={24}
                      height={24}
                    />
                  </Circle>
                </LinkedinShareButton>
                <FacebookShareButton url={url} quote={quote}>
                  <Circle bg="secondary" size={"38px"}>
                    <Image
                      src={"/facebook-icon-white.png"}
                      alt="social-icon"
                      width={24}
                      height={24}
                    />
                  </Circle>
                </FacebookShareButton>
              </Flex>
            </Box>
            <Box
              id="blog-content"
              className="blog-text"
              w="full"
              maxW={"776px"}
              textAlign={"justify"}
            >
              {blogPost?.content}
            </Box>
          </Flex>
          <Box w="full" mt={{ lg: "80px", base: "50px" }}>
            <Heading color={"primary"} fontSize={{ lg: "32px", base: "24px" }}>
              Read these next
            </Heading>
          </Box>
          <Grid
            gridGap={"20px"}
            mt={{ lg: "48px", base: "35px" }}
            mb={{ lg: "150x", base: "100px" }}
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
                  date={item.date}
                />
              </GridItem>
            ))}
          </Grid>
        </section>
      </main>
      <FooterCmp />
    </>
  );
};

export default BlogDetails;
