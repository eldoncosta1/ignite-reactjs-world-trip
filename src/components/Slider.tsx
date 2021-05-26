import { Box, Image, Text } from '@chakra-ui/react'

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Slider() {
  return (
    <Box mx="24" mt="16" pb="10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <Box h="450px" position="relative" align="center">
            <Image src="/images/europa.png" alt="Europa" />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontWeight="bold"
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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </Box>
  )
}