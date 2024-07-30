import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const FooterCmp = () => {
  return (
    <footer style={{ backgroundColor: "#002E3B" }}>
      <Box className="section-container" pt={"80px"} pb={"96px"} w="100%">
        <Heading
          textAlign={"center"}
          color={"secondary"}
          fontSize={{ lg: "56px", base: "32px" }}
          lineHeight={"100%"}
          letterSpacing={{ lg: "-2.24px", base: "normal" }}
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
            fontSize={{ lg: "32px", base: "20px" }}
            fontWeight={400}
            fontFamily={"body"}
            // pb={"22px"}
            h={{ lg: "54px", base: "48px" }}
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
          <Flex
            flexDirection={{ md: "row", base: "column" }}
            color={"white"}
            mt={"15px"}
            justify={"space-between"}
          >
            <Stack spacing={"16px"} fontSize={"18px"}>
              <Text>
                17 Emma Abimbola Cole Street,
                <br /> Lekki Scheme 1, Lagos – Nigeria.{" "}
              </Text>
              <Text>+(234) 081-2268-7371</Text>
              <Text>info@firstsynergihomes.com</Text>
            </Stack>
            <Flex
              flexDirection={{ md: "row", base: "column" }}
              gap={"40px"}
              fontSize={"18px"}
              fontWeight={600}
              mt={{ base: "86px", md: 0 }}
            >
              <Text>Projects</Text>
              <Text>About us</Text>
              <Text>Blog</Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection={{ md: "row", base: "column" }}
            mt={"54px"}
            justify={"space-between"}
            alignItems={{ base: "center" }}
          >
            <Flex
              color={"white"}
              fontSize={"18px"}
              gap={"40px"}
              mb={{ base: "48px", md: 0 }}
            >
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
  );
};

export default FooterCmp;
