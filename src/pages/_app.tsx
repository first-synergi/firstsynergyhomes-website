import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fonts } from "@/styles/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "@/styles/global";
import theme from "@/styles/theme";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${fonts.inter.style.fontFamily};
            --font-space_grotesk: ${fonts.space_grotesk.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
