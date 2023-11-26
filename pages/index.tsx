import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Head, Hero, Features, Map, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5RFTMK8H"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Header />
      <Box as="main">
        <Hero />
        <Features />
        <Map />
      </Box>
      <Footer />
    </>
  )
}

export default Home
