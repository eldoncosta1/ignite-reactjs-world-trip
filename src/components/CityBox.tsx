import { Box, Image, Flex, Text } from '@chakra-ui/react'

interface CityBoxProps {
  city: {
    id: string;
    image: string;
    country: string;
    city: string;
  }
}

export function CityBox({ city }: CityBoxProps) {
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
      <Box
        w="258px"
        h="279px"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
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