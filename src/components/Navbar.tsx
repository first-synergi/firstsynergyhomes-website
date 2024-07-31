import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import CloseIcon from "./icons/CloseIcon";
import { useAnimate, motion, stagger } from "framer-motion";

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
    <Box>
      <Flex alignItems={"center"} w="100%">
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
            <Link
              className="link"
              key={index}
              href={item.to}
              style={{ cursor: "pointer" }}
            >
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
        <Box ml="auto">
          <Button
            display={{ lg: "flex", base: "none" }}
            label="Build with us"
            width={"fit-content"}
          />
        </Box>
        {isMobile &&
          (showMobileMenu ? (
            <CloseIcon
              cursor={"pointer"}
              color={"#131316"}
              boxSize={"24px"}
              ml={"auto"}
              onClick={() => setShowMobileMenu(false)}
            />
          ) : (
            <HamburgerMenuIcon
              cursor={"pointer"}
              color={"#131316"}
              boxSize={"24px"}
              ml={"auto"}
              onClick={() => setShowMobileMenu(true)}
            />
          ))}
      </Flex>

      {isMobile && showMobileMenu && (
        <Box w="full">
          <Box>
            <Stack spacing={"32px"} mt={"30px"}>
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -10 * (index + 1) }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.1 * (index + 1) }}
                >
                  <Link href={item.to} style={{ cursor: "pointer" }}>
                    <Text
                      className="link"
                      fontSize={"18px"}
                      fontStyle={"normal"}
                      fontWeight={"600"}
                      lineHeight={"100%"}
                      color={item.active ? "secondary" : "primary"}
                    >
                      {item.link}
                    </Text>
                  </Link>
                </motion.div>
              ))}
            </Stack>
            <Button label="Build with us" w="full" mt={"30px"} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
