import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Link as FLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import NextImage from 'next/image'
import { Carousel } from './carousel'
import { motion } from 'framer-motion'

export const Hero = () => {
  const FRESHA_LINK =
    'https://www.fresha.com/book-now/nail-bar-gjofwlgb/all-offer?id=1082566&pId=672359'
  return (
    <Box as="section" pt={2}>
      <Container maxW="container.xl">
        <Text color="gray.400" textAlign="center">
          Bajkalská 5A • Bratislava
        </Text>
        <SimpleGrid
          columns={3}
          gap={{ sm: 4, md: 16 }}
          mb={4}
          mt={12}
          color="white"
          textAlign="center"
        >
          <Box>
            <Box
              boxSize="16"
              p="4"
              rounded="xl"
              borderWidth="2px"
              borderColor="brand.500"
              filter="invert(88%) sepia(13%) saturate(4524%) hue-rotate(223deg) brightness(105%) contrast(94%)"
              mx="auto"
            >
              <NextImage
                src="/eyebrow.png"
                alt="Nailbar"
                width={36}
                height={36}
              />
            </Box>
            <Link href={FRESHA_LINK}>
              <Heading
                size={{ xs: 'md', md: 'lg' }}
                mt="6"
                mb="4"
                textDecoration="underline"
                cursor="pointer"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Obočie
              </Heading>
            </Link>
          </Box>

          <Box>
            <Box
              boxSize="16"
              p="4"
              rounded="xl"
              borderWidth="2px"
              borderColor="brand.500"
              filter="invert(88%) sepia(13%) saturate(4524%) hue-rotate(223deg) brightness(105%) contrast(94%)"
              mx="auto"
            >
              <NextImage
                src="/manicure.png"
                alt="Nailbar"
                width={36}
                height={36}
              />
            </Box>
            <Link href={FRESHA_LINK}>
              <Heading
                size={{ xs: 'md', md: 'lg' }}
                mt="6"
                mb="4"
                textDecoration="underline"
                cursor="pointer"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Manikúra
              </Heading>
            </Link>
          </Box>

          <Box>
            <Box
              boxSize="16"
              p="4"
              rounded="xl"
              borderWidth="2px"
              borderColor="brand.500"
              filter="invert(88%) sepia(13%) saturate(4524%) hue-rotate(223deg) brightness(105%) contrast(94%)"
              mx="auto"
            >
              <NextImage
                src="/barber-chair.png"
                alt="Nailbar"
                width={36}
                height={36}
              />
            </Box>
            <Link href={FRESHA_LINK}>
              <Heading
                cursor="pointer"
                size={{ xs: 'md', md: 'lg' }}
                mt="6"
                mb="4"
                textDecoration="underline"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Pedikúra
              </Heading>
            </Link>
          </Box>
        </SimpleGrid>

        <Box py="10" textAlign="center">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.03 }}
            transition={{
              ease: 'linear',
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <Text
              color="brand.500"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="3xl"
            >
              -30% na vašu prvú návštevu
            </Text>
          </motion.div>
          <Text color="gray.400" fontSize="sm">
            * obočia -15% na prvú návštevu
          </Text>
        </Box>

        <SimpleGrid
          columns={[1, 1, 4]}
          gap={4}
          justifyContent="center"
          py={[4, 4, 8]}
        >
          <Box />
          <Button
            as={FLink}
            href={FRESHA_LINK}
            size="lg"
            colorScheme="brand"
            color="black"
            textTransform="none"
          >
            Online rezervácia
          </Button>
          <Button
            as={FLink}
            href={FRESHA_LINK}
            size="lg"
            colorScheme="brand"
            color="white"
            background={'#ca29f0'}
            w={{ xs: 'full', md: 'auto' }}
            textTransform="none"
          >
            Cenník
          </Button>
        </SimpleGrid>
      </Container>

      <Heading my={16} color="white" maxW="md" mx="auto" textAlign="center">
        Life is not perfect, but your nails can be
      </Heading>

      <Carousel />

      <Container maxW="container.xl" pb="28">
        <SimpleGrid
          mt="20"
          gap={{ sm: 8, md: 16 }}
          gridTemplateColumns={{ sm: '1fr', md: '2fr 1fr' }}
          alignItems="center"
        >
          <Box py="2">
            <Heading color="white">
              Tvoja najlepšia manikúra a pedikúra v Ten Beauty Space
            </Heading>
          </Box>
          <Link href="https://www.fresha.com/book-now/nail-bar-gjofwlgb/all-offer?id=1082566&pId=672359">
            <Button size="lg" colorScheme="brand" color="black">
              Rezervácia
            </Button>
          </Link>
        </SimpleGrid>
      </Container>

      <Box bg="white">
        <Container maxW="container.xl">
          <Box
            position="relative"
            rounded="md"
            bg="gray.400"
            p="8"
            top="-16"
            shadow="xl"
          >
            <HStack textAlign="center" justify="space-around">
              <Box>
                <Text textTransform="uppercase" opacity="0.7">
                  Otváracia doba
                </Text>
                <Heading size="lg" mt="2">
                  8:00 - 20:00
                </Heading>
                <Text textTransform="uppercase" opacity="0.7">
                  PON - SOB
                </Text>
              </Box>
            </HStack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
