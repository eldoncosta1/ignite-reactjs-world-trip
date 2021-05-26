import { Flex, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex>
      <Image
        // boxSize="185px"
        objectFit="cover"
        w="100%"
        src="/images/banner.png"
        alt="banner"
      />
    </Flex>
  )
}