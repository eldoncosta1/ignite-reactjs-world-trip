import { Box, Image, Text, Flex } from '@chakra-ui/react'

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Slider() {
  return (
    // <Flex maxWidth={1440} m="auto">
    <Box mx="24" mt="16" pb="10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <Image maxWidth={1440} src="/images/europa.png" alt="Europa" objectFit="cover" />
          <Box
            h="auto"
            align="center"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Box
              fontWeight="bold"
              color="light.heading"
            >
              <Text
                color="light.heading"
                fontSize="5xl"
                mb="4"
              >
                Europa
              </Text>
              <Text
                color="light.info"
                fontSize="2xl"
              >
                O continente mais antigo.
              </Text>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image maxWidth={1440} src="/images/europa.png" alt="Europa" objectFit="cover" />
          {/* <Box h="450px" position="relative" align="center">
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                fontWeight="bold"
                color="light.heading"
              >
                <Text
                  color="light.heading"
                  fontSize="5xl"
                  mb="4"
                >
                  Europa
              </Text>
                <Text
                  color="light.info"
                  fontSize="2xl"
                >
                  O continente mais antigo.
              </Text>
              </Box>
            </Box> */}
        </SwiperSlide>
      </Swiper>
    </Box>
    // </Flex>
  )
}