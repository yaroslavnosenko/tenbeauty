import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Stack,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import NextImage from 'next/image'

export const Hero = () => {
  return (
    <Box as="section" pt={{ sm: 8, md: 2 }}>
      <Container maxW="container.xl" pb="28">
        <Heading mb="4" color="white" maxW="md" mx="auto" textAlign="center">
          Life is not perfect, but your nails can be
        </Heading>
        <Text mb="12" color="brand.500" textAlign="center">
          Bajkalská 5A • Bratislava
        </Text>

        <SimpleGrid columns={{ md: 3 }} gap={[4, 8]}>
          <Box />
          <Link href="https://www.fresha.com/book-now/nail-bar-gjofwlgb/all-offer?id=1082566&pId=672359">
            <Button
              mb="12"
              w={['full', 'full', 'auto']}
              size="lg"
              colorScheme="brand"
              color="black"
            >
              Online rezervácia
            </Button>
          </Link>
        </SimpleGrid>

        <SimpleGrid columns={{ sm: 1, md: 3 }} gap="4" mb={32} color="white">
          <Box mt="12">
            <Box
              boxSize="20"
              p="4"
              rounded="xl"
              borderWidth="2px"
              borderColor="brand.500"
              filter="invert(88%) sepia(13%) saturate(4524%) hue-rotate(223deg) brightness(105%) contrast(94%)"
            >
              <NextImage
                src="/manicure.png"
                alt="Nailbar"
                width={48}
                height={48}
              />
            </Box>
            <Heading size="lg" mt="6" mb="4" textDecoration="underline">
              Manikúra
            </Heading>
            <Text>
              100% sterilizácia prístrojov, jednorázový spotrebný materiál,
              profesionálny prístup
            </Text>
          </Box>

          <Box mt="12">
            <Box
              boxSize="20"
              p="4"
              rounded="xl"
              borderWidth="2px"
              borderColor="brand.500"
              filter="invert(88%) sepia(13%) saturate(4524%) hue-rotate(223deg) brightness(105%) contrast(94%)"
            >
              <NextImage
                src="/eyebrow.png"
                alt="Nailbar"
                width={48}
                height={48}
              />
            </Box>
            <Heading size="lg" mt="6" mb="4" textDecoration="underline">
              Obočie
            </Heading>
            <Text>
              Naši odborníci zabezpečia perfektný tvar a výraz vašeho obočia
            </Text>
          </Box>

          <Box mt="12">
            <Box
              boxSize="20"
              p="4"
              rounded="xl"
              borderWidth="2px"
              borderColor="brand.500"
              filter="invert(88%) sepia(13%) saturate(4524%) hue-rotate(223deg) brightness(105%) contrast(94%)"
            >
              <NextImage
                src="/barber-chair.png"
                alt="Nailbar"
                width={48}
                height={48}
              />
            </Box>
            <Heading size="lg" mt="6" mb="4" textDecoration="underline">
              Pedikúra
            </Heading>
            <Text>
              Suchá pedikúra. Úplná relaxácia a starostlivosť o tvoje nohy a
              nechty
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 3]} gap={[4, 8]}>
          <AspectRatio
            overflow="hidden"
            cursor="pointer"
            rounded="sm"
            ratio={1}
          >
            <Image src="/img1.jpeg" objectFit="cover" alt="" />
          </AspectRatio>
          <AspectRatio
            overflow="hidden"
            cursor="pointer"
            rounded="sm"
            _hover={{
              transform: 'scale(1.01)',
            }}
            transition="ease-in-out 0.5s"
            ratio={1}
          >
            <Image src="/img2.jpeg" objectFit="cover" alt="" />
          </AspectRatio>
          <AspectRatio
            overflow="hidden"
            cursor="pointer"
            rounded="sm"
            _hover={{
              transform: 'scale(1.01)',
            }}
            transition="ease-in-out 0.5s"
            ratio={1}
          >
            <Image src="/img3.jpeg" objectFit="cover" alt="" />
          </AspectRatio>
        </SimpleGrid>
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
                <Heading size="lg">8:00 - 20:00</Heading>
                <Text textTransform="uppercase" opacity="0.7">
                  PON - SOB
                </Text>
              </Box>
              <Box>
                <Heading size="lg">Zatvorené</Heading>
                <Text textTransform="uppercase" opacity="0.7">
                  NED
                </Text>
              </Box>
            </HStack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
