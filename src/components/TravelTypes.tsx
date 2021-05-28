import { Image, Text, Box, Flex, HStack, VStack, useBreakpointValue, SimpleGrid } from '@chakra-ui/react'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: 'column',
    md: 'column',
    lg: 'row',
  })

  return (
    <>
      {
        isWideVersion === 'column' ? (
          <Flex
            maxWidth={1440}
            flexDir="column"
            m="auto"
          >
            <SimpleGrid
              spacing="8"
              columns={2}
              my="8"
              mx="8"
            >

              <Box>
                <Text
                  color="headings_text"
                  fontSize="md"
                  fontWeight="600"
                >

                  <RiCheckboxBlankCircleFill
                    size={16}
                    color="#FFBA08"
                    style={{ marginRight: '8px', }}
                  />
                vida noturna
              </Text>
              </Box>
              <Box>
                <Text
                  color="headings_text"
                  fontSize="md"
                  fontWeight="600"
                >
                  <RiCheckboxBlankCircleFill
                    size={16}
                    color="#FFBA08"
                    style={{ marginRight: '8px', }}
                  />
                praia
                </Text>
              </Box>
              <Box>
                <Text
                  color="headings_text"
                  fontSize="md"
                  fontWeight="600"
                >
                  <RiCheckboxBlankCircleFill
                    size={16}
                    color="#FFBA08"
                    style={{ marginRight: '8px', }}
                  />
                moderno
                </Text>
              </Box>
              <Box>
                <Text
                  color="headings_text"
                  fontSize="md"
                  fontWeight="600"
                >
                  <RiCheckboxBlankCircleFill
                    size={16}
                    color="#FFBA08"
                    style={{ marginRight: '8px', }}
                  />
                clássico
                </Text>
              </Box>
              <Box>
                <Text
                  color="headings_text"
                  fontSize="md"
                  fontWeight="600"
                >
                  <RiCheckboxBlankCircleFill
                    size={16}
                    color="#FFBA08"
                    style={{ marginRight: '8px', }}
                  />
                e mais...
                </Text>
              </Box>
            </SimpleGrid>
          </Flex>
        ) :
          <Flex
            maxWidth={1440}
            flexDir="column"
            m="auto"
          >
            <HStack
              spacing="20"
              mx="32"
              m="20"
            >
              <Box>
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
              <Box>
                <Image
                  objectFit="cover"
                  w="85px"
                  h="85px"
                  m="auto"
                  src="/images/surf.svg" alt="surf"
                />
                <Text
                  color="headings_text"
                  align="center"
                  mt="6"
                  fontSize="md"
                  fontWeight="600"
                >
                  praia
        </Text>
              </Box>
              <Box>
                <Image
                  objectFit="cover"
                  w="85px"
                  h="85px"
                  m="auto"
                  src="/images/building.svg" alt="building"
                />
                <Text
                  color="headings_text"
                  align="center"
                  mt="6"
                  fontSize="md"
                  fontWeight="600"
                >
                  moderno
        </Text>
              </Box>
              <Box>
                <Image
                  objectFit="cover"
                  w="85px"
                  h="85px"
                  m="auto"
                  src="/images/museum.svg" alt="museum"
                />
                <Text
                  color="headings_text"
                  align="center"
                  mt="6"
                  fontSize="md"
                  fontWeight="600"
                >
                  clássico
        </Text>
              </Box>
              <Box>
                <Image
                  objectFit="cover"
                  w="85px"
                  h="85px"
                  m="auto"
                  src="/images/earth.svg" alt="earth"
                />
                <Text
                  color="headings_text"
                  align="center"
                  mt="6"
                  fontSize="md"
                  fontWeight="600"
                >
                  e mais...
        </Text>
              </Box>
            </HStack>
          </Flex>
      }
    </>
  )
}