import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Josefin Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    gray: {
      900: '#000000',
    },
    brand: {
      500: '#eea3f8',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
      },
    },
  },
})
