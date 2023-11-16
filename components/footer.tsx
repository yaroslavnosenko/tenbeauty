import Image from 'next/image'
import {
  Box,
  Container,
  HStack,
  Link,
  Icon,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import {
  FiInstagram,
  FiFacebook,
  FiMapPin,
  FiPhone,
  FiMail,
} from 'react-icons/fi'

export const Footer = () => {
  return (
    <Box as="footer" bg="gray.900">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ sm: 1, md: 3 }}>
          <HStack justify={['center', 'flex-start']} align="flex-start" pt="16">
            <Image src="/logo.jpeg" alt="Nailbar" width={96} height={96} />
          </HStack>

          <Box pt="16">
            <HStack mb="6" spacing={4}>
              <Icon as={FiMapPin} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                Bajkalská 5A, 831 04 Bratislava
              </Text>
            </HStack>

            <HStack mb="6" spacing={4}>
              <Icon as={FiPhone} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                <Link href="tel:+421950488138">+421 950 488 138</Link>
              </Text>
            </HStack>

            <HStack spacing={4}>
              <Icon as={FiMail} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                <Link href="mailto:nailbar.skk@gmail.com">
                  nailbar.skk@gmail.com
                </Link>
              </Text>
            </HStack>
          </Box>

          <HStack
            spacing={6}
            justify={['center', 'flex-end']}
            align="flex-start"
            pt="16"
          >
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100085635908032"
            >
              <Icon as={FiFacebook} boxSize={6} color="brand.500" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/ten.beauty.space_bratislava/"
            >
              <Icon as={FiInstagram} boxSize={6} color="brand.500" />
            </Link>
          </HStack>
        </SimpleGrid>
        <Box pt="16" pb="8" textAlign="center" color="white">
          © Copyright {new Date().getFullYear()} tenbeauty.sk
        </Box>
      </Container>
    </Box>
  )
}
