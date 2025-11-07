import {
  AspectRatio,
  Box,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Header } from '../components/bratislava'
import { Head } from '../components/kosice'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Header />
      <Box as="main">
        <Box as="section" pt="8">
          <Container maxW="container.xl" pb="24">
            <Heading
              mb="4"
              color="white"
              maxW="md"
              mx="auto"
              textAlign="center"
            >
              Life is not perfect, but your nails can be
            </Heading>
            <Text color="brand.500" textAlign="center">
              Bratislava • Košice
            </Text>
          </Container>
          <SimpleGrid columns={[1, 1, 2]}>
            <Link href="/bratislava">
              <AspectRatio scale={1} cursor="pointer">
                <Box pos="relative">
                  <Image
                    src="bratislava.jpeg"
                    objectFit="cover"
                    alt="Bratislava"
                    boxSize="100%"
                  />
                  <Center
                    transition="ease-in-out 0.1s"
                    position="absolute"
                    boxSize="100%"
                    bg="#eea3f8aa"
                    backdropFilter="blur(3px)"
                    _hover={{
                      textDecoration: 'underline',
                      backdropFilter: 'blur(0px)',
                    }}
                    color="white"
                  >
                    <Heading fontSize={['4xl', '6xl']}>Bratislava</Heading>
                  </Center>
                </Box>
              </AspectRatio>
            </Link>
            <Link href="/kosice">
              <AspectRatio scale={1} cursor="pointer">
                <Box pos="relative">
                  <Image
                    src="kosice.jpeg"
                    objectFit="cover"
                    alt="Kosice"
                    boxSize="100%"
                  />
                  <Center
                    transition="ease-in-out 0.1s"
                    position="absolute"
                    boxSize="100%"
                    bg="#eea3f8aa"
                    backdropFilter="blur(3px)"
                    _hover={{
                      textDecoration: 'underline',
                      backdropFilter: 'blur(0px)',
                    }}
                    color="white"
                  >
                    <Heading fontSize={['4xl', '6xl']}>Košice</Heading>
                  </Center>
                </Box>
              </AspectRatio>
            </Link>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export default Home
