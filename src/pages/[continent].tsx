import { GetStaticPaths, GetStaticProps } from "next"

import { Flex, Box, Text, SimpleGrid, Image, Heading, Badge } from '@chakra-ui/react'
import { RiStarSFill } from 'react-icons/ri'

import { BannerContinent } from "../components/BannerContinent"
import { Header } from "../components/Header"

interface ContinentProps {
  continent: string;
}

export default function Continent({ continent }: ContinentProps) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <>
      <Header />
      <BannerContinent />
      <Flex align="center" justify="space-between">
        <Box>
          <Text>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Box>
          <SimpleGrid
            minChildWidth="158px"
            spacing="4"
            mx="32"
            m="20"
          >
            <Box width="158px" height="145px">
              <Image
                objectFit="cover"
                w="85px"
                h="85px"
                m="auto"
                src="/images/cocktail.svg" alt="cocktail"
              />
              <Text
                color="headings_text"
                align="center"
                mt="6"
                fontSize="md"
                fontWeight="600"
              >
                vida noturna
          </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>

      <Heading>Cidades +100</Heading>

      <SimpleGrid
        spacing="4"
        mx="32"
        m="20"
      >
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <RiStarSFill
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const { continent } = params

  return {
    props: {
      continent,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}