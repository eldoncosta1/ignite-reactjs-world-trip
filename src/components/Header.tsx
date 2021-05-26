import { Flex, Box, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="100"
      mx="auto"
      justify="center"
      align="center"
    >
      <Box>
        <Image
          // boxSize="185px"
          objectFit="cover"
          src="/images/worldtrip_logo.svg"
          alt="Worldtrip"
          my="27px"
        />
      </Box>
    </Flex>
  )
}