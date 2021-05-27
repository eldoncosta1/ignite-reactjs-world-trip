import { VStack, Heading, HStack } from '@chakra-ui/react'
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
  console.log(cities)
  return (
    <VStack align="flex-start">
      <Heading mb="40px">Cidades +100</Heading>

      <HStack spacing="9">
        {cities.map(city => (
          <CityBox key={city.country} city={city} />
        ))}
      </HStack>
    </VStack>
  )
}