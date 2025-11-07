import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../components/bratislava/carousel/style.css'
import '../styles.css'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
