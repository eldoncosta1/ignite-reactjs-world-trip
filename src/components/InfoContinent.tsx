import { Flex, Box, Text, SimpleGrid, HStack } from '@chakra-ui/react'

import { RiInformationLine } from 'react-icons/ri'

interface InfoContinentProps {
  continent: {
    id: string;
    continent: string;
    title: string;
    image: string;
    cities_plus_100: number;
    languages: number;
    countries: number;
  }
}

export function InfoContinent({ continent }: InfoContinentProps) {
  return (
    <Flex align="center" justify="center" mt="80px" ml="140px">
      <Box w="600px">
        <Text fontSize="2xl" textAlign="justify">
          {continent.title || ''}
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
            display="flex"
            justify="center"
            flexDir="column"
          >
            <Text
              m="auto"
              color="highlight.900"
              fontSize="5xl"
            >
              {continent.countries}
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
            display="flex"
            justify="center"
            flexDir="column"
          >
            <Text
              m="auto"
              color="highlight.900"
              fontSize="5xl"
            >
              {continent.languages}
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
            display="flex"
            justify="center"
            flexDir="column"
          >
            <Text
              m="auto"
              color="highlight.900"
              fontSize="5xl"
              pl="50"
            >
              {continent.cities_plus_100}
            </Text>

            <HStack spacing={2} w="252px">
              <Text color="headings_text" fontSize="2xl">cidades +100</Text>
              <RiInformationLine size={24} />
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}