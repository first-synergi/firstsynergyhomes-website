import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import CloseIcon from "./icons/CloseIcon";

const Navbar = () => {
  const location = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const navLinks = [
    { link: "Home", to: "/", active: location.pathname === "/" },
    {
      link: "Projects",
      to: "/projects",
      active: location.pathname === "/projects",
    },
    {
      link: "About us",
      to: "/about-us",
      active: location.pathname === "/about-us",
    },
    { link: "Blog", to: "/blog", active: location.pathname === "/blog" },
  ];
  return (
    <>
      {!showMobileMenu && (
        <Flex alignItems={"center"} w="full">
          <Image
            src={"/brand-logo.svg"}
            alt="brand-logo"
            width={128}
            height={48}
          />
          <Flex
            display={{ lg: "inline-flex", base: "none" }}
            color={"primary"}
            p={"10px"}
            gap={"40px"}
            ml={"60px"}
          >
            {navLinks.map((item, index) => (
              <Link key={index} href={item.to} style={{ cursor: "pointer" }}>
                <Text
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"100%"}
                  color={item.active ? "secondary" : "primary"}
                  borderBottom={item.active ? `2px solid` : "none"}
                  borderColor={item.active ? "secondary" : "none"}
                >
                  {item.link}
                </Text>
              </Link>
            ))}
          </Flex>
          <Button
            display={{ lg: "inline-flex", base: "none" }}
            label="Build with us"
            ml="auto"
          />
          <HamburgerMenuIcon
            cursor={"pointer"}
            color={"#131316"}
            boxSize={"24px"}
            ml={"auto"}
            onClick={() => setShowMobileMenu(true)}
          />
        </Flex>
      )}
      {isMobile && showMobileMenu && (
        <Box w="full">
          <Flex alignItems={"center"}>
            <Image
              src={"/brand-logo.svg"}
              alt="brand-logo"
              width={128}
              height={48}
            />
            <CloseIcon
              cursor={"pointer"}
              color={"#131316"}
              boxSize={"24px"}
              ml={"auto"}
              onClick={() => setShowMobileMenu(false)}
            />
          </Flex>
          <Box>
            <Stack spacing={"32px"} mt={"30px"}>
              {navLinks.map((item, index) => (
                <Link key={index} href={item.to} style={{ cursor: "pointer" }}>
                  <Text
                    fontSize={"18px"}
                    fontStyle={"normal"}
                    fontWeight={"600"}
                    lineHeight={"100%"}
                    color={item.active ? "secondary" : "primary"}
                  >
                    {item.link}
                  </Text>
                </Link>
              ))}
            </Stack>
            <Button label="Build with us" w="full" mt={"30px"} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
