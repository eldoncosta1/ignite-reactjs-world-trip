import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    highlight: {
      "900": "#FFBA08",
      "500": "#FFD56A"
    },
    headings_text: "#47585B",
    info: {
      "900": "#999999",
      "500": "#C0C0C0"
    },
    light: {
      "info": "#DADADA",
      "heading": "#F5F8FA",
      "white": "#FFF"
    },
    dark: {
      "black": "#000",
      "info": "#999999"
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'light.heading',
        color: 'headings_text'
      },
      "svg": {
        cursor: 'pointer',
        display: 'inline'
      },
    }
  }
})