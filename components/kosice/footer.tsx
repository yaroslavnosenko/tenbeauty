import {
  Box,
  Container,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'

export const Footer = () => {
  return (
    <Box as="footer" bg="gray.900">
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 3]}>
          <HStack justify={['center', 'flex-start']} align="flex-start" pt="16">
            <Image src="/logo.jpeg" alt="Nailbar" width={96} height={96} />
          </HStack>

          <Box pt="16">
            <HStack mb="6" spacing={4}>
              <Icon as={FiMapPin} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                Alžbetina 18, 040 01 Košice
              </Text>
            </HStack>

            <HStack mb="6" spacing={4}>
              <Icon as={FiPhone} boxSize={6} color="brand.500" />
              <Text mb="2" color="white">
                <Link href="tel:+421950207789">+421 950 20 77 89</Link>
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
              href="https://www.instagram.com/nailbar.sk_kosice/"
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
