import { GetStaticPaths, GetStaticProps } from "next"
import { api } from "../service/api"

import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'

import { BannerContinent } from "../components/BannerContinent"
import { Header } from "../components/Header"
import { Cities } from "../components/Cities"
import { InfoContinent } from "../components/InfoContinent"

interface Country {
  id: string;
  country: string;
  city: string;
  image: string;
}

interface ContinentProps {
  continent: {
    id: string;
    continent: string;
    title: string;
    image: string;
    cities_plus_100: number;
    languages: number;
    countries: number;
  },
  countries: Country[];
}

export default function Continent({ continent, countries }: ContinentProps) {

  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Box h="500px" position="relative" align="center">
        <BannerContinent img={continent.image} />
        <Text
          position="absolute"
          top={isWideVersion ? "50%" : "77%"}
          left={isWideVersion ? "50%" : "20%"}
          transform="translate(-50%, -50%)"
          fontWeight="600"
          fontSize="5xl"
          color="light.heading"
        >
          {continent.continent}
        </Text>
      </Box>

      <InfoContinent continent={continent} />

      <Flex m={isWideVersion ? "10px" : "80px"} pb="8">
        <Cities cities={countries} />
      </Flex>
    </Flex >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continent_id = params.continent

  const continent = await api
    .get(`/continents/${continent_id}`)
    .then(response => response.data)

  const countries = await api
    .get(`/countries?id=${continent_id}`)
    .then(response => response.data)

  return {
    props: {
      continent,
      countries,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}