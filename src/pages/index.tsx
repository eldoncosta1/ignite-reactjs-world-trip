import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Text, Divider, Center, VStack, useBreakpointValue } from "@chakra-ui/react";
import ReactLoading from 'react-loading'

import { api } from "../service/api";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";
import { useRouter } from "next/dist/client/router";

interface Continent {
  id: string;
  continent: string;
  title: string;
  image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  const { isFallback } = useRouter()

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />

      <Center height="50px" width="90px" margin="auto" mb="52px">
        <Divider
          orientation="horizontal"
          borderColor="headings_text"
          borderBottom="2px"
          my="6"
        />
      </Center>

      <Box
        margin="auto"
        justify="center"
        align="center"
        fontWeight="500"
        fontSize={isWideVersion ? '4xl' : 'xl'}
      >
        <VStack>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </VStack>

      </Box>

      {isFallback ? (
        <ReactLoading type="bars" color="#FF57B2" />
      ) : <Slider slides={continents} />}

    </Flex>
  )
}

export const getStatichPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api
    .get('/continents')
    .then(response => response.data)

  return {
    props: {
      continents,
    }
  }
}