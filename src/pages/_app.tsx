import "@/styles/globals.css";
import "@fontsource/ultra";
// Supports weights 100-900
import "@fontsource-variable/inter";
import type { AppProps } from "next/app";

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
