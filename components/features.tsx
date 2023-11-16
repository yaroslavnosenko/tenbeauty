import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'

export const Features = () => {
  return (
    <Box as="section" bg="white" pt="8" pb="28">
      <Container maxW="container.xl">
        <Heading>Čo môžeš od nás očakávať?</Heading>

        <SimpleGrid columns={{ sm: 1, md: 3 }} gap={{ sm: 6, md: 16 }}>
          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image src="/manicure.png" alt="Nailbar" width={48} height={48} />
            </Box>
            <Heading size="lg" mt="6" mb={4}>
              Manikúra
            </Heading>
            <Text>
              V našom štúdiu krásy Ten Beauty Space ponúkame širokú škálu
              služieb pre nechtovú starostlivosť. Venujeme sa klasickým
              manikúram, elegantným francúzskym manikúram a predĺženiu nechtov
              pomocou gélových nechtov. Naši odborníci majú skúsenosti s
              japonskou manikúrou, čo znamená, že vaše nechty budú nielen
              krásne, ale aj zdravé. Staňte sa s nami kráľovnou svojich nechtov
              a objavte svet dokonalej nechtovej starostlivosti v našom štúdiu.
            </Text>
          </Box>

          <Box mt="12">
            <Box bg="brand.500" boxSize="20" p="4" rounded="xl">
              <Image src="/eyebrow.png" alt="Nailbar" width={48} height={48} />
            </Box>
            <Heading size="lg" mt="6" mb={4}>
              Obočie
            </Heading>
            <Text>
              V našom štúdiu krásy Ten Beauty Space sa venujeme dokonalému
              rámčeku pre vašu tvár. Poskytujeme špecializované služby pre
              obočie a mihalnice vrátane precízneho formovania obočia, laminácie
              obočia na dotykový vzhľad, korekcie a farebného oživenia. Naši
              odborníci zdôraznia vašu prirodzenú krásu a prispôsobia služby
              presne vašim individuálnym potrebám. Doprajte si bezchybný pohľad
              a zvýraznite výraz svojich očí s našimi špičkovými službami pre
              obočie a mihalnice.
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
            <Heading size="lg" mt="6" mb={4}>
              Pedikúra
            </Heading>
            <Text>
              V Ten Beauty Space sa venujeme komplexnej starostlivosti o nechty
              a nohy. Ponúkame profesionálny pedikúr, ktorý zahrňuje krásne
              nechty, aplikáciu gélových nechtov a osviežujúci masáž chodidiel.
              Nie je to len o ženách - máme špeciálne pedikúry pre mužov, ktoré
              zdôrazňujú starostlivosť o nohy s eleganciou. Uvoľnite sa a
              doprajte svojim nohám kvalitnú starostlivosť v našom štúdiu.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
