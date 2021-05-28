import { VStack, Heading, HStack, useBreakpointValue, SimpleGrid } from '@chakra-ui/react'
import { CityBox } from './CityBox'

interface Country {
  id: string;
  country: string;
  city: string;
  image: string;
}

interface CitiesProps {
  cities: Country[];
}

export function Cities({ cities }: CitiesProps) {
  const isWideVersion = useBreakpointValue({
    base: 'column',
    lg: 'row',
  })

  return (
    <VStack align="flex-start">
      <Heading mb="40px">Cidades +100</Heading>
      {isWideVersion === 'column' ? (
        <VStack spacing="9">
          {cities.map(city => (
            <CityBox key={city.country} city={city} />
          ))}
        </VStack>
      ) : (
        <SimpleGrid spacing="9" columns={4}>
          {cities.map(city => (
            <CityBox key={city.country} city={city} />
          ))}
        </SimpleGrid>
      )}

    </VStack>
  )
}