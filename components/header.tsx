import Image from 'next/image'
import { Box, Container, HStack, Icon, Link } from '@chakra-ui/react'
import { FiInstagram, FiFacebook, FiPhone, FiMail } from 'react-icons/fi'

export const Header = () => {
  return (
    <Box as="header" bg="gray.900" py="8">
      <Container maxWidth="container.xl">
        <HStack spacing="0" justify="space-between">
          <Link href="/">
            <Image src="/logo.jpeg" alt="Nailbar" width={96} height={96} />
          </Link>
          <HStack spacing={6}>
            <Link target="_blank" href="tel:+421950488138">
              <Icon as={FiPhone} boxSize={6} color="brand.500" />
            </Link>
            <Link target="_blank" href="mailto:ten.beautyspace@gmail.com">
              <Icon as={FiMail} boxSize={6} color="brand.500" />
            </Link>
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
        </HStack>
      </Container>
    </Box>
  )
}
