import { Box, Image, Flex, Text, useBreakpointValue } from '@chakra-ui/react'

interface CityBoxProps {
  city: {
    id: string;
    image: string;
    country: string;
    city: string;
  }
}

export function CityBox({ city }: CityBoxProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <>
      <Box
        w="258px"
        h="279px"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        ml={isWideVersion && 15}
      >
        <Image src={city.image} alt={city.country} h="173" w="100%" />

        <Flex p="6" justify="space-between">
          <Box
            mt="1"
            isTruncated
          >
            <Box
              d="flex"
              alignItems="baseline"
              fontWeight="600"
              mb="3"
              fontSize="xl"
              color="headings_text"
            >
              {city.city}
            </Box>
            <Text color="info.900" fontSize="md">{city.country}</Text>
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            <Image
              w="30px"
              h="30px"
              borderRadius="full"
              objectFit="cover"
              src={city.image}
              alt={city.city}
            />

          </Box>
        </Flex>
      </Box>
    </>
  )
}