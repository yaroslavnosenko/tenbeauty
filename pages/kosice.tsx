import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/bratislava'
import { Features, Footer, Head, Hero, Map } from '../components/kosice'

const KosiceHome: NextPage = () => {
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

export default KosiceHome
