import { Flex, Image, useBreakpointValue } from '@chakra-ui/react'

interface BannerContinentProps {
  img: string;
}

export function BannerContinent({ img }: BannerContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: 'column',
    md: 'column',
    lg: 'row',
  })

  return (
    <Flex>
      <Image
        // boxSize="185px"
        objectFit={isWideVersion ? 'cover' : 'fill'}
        w="100%"
        h="500px"
        src={img}
        alt="banner"
      />
    </Flex>
  )
}