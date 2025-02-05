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
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import HomeProjectCmp from "@/components/HomeProjectCmp";
import BlogItemCmp from "@/components/BlogItemCmp";
import ImagesList from "@/images.json";
import FooterCmp from "@/components/FooterCmp";
import { TypeAnimation } from "react-type-animation";
import SectionAnimation from "@/components/SectionAnimation";
import ProjectPicCmp from "@/components/ProjectPicCmp";
import Link from "next/link";
import { ProjectDetails } from "@/static/project";

export default function Projects() {
  const navRef = useRef(null);
  const [more, setMore] = useState(0);
  const isInView = useInView(navRef, { once: false, amount: 0.6 });
  const completedProjects = ProjectDetails?.projects?.filter(
    (el) => el?.status === "Completed"
  );
  const moreProjects = completedProjects?.slice(4, 4 + more);

  const getColSpan = (idx: number) => {
    const base = 3;
    if (idx === 0 || idx === base || idx % 4 === 0 || idx % 4 === 3) {
      return 2;
    }

    return 1;
  };

  return (
    <>
      <Head>
        <title>First Synergi Homes - Projects</title>
        <meta
          name="description"
          content="Building exceptional homes and a lifestyle of opulence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand-favicon.svg" />
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
            pt={{ lg: "206px", base: "180px" }}
            height={{ lg: "400px", base: "300px" }}
          >
            <TypeAnimation
              sequence={[
                "We build with you in mind; Innovative and excellent living.",
                1000,
              ]}
              speed={10}
              style={{ color: "#002E3B" }}
              wrapper="h2"
              className="heading-2"
              repeat={1}
              cursor={false}
            />
          </Box>
          <Box
            h={{ lg: "444px", base: "236px" }}
            bg={"gray"}
            bgImage={ImagesList.projects.hero}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            mt={{ lg: "62px", base: "32px" }}
          />
        </section>
        <section className="section-container">
          <SectionAnimation>
            <Box pt={"100px"} pb={"108px"}>
              <Box w={{ lg: "55%", base: "full" }} maxW={"655px"}>
                <Text className="body-text-1" color={"secondary"}>
                  Featured projects
                </Text>
                <Heading color={"primary"} className="heading-3" mt={"21px"}>
                  Excellence and comfort is what we build for you
                </Heading>
              </Box>
              <Grid
                gridGap={"30px"}
                gridTemplateColumns={{
                  lg: "repeat(3, 1fr)",
                  base: "repeat(1, 1fr)",
                }}
                mt={"40px"}
              >
                {ImagesList.projects.project_images.map((item, index) => (
                  <GridItem
                    key={index}
                    colSpan={{
                      lg: index === 0 || index === 3 ? 2 : 1,
                      base: 1,
                    }}
                  >
                    <Link key={item.id} href={`/projects/${item.id}`}>
                      <ProjectPicCmp
                        imgSrc={item.img}
                        location={item.location}
                        status={item.status}
                        projectName={item.projectName}
                      />
                    </Link>
                  </GridItem>
                ))}
                {more > 0 && (
                  <>
                    {moreProjects?.map((item, idx) => (
                      <GridItem
                        key={idx}
                        colSpan={{
                          lg: getColSpan(idx),
                          base: 1,
                        }}
                      >
                        <Link key={item.id} href={`/projects/${item.id}`}>
                          <ProjectPicCmp
                            imgSrc={item.headerImg}
                            location={item.location}
                            status={item.status}
                            projectName={item.projectName}
                          />
                        </Link>
                      </GridItem>
                    ))}
                  </>
                )}
              </Grid>
              <Box mx={"auto"} w="fit-content" mt={"63px"}>
                <Button
                  label={"Load more"}
                  onClick={() => {
                    if (more !== completedProjects.length) setMore(more + 4);
                  }}
                />
              </Box>
            </Box>
          </SectionAnimation>
        </section>
        <section>
          <SectionAnimation>
            <Box color={"primary"} className="section-container">
              <Text className="body-text-1" color={"secondary"}>
                ongoing projects
              </Text>

              <Heading className="heading-3" mt="21px">
                We never stop building
                <br /> communities
              </Heading>
              <Grid
                gridGap={"30px"}
                gridTemplateColumns={{
                  lg: "repeat(3, 1fr)",
                  base: "repeat(1, 1fr)",
                }}
                mt={"40px"}
                mb={"100px"}
              >
                {ImagesList.projects.ongoing_projects.map((item, index) => (
                  <GridItem
                    key={index}
                    colSpan={{
                      lg: index === 0 || index === 3 ? 2 : 1,
                      base: 1,
                    }}
                  >
                    <Link key={item.id} href={`/projects/${item.id}`}>
                      <ProjectPicCmp
                        imgSrc={item.imgSrc}
                        status={item.status}
                        projectName={item.projectName}
                      />
                    </Link>
                  </GridItem>
                ))}
              </Grid>
              {/* <Flex
                flexDirection={{ lg: "row", base: "column" }}
                className="no-scrollbar"
                gap={{ lg: "64px", base: "20px" }}
                mt={"40px"}
                position={"relative"}
                overflow={"scroll"}
              >
                {ImagesList.projects.ongoing_projects.map((item, index) => (
                  <Link key={index} href={`/projects/${item.id}`}>
                    <HomeProjectCmp
                      key={index}
                      data={item}
                      index={index}
                      other
                    />
                  </Link>
                ))}
              </Flex> */}
            </Box>
          </SectionAnimation>
        </section>
        {/* <section className="section-container">
          <SectionAnimation>
            <Box color={"primary"} pb={"100px"}>
              <Box>
                <Text className="body-text-1" textTransform={"uppercase"}>
                  More projects
                </Text>
                <Heading className="heading-3" mt={{ lg: "21px", base: "8px" }}>
                  See First Synergi Projects
                </Heading>
              </Box>

              <Grid
                gridGap={"30px"}
                gridTemplateColumns={{
                  lg: "repeat(3, 1fr)",
                  base: "repeat(1, 1fr)",
                }}
                mt={"40px"}
              >
                {ImagesList.projects.other_projects.map((item, index) => (
                  <GridItem
                    key={index}
                    colSpan={{
                      lg: index === 0 || index === 2 ? 2 : 1,
                      base: 1,
                    }}
                  >
                    <Link href={`/projects/${item.id}`}>
                      <ProjectPicCmp
                        imgSrc={item.imgSrc}
                        projectName={item.projectName}
                      />
                    </Link>
                  </GridItem>
                ))}
              </Grid>
              <Box mx={"auto"} w="fit-content">
                <Button mt={"63px"} label="Load more" />
              </Box>
            </Box>
          </SectionAnimation>
        </section> */}
      </main>
      <FooterCmp />
    </>
  );
}
