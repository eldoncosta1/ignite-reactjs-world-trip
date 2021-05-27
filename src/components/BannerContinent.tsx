import { Flex, Image } from '@chakra-ui/react'

interface BannerContinentProps {
  img: string;
}

export function BannerContinent({ img }: BannerContinentProps) {
  return (
    <Flex>
      <Image
        // boxSize="185px"
        objectFit="fill"
        w="100%"
        h="500px"
        src={img}
        alt="banner"
      />
    </Flex>
  )
}