import { Flex, Box, Text, SimpleGrid, HStack, useBreakpointValue, Tooltip } from '@chakra-ui/react'

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
  const isWideVersion = useBreakpointValue({
    base: 'column',
    md: 'column',
    lg: 'row',
  })

  return (
    <>
      {
        isWideVersion === 'column' ? (

          <Flex flexDir="column" align="center" justify="center" m="2" >
            <Box>
              <Text fontSize="2xl" textAlign="justify">
                {continent.title || ''}
              </Text>
            </Box>
            <Box>
              <SimpleGrid
                columns={3}
                spacing="1"
              >
                <Box
                  width="98px"
                  height="99px"
                  fontWeight="600"
                  align="flex-start"
                  display="flex"
                  justify="center"
                  flexDir="column"
                >
                  <Text
                    mt="6"
                    color="highlight.900"
                    fontSize="md"
                  >
                    {continent.countries}
                  </Text>
                  <Text
                    color="headings_text"
                    fontSize="md"
                  >
                    países
                  </Text>
                </Box>
                <Box
                  width="98px"
                  height="99px"
                  fontWeight="600"
                  align="flex=start"
                  display="flex"
                  justify="center"
                  flexDir="column"
                >
                  <Text
                    mt="6"
                    color="highlight.900"
                    fontSize="md"
                  >
                    {continent.languages}
                  </Text>
                  <Text
                    color="headings_text"
                    fontSize="md"
                  >
                    línguas
                  </Text>
                </Box>
                <Box
                  width="98px"
                  height="99px"
                  fontWeight="600"
                  align="flex-start"
                  display="flex"
                  justify="center"
                  flexDir="column"
                >
                  <Text
                    mt="6"
                    color="highlight.900"
                    fontSize="md"

                  >
                    {continent.cities_plus_100}
                  </Text>

                  <HStack spacing={2} >
                    <Text color="headings_text" fontSize="md">+100</Text>
                    <Tooltip
                      hasArrow
                      label={`${continent.cities_plus_100} cidades +100`}
                      fontSize="sm"
                      bg="dark.info"
                    >
                      <span><RiInformationLine style={{ cursor: 'default' }} size={16} /></span>
                    </Tooltip>
                  </HStack>
                </Box>
              </SimpleGrid>
            </Box>
          </Flex>
        ) : (
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
                    <Tooltip
                      hasArrow
                      label={`${continent.cities_plus_100} cidades +100`}
                      fontSize="sm"
                      bg="dark.info"
                    >
                      <span><RiInformationLine style={{ cursor: 'default' }} size={24} /></span>
                    </Tooltip>
                  </HStack>
                </Box>
              </SimpleGrid>
            </Box>
          </Flex>
        )}
    </>
  )
}