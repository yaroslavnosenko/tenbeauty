import Image from 'next/image'
import { Box, Container, HStack, Icon, Link } from '@chakra-ui/react'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

export const Header = () => {
  return (
    <Box as="header" bg="gray.900" pt="8">
      <Container maxWidth="container.xl">
        <HStack spacing="0" justify="space-between">
          <Link href="/">
            <Image src="/logo.png" alt="Nailbar" width={196} height={196} />
          </Link>
          <HStack spacing={6}>
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100085635908032"
            >
              <Icon as={FiFacebook} boxSize={10} color="brand.500" />
            </Link>
            <Link target="_blank" href="https://instagram.com/nailbar.skk">
              <Icon as={FiInstagram} boxSize={10} color="brand.500" />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
