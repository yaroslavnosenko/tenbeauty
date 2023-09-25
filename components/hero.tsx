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

export const Hero = () => {
  return (
    <Box as="section" pt="8">
      <Container maxW="container.xl" pb="28">
        <Heading mb="4" color="white" maxW="md" mx="auto" textAlign="center">
          Life is not perfect, but your nails can be
        </Heading>
        <Text mb="12" color="brand.500" textAlign="center">
          Alžbetina 18 • Košice
        </Text>

        <SimpleGrid columns={[1, 3]} gap={[4, 8]}>
          <Box />
          <Link href="https://www.fresha.com/a/nail-bar-kosicky-kraj-masiarska-17-fgi2bp0k/booking?menu=true&utm_source=instagram">
            <Button
              mb="12"
              w={['full', 'auto']}
              size="lg"
              colorScheme="brand"
              color="black"
            >
              Online rezervácia
            </Button>
          </Link>
        </SimpleGrid>

        <SimpleGrid columns={[1, 3]} gap={[4, 8]}>
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
            <Image src="/img1.jpeg" objectFit="cover" />
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
            <Image src="/img2.jpeg" objectFit="cover" />
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
            <Image src="/img3.jpeg" objectFit="cover" />
          </AspectRatio>
        </SimpleGrid>
        <Stack
          direction={['column', 'row']}
          mt="20"
          justify="space-between"
          align="flex-end"
        >
          <Box py="2">
            <Heading color="white">
              Tvoja najlepšia manikúra a pedikúra v Nail Bar
            </Heading>
          </Box>
          <Link href="https://www.fresha.com/a/nail-bar-kosicky-kraj-masiarska-17-fgi2bp0k/booking?menu=true&utm_source=instagram">
            <Button
              w={['full', 'auto']}
              size="lg"
              colorScheme="brand"
              color="black"
            >
              Rezervácia
            </Button>
          </Link>
        </Stack>
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
                <Heading size="lg">9:00 - 19:00</Heading>
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
