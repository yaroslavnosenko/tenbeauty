import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

export const Carousel = () => {
  const images = [
    { src: '/1.jpg', label: 'Obočia od 13€' },
    { src: '/4.jpg', label: 'Obočia od 13€' },
    { src: '/6.jpg', label: 'Manikúra od 25€' },
    { src: '/5.jpg', label: 'Manikúra od 25€' },
    { src: '/3.jpg', label: 'Pedikura od 33€    ' },
    { src: '/2.jpg', label: 'Pedikura od 33€ ' },
  ]

  return (
    <Container maxW="container.xl">
      <SimpleGrid gap={[4, 4, 8]} columns={[2, 2, 3]}>
        {images.map(({ src, label }, index) => (
          <Box key={index} position="relative">
            <Image
              src={src}
              height={640}
              width={640}
              objectFit={'cover'}
              alt=""
            />
            <Box
              bg="#ca29f0"
              pos="absolute"
              bottom={0}
              right={3}
              color={'white'}
              fontWeight={'bold'}
              p={2}
              borderRadius={6}
            >
              {label}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}
