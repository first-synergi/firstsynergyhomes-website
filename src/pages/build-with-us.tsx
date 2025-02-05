import Button from "@/components/Button";
import FooterCmp from "@/components/FooterCmp";
import { InputCmp, TextAreaCmp } from "@/components/InputCmp";
import Navbar from "@/components/Navbar";
import SectionAnimation from "@/components/SectionAnimation";
import {
  border,
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  InputProps,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import Head from "next/head";
import React, { useRef, useState } from "react";

const BuildWithUs = () => {
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.6 });
  const toast = useToast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });
  console.log(errors);

  const validate = () => {};

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const values = { firstName, lastName, email, phone, subject, message };
    // console.log(values);
    // console.log(process.env.NEXT_PUBLIC_EMAIL_HOST);

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      setErrors({
        firstName: !firstName,
        lastName: !lastName,
        email: !email,
        phone: !phone,
        subject: !subject,
        message: !message,
      });
      toast({
        description: `Error: Please fill all required fields`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    setErrors({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      subject: false,
      message: false,
    });

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    });

    const result = await res.json();
    if (res.status === 200) {
      toast({
        title: "Email sent",
        description: "We've received your message.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        description: `Error: ${result.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>First Synergi Homes - Build with us</title>
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
        <section ref={navRef} className="section-container">
          <Box pt={{ lg: "206px", base: "150px" }} mb={"27px "} maxW={"842px"}>
            <Text color={"primary"} className="body-text-2">
              We look forward to serving you!
            </Text>
            <Heading
              color={"primary"}
              className="heading-2"
              mt={{ base: "12px", lg: "7px" }}
            >
              {`Build with us or ask a question? We’re always ready to work with
              you.`}
            </Heading>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              color={"secondary"}
              fontSize={{ lg: "24px", base: "16px" }}
              fontWeight={400}
              gap={{ lg: "24px", base: "8px" }}
              mt={{ lg: "40px", base: "30px" }}
            >
              <a href="tel:+23408122687371">
                <Text>+(234) 081-2268-7371</Text>
              </a>
              <a href="mailto:info@firstsynergihomes.com">
                <Text>info@firstsynergihomes.com</Text>
              </a>
            </Flex>
            <Box
              display={{ lg: "none", base: "block" }}
              color={"primary"}
              width={"328px"}
              mt={"13px"}
            >
              <Text opacity={0.3} className="body-text-1">
                mailing address
              </Text>
              <Text className="body-text-2" mt={"8px"}>
                17 Emma Abimbola Cole Street,
                <br /> Lekki Scheme 1, Lagos – Nigeria.{" "}
              </Text>
            </Box>
          </Box>
          <SectionAnimation>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              borderTop={"1px solid"}
              borderColor={"rgba(0, 46, 59, 0.3)"}
              pt={"40px"}
              pb={"136px"}
              w="full"
              gap={"50px"}
              justify={"space-between"}
            >
              <Box w="full" maxW={"764px"}>
                <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                  <Stack spacing={"16px"}>
                    <Flex gap={"16px"}>
                      <InputCmp
                        label="First name"
                        name="first_name"
                        id="first_name"
                        value={firstName}
                        onChange={(e) => setFirstName(e?.target?.value)}
                        error={errors?.firstName}
                      />
                      <InputCmp
                        label="Last name"
                        name="last_name"
                        id="last_name"
                        value={lastName}
                        onChange={(e) => setLastName(e?.target?.value)}
                        error={errors?.lastName}
                      />
                    </Flex>
                    <Flex
                      flexDirection={{ base: "column", lg: "row" }}
                      gap={"16px"}
                    >
                      <InputCmp
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e?.target?.value)}
                        error={errors?.email}
                      />
                      <InputCmp
                        label="Phone number"
                        name="phone"
                        id="phone"
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e?.target?.value)}
                        error={errors?.phone}
                      />
                    </Flex>
                    <InputCmp
                      label="Subject"
                      name="subject"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e?.target?.value)}
                      error={errors?.subject}
                    />
                    <TextAreaCmp
                      label="Message"
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e?.target?.value)}
                      error={errors?.message}
                    />
                    <Button
                      label="Send message"
                      type="submit"
                      width={"full"}
                      isLoading={isLoading}
                    />
                  </Stack>
                </form>
              </Box>
              <Box
                display={{ base: "none", lg: "block" }}
                color={"primary"}
                width={"328px"}
                mt={"43px"}
              >
                <Text opacity={0.3} className="body-text-1">
                  mailing address
                </Text>
                <Text className="body-text-2" mt={"21px"}>
                  17 Emma Abimbola Cole Street,
                  <br /> Lekki Scheme 1, <br />
                  Lagos – Nigeria.{" "}
                </Text>
              </Box>
            </Flex>
          </SectionAnimation>
        </section>
      </main>
      <FooterCmp />
    </>
  );
};

export default BuildWithUs;
