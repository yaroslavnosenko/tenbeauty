import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../styles.css'
import '../components/carousel/style.css'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
