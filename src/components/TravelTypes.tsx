import { SimpleGrid, Image, Text, Box } from '@chakra-ui/react'

export function TravelTypes() {
  return (
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
      <Box width="158px" height="145px">
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
      <Box width="158px" height="145px">
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
      <Box width="158px" height="145px">
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
      <Box width="158px" height="145px">
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
    </SimpleGrid>
  )
}