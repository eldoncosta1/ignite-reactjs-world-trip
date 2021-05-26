import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { Flex, Box, Image } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter()
  const isHome = asPath.length;

  return (
    <>

      <Flex
        as="header"
        w="100%"
        h="100"
        mx="auto"
        justify="center"
        align="center"

      >
        {isHome > 1 ? (
          <>
            <Link href="/" passHref>
              <Box position="absolute" left="15%">
                <RiArrowLeftSLine size={24} />
              </Box>
            </Link>
            <Box>
              <Image
                // boxSize="185px"
                flex="1"
                objectFit="cover"
                src="/images/worldtrip_logo.svg"
                alt="Worldtrip"
                my="27px"
              />
            </Box>
          </>
        ) : (
          <Box>
            <Image
              // boxSize="185px"
              flex="1"
              objectFit="cover"
              src="/images/worldtrip_logo.svg"
              alt="Worldtrip"
              my="27px"
            />
          </Box>
        )}
      </Flex>
    </>
  )
}