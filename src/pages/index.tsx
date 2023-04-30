import Head from "next/head";
import { Text } from "@chakra-ui/react";
import HomePageHeader from "@/Components/Headers/HomePage.Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import ContentLayout from "@/Components/Layout/Content.Layout";

export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Ooyinye</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!user && <HomePageHeader />}

      <main>
        <ContentLayout>
          <>
            <Text width={"100%"}>LHS</Text>
          </>
          <>
            <Text>RHS</Text>
          </>
        </ContentLayout>
      </main>
    </>
  );
}
