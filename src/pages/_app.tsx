import "@/styles/globals.css";

import "@fontsource/source-sans-pro/200.css";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/900.css";
// Supports weights 100-900
import "@fontsource-variable/inter";
// Supports weights 100-900
// Supports weights 100-900
import type { AppProps } from "next/app";

// Supports weights 100-900

import Theme from "@/ChakraUi/Theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/Components/Layout/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
