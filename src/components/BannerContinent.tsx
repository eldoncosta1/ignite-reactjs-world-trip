import { Flex, Image } from '@chakra-ui/react'

export function BannerContinent() {
  return (
    <Flex>
      <Image
        // boxSize="185px"
        objectFit="fill"
        w="100%"
        h="500px"
        src="/images/banner.png"
        alt="banner"
      />
    </Flex>
  )
}