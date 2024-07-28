import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const location = useRouter();

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
    <Flex alignItems={"center"} w="full">
      <Image src={"/brand-logo.svg"} alt="brand-logo" width={128} height={48} />
      <Flex color={"primary"} p={"10px"} gap={"40px"} ml={"60px"}>
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
      <Button label="Build with us" ml="auto" />
    </Flex>
  );
};

export default Navbar;
