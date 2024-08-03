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
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomeProjectCmp from "@/components/HomeProjectCmp";
import BlogItemCmp from "@/components/BlogItemCmp";
import ImagesList from "@/images.json";
import FooterCmp from "@/components/FooterCmp";
import SectionAnimation from "@/components/SectionAnimation";
import ServicesTextCmp from "@/components/ServicesTextCmp";
import BounceAnimation from "@/components/BounceAnimation";

const CoreValuesObj = [
  {
    title: "FOCUS",
    subtitle:
      "Precision and attention to detail define our approach, ensuring that every project meets the highest standards.",
  },
  {
    title: "SIMPLICITY/SYNERGY",
    subtitle:
      "We simplify complex processes and synergize efforts to deliver exceptional results efficiently.",
  },
  {
    title: "HONESTY",
    subtitle:
      "Our commitment to honesty builds strong, trustworthy relationships with clients and stakeholders.",
  },
  {
    title: "LEADERSHIP",
    subtitle:
      "Our commitment to honesty builds strong, trustworthy relationships with clients and stakeholders.",
  },
];

const TeamMembers = [
  { name: "Yusuf Salako", role: "Architect/Project Manager" },
  { name: "Ademola Azzan", role: "Architect/Project Manager" },
  { name: "Olanrewaju Oshinaike", role: "Project Architect" },
  { name: "Anthony Sunday Kingsley", role: "Quantity Surveyor" },
  { name: "Blessing Oyase", role: "Operations/HR Manager" },
  { name: "Oladoja Abdulfattah Adekunle", role: "Quantity Site Surveying" },
];

const TeamMemberCmp = ({ name, role }: any) => {
  return (
    <Box color={"primary"} textAlign={"center"}>
      <Heading fontSize={"20px"}>{name}</Heading>
      <Heading fontSize={"20px"} fontWeight={400} mt={"8px"}>
        {role}
      </Heading>
    </Box>
  );
};

export default function AboutUs() {
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.6 });

  return (
    <>
      <Head>
        <title>First Synergi Homes - About us</title>
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
          <SectionAnimation>
            <Box
              className="section-container"
              pt={{ lg: "206px", base: "170px" }}
            >
              <Heading color={"primary"} className="heading-3">
                We’re transforming the way the world builds.
              </Heading>
            </Box>
          </SectionAnimation>

          <Box
            h={{ lg: "444px", base: "236px" }}
            bg={"gray"}
            bgImage={ImagesList.about.hero}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            mt="62px"
          ></Box>
        </section>
        <section className="section-container">
          <SectionAnimation>
            <Box pt={"100px"} pb={"108px"}>
              <Box w={{ lg: "55%", base: "full" }} maxW={"655px"}>
                <Text className="body-text-1" color={"secondary"}>
                  Company Overview
                </Text>
                <Heading color={"primary"} className="heasding-3" mt={"21px"}>
                  About First Synergi Homes
                </Heading>
              </Box>
              <Box mt={"37px"}>
                <Text
                  color={"primary"}
                  className="body-text-2 multi-column-text"
                >
                  First Synergi Homes Limited was Incorporated in 2007, and
                  primarily formed to cater to the need for exclusive private
                  home development and alluringly built-up living communities.
                  <br />
                  <br />
                  Inspired by real life experiences coupled with the glaring
                  need to develop structures that are not just aesthetically
                  pleasing to behold but also structurally sound and sustainable
                  for decades to come.
                  <br />
                  <br />
                  We are a firm committed to the actualization of the finest
                  quality of building design and construction at par with
                  international standards, with a lot of emphasis placed on
                  quality, practicality, spatial management, smart and energy
                  efficiency.
                  <br />
                  Our work focuses on possibilities that are open to the
                  architectural and construction industry, through advancement
                  in technology and the constant development of various
                  finishing materials. Our properties cutting across the length
                  and breadth of the country, each have their own unique design
                  aesthetic, providing an aspirational lifestyle within a
                  thriving community.
                  <br />
                  <br />
                  In addition, we also employ a consultative approach in working
                  with clients who have specific home dreams and needs they
                  intend to bring to reality, either to live in or to have as an
                  investment. We are wholeheartedly committed to building
                  enduring relationships and providing a plethora of expertise
                  and solutions to meet our client&apos;s ever-evolving needs.
                </Text>
              </Box>
            </Box>
          </SectionAnimation>
        </section>
        <section>
          <SectionAnimation>
            <Box
              h={{ lg: "667px", base: "auto" }}
              w="full"
              bgImage={"/skyscraper_bg.png"}
              bgSize={"cover"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              mt="62px"
            >
              <Flex
                direction={"column"}
                justify={"center"}
                className="section-container"
                h={"100%"}
                pt={{ lg: 0, base: "95px" }}
                pb={{ lg: 0, base: "126px" }}
              >
                <Heading
                  className="heading-2"
                  color={"white"}
                  textAlign={"center"}
                >
                  For those who seek an Exceptional Home and a<br /> Lifestyle
                  of Opulence,
                  <br /> WELCOME on this journey with us
                </Heading>
                <Flex
                  flexDirection={{ lg: "row", base: "column" }}
                  mt={"57px"}
                  gap={"50px"}
                  color={"white"}
                  alignItems={"center"}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  <Box w={{ lg: "50%" }}>
                    <Text className="body-text-1" color={"secondary"}>
                      Our Vision
                    </Text>
                    <Text className="body-text-2" mt="21px">
                      To be the most sought after Property Development Company
                      for everyone who dreams to own a Home.
                    </Text>
                  </Box>
                  <Box w={{ lg: "50%", base: "full" }}>
                    <Text className="body-text-1" color={"secondary"}>
                      Our MISSION
                    </Text>
                    <Text className="body-text-2" mt="21px">
                      Our mission is to offer cutting edge services in the area
                      of design and construction, matching internationally
                      acceptable standards.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </SectionAnimation>
        </section>
        <section className="section-container">
          <SectionAnimation>
            <Flex
              flexDirection={{ lg: "row", base: "column" }}
              mt={"77px"}
              gap={"38px"}
              position={"relative"}
            >
              <Box w={{ lg: "65%", base: "full" }}>
                <Text color={"secondary"} className="body-text-1">
                  what we stand for
                </Text>
                <Heading
                  color={"primary"}
                  mt={{ lg: "21px", base: "8px" }}
                  className="heading-4"
                >
                  Core Values
                </Heading>
                <SimpleGrid
                  columns={2}
                  gridGap={"50px"}
                  minChildWidth={"280px"}
                  mt={"34px"}
                >
                  {CoreValuesObj.map((obj, index) => (
                    <Box key={index} maxW={{ lg: "302px", base: "full" }}>
                      <Text color={"secondary"} className="body-text-1">
                        {obj.title}
                      </Text>
                      <Text
                        color={"primary"}
                        className="body-text-2"
                        mt={"16px"}
                      >
                        {obj.subtitle}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
              <Box display={{ lg: "block", base: "none" }}>
                <Image
                  src={ImagesList.about.section3}
                  alt="project-image"
                  width={649}
                  height={597}
                />
              </Box>
            </Flex>
          </SectionAnimation>
        </section>
        <Box
          display={{ base: "block", lg: "none" }}
          bgImage={ImagesList.about.section3}
          bgSize={"cover"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          height={"364px"}
        />
        <section className="section-container">
          <Box my={"100px"}>
            <Text color={"secondary"} className="body-text-1">
              OUR SERVICES
            </Text>
            <Heading
              color={"primary"}
              mt={{ lg: "21px", base: "8px" }}
              className="heading-4"
            >
              How we bring your vision to life.
            </Heading>
            <Grid
              gridGap={"30px"}
              gridTemplateColumns={{
                lg: "repeat(3, 1fr)",
                base: "repeat(1, 1fr)",
              }}
              mt={"40px"}
            >
              <GridItem colSpan={{ lg: 2, base: 1 }}>
                <BounceAnimation>
                  <Flex
                    bgImage={ImagesList.about.services[0]}
                    className="services-container"
                  >
                    <ServicesTextCmp
                      heading="Architectural Designs"
                      bodyText="We create innovative and aesthetically pleasing designs tailored to your specific requirements."
                    />
                  </Flex>
                </BounceAnimation>
              </GridItem>
              <GridItem>
                <BounceAnimation>
                  <Flex
                    bgImage={ImagesList.about.services[1]}
                    className="services-container"
                    alignItems={{ lg: "flex-end", base: "flex-start" }}
                  >
                    <ServicesTextCmp
                      heading="Building Construction"
                      bodyText="We ensure every structure we build is safe, sustainable, and durable, overseeing each project from inception to completion"
                    />
                  </Flex>
                </BounceAnimation>
              </GridItem>
              <GridItem>
                <BounceAnimation>
                  <Flex
                    bgImage={ImagesList.about.services[2]}
                    className="services-container"
                    alignItems={{ lg: "flex-end", base: "flex-start" }}
                  >
                    <ServicesTextCmp
                      heading="Project Management"
                      bodyText="We manage your project from planning to final delivery, ensuring it is completed on time, within budget, and to the highest quality standards."
                    />
                  </Flex>
                </BounceAnimation>
              </GridItem>
              <GridItem colSpan={{ lg: 2, base: 1 }}>
                <BounceAnimation>
                  <Flex
                    className="services-container"
                    bgImage={ImagesList.about.services[3]}
                  >
                    <ServicesTextCmp
                      heading="Property Sales and Marketing"
                      bodyText="We provide professional property sales and marketing services to help you buy, sell, or lease properties successfully."
                    />
                  </Flex>
                </BounceAnimation>
              </GridItem>
            </Grid>
          </Box>
        </section>
        <section className="section-container">
          <Box py={"70px"}>
            <Text color={"secondary"} className="body-text-1">
              MEET OUR TEAM
            </Text>
            <SectionAnimation>
              <Flex flexDirection={{ lg: "row", base: "column" }} mt={"66px"}>
                <Box w={"100%"} maxW={"375px"} h={"496px"}>
                  <Box
                    position={"relative"}
                    w="full"
                    height={"425px"}
                    mb={"27px"}
                  >
                    <Image
                      src={"/images/Disu-Adeniyi_(BW).jpg"}
                      alt="img"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </Box>
                  <TeamMemberCmp
                    name="Kamar Adeniyi Disu"
                    role="Managing Director"
                  />
                </Box>

                <Grid
                  gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
                  rowGap={"24px"}
                  columnGap={"55px"}
                  ml={{ lg: "auto", base: 0 }}
                  mt={{ lg: "20px", base: "40px" }}
                  height={"fit-content"}
                >
                  {TeamMembers.map((member) => (
                    <GridItem key={member.name}>
                      <TeamMemberCmp name={member.name} role={member.role} />
                    </GridItem>
                  ))}
                </Grid>
              </Flex>
            </SectionAnimation>
          </Box>
        </section>
      </main>
      <FooterCmp />
    </>
  );
}
