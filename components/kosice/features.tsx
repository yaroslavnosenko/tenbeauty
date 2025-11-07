import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'

export const Features = () => {
  return (
    <Box as="section" bg="white" pt="8" pb="28">
      <Container maxW="container.xl">
        <Heading>Čo môžeš od nás očakávať?</Heading>

        <SimpleGrid columns={[1, 3]} gap="4">
          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image src="/manicure.png" alt="Nailbar" width={48} height={48} />
            </Box>
            <Heading size="lg" mt="6">
              Manikúra
            </Heading>
            <Text>
              100% sterilizácia prístrojov, jednorázový spotrebný materiál,
              profesionálny prístup
            </Text>
          </Box>

          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image src="/eyebrow.png" alt="Nailbar" width={48} height={48} />
            </Box>
            <Heading size="lg" mt="6">
              Obočia a mihalnice
            </Heading>
            <Text>
              Naši odborníci zabezpečia perfektný tvar obočia a krásne dlhé
              mihalnice.
            </Text>
          </Box>

          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image
                src="/barber-chair.png"
                alt="Nailbar"
                width={48}
                height={48}
              />
            </Box>
            <Heading size="lg" mt="6">
              Pedikúra
            </Heading>
            <Text>
              Suchá pedikúra. Úplná relaxácia a starostlivosť o tvoje nohy a
              nechty
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
