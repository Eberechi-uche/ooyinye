import "@/styles/globals.css";
import "@fontsource/lexend/200.css";
import "@fontsource/lexend/700.css";
import "@fontsource/ultra";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
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
