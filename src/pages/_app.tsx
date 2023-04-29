import "@/styles/globals.css";
import "@fontsource/lexend/200.css";
import "@fontsource/ultra";
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
