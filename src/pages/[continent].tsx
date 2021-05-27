import { GetStaticPaths, GetStaticProps } from "next"

import { Flex, Box, Text, SimpleGrid, Image, Heading, Badge, HStack, VStack } from '@chakra-ui/react'
import { RiInformationLine, RiStarSFill } from 'react-icons/ri'

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
    <Flex direction="column" h="100vh">
      <Header />
      <Box h="500px" position="relative" align="center">
        <BannerContinent />
        <Text
          position="absolute"
          top="82%"
          left="16%"
          transform="translate(-50%, -50%)"
          fontWeight="600"
          fontSize="5xl"
          color="light.heading"
        >
          {continent}
        </Text>
      </Box>
      <Flex align="center" justify="center" my="80px" ml="140px">
        <Box w="600px" h="211px">
          <Text fontSize="2xl" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Box>
          <SimpleGrid
            w="490px"
            columns={3}
            spacing="4"
            mx="32"
          >
            <Box
              width="98px"
              height="99px"
              fontWeight="600"
              align="center"
            >
              <Text
                m="auto"
                color="highlight.900"
                fontSize="5xl"
              >
                50
              </Text>
              <Text
                color="headings_text"
                fontSize="2xl"
              >
                países
              </Text>
            </Box>
            <Box
              width="98px"
              height="99px"
              fontWeight="600"
              align="center"
            >
              <Text
                m="auto"
                color="highlight.900"
                fontSize="5xl"
              >
                60
              </Text>
              <Text
                color="headings_text"
                fontSize="2xl"
              >
                línguas
              </Text>
            </Box>
            <Box
              width="98px"
              height="99px"
              fontWeight="600"
              align="center"
            >
              <Text
                m="auto"
                color="highlight.900"
                fontSize="5xl"
              >
                27
              </Text>

              <HStack spacing={2} w="250px">
                <Text color="headings_text" fontSize="2xl">cidades +100</Text>
                <RiInformationLine size={24} />
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>

      <Flex mt="80px" ml="140px">

        <VStack align="flex-start">
          <Heading mb="40px">Cidades +100</Heading>

          <SimpleGrid
            spacing="4"
          >
            <Box
              w="258px"
              h="279px"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />

              <Box p="6">
                <Box d="flex" alignItems="baseline" fontWeight="600">
                  Londres
                </Box>

                <Box
                  mt="1"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  Reino Unido
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                  <Image
                    w="30px"
                    h="30px"
                    borderRadius="full"
                    src={property.imageUrl}
                    alt={property.imageAlt}
                  />

                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Flex>
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