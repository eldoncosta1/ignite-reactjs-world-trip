import Link from 'next/link';
import { Box, Image, Text, Flex } from '@chakra-ui/react'

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface Continent {
  id: string;
  continent: string;
  title: string;
  image: string;
}

interface SliderProps {
  slides: Continent[];
}
export function Slider({ slides }: SliderProps) {
  return (
    <Box mx="24" mt="16" pb="10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.continent}>
            <Image maxWidth={1440} src={slide.image} alt={slide.continent} objectFit="cover" />
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
                  _hover={{
                    color: 'highlight.900'
                  }}
                >
                  <Link href={`/${slide.id}`} passHref>{slide.continent}</Link>
                </Text>
                <Text
                  color="light.info"
                  fontSize="2xl"
                >
                  {slide.title}
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}