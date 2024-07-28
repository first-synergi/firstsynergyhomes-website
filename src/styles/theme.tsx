/** @format */

// 1. import `extendTheme` function
import {
  extendTheme,
  type ThemeConfig,
  theme as baseTheme,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "firstsynergy-homes",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `var(--font-space_grotesk)`,
    body: `var(--font-inter)`,
    button: `var(--font-space_grotesk)`,
  },
  colors: {
    button: {
      secondary: "#C0972D",
      white: "#F5F5F5",
    },
    primary: "#002E3B",
    secondary: "#C0972D",
    black: "#1A1A1A",
    white: "#F5F5F5",
  },
});

export default theme;
