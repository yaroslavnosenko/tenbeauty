import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Footer, Hero, Features, Map, Head } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head />
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
