import { Box, Flex, SimpleGrid, Image, Text, Divider, Center, VStack } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />

      <Center height="50px" width="90px" margin="auto" mb="52px">
        <Divider
          orientation="horizontal"
          borderColor="headings_text"
          borderBottom="2px"
          my="6"
        />
      </Center>

      <Box
        margin="auto"
        justify="center"
        align="center"
        fontWeight="500"
        fontSize="4xl"
      >
        <VStack>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </VStack>

      </Box>

      <Slider />

    </Flex>
  )
}
