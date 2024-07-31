import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface TextCmp {
  heading: string;
  bodyText: string;
}
const ServicesTextCmp = ({ heading, bodyText }: TextCmp) => {
  return (
    <Box>
      <Heading className="services-text-header">{heading}</Heading>
      <Text className="body-text-2" mt={{ lg: "21px", base: "8px" }}>
        {bodyText}
      </Text>
    </Box>
  );
};

export default ServicesTextCmp;
