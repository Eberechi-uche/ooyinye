import Head from "next/head";
import { Text, Flex, Button, Icon, Input } from "@chakra-ui/react";
import HomePageHeader from "@/Components/Headers/HomePage.Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import ContentLayout from "@/Components/Layout/Content.Layout";
import HomeRHS from "@/Components/LeftContentComponent/HomeLHS/HomeRHS";
import PostCard from "@/Components/Card/PostCard";
import HomeLHS from "@/Components/LeftContentComponent/HomeLHS/HomeLHS";
import HomeNavFooter from "@/Components/MobileFooter/HomeNavFooter";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import Link from "next/link";

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
            <HomeRHS />
          </>
          <>
            <HomeNavFooter />
            <Flex
              flexDir={"column"}
              bg={"red.700"}
              width={"100%"}
              color={"#fff"}
            >
              <Text width={"100%"} fontWeight={"700"} ml={"2"} fontSize={"3xl"}>
                Top Reads
              </Text>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </Flex>

            <Flex width={"100%"} flexDir={"column"} py={"20"}>
              <Flex
                width={"100%"}
                justify={"space-between"}
                align={"center"}
                px={"4"}
                fontSize={"2xl"}
              >
                <Text fontWeight={"500"}>For you</Text>
                <Link href={"/search"}>
                  <Flex
                    align={"center"}
                    borderRadius={"full"}
                    border={"1px solid"}
                    borderColor={"gray.300"}
                    p={{
                      base: "1",
                      md: "0",
                    }}
                  >
                    <Icon as={CiSearch} />
                    <Input
                      placeholder="search blog"
                      border={"none"}
                      disabled
                      display={{ base: "none", md: "unset" }}
                    />
                  </Flex>
                </Link>
              </Flex>

              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </Flex>
          </>
          <>
            <HomeLHS />
          </>
        </ContentLayout>
      </main>
    </>
  );
}
