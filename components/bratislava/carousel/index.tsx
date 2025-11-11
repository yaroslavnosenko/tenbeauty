import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

export const Carousel = () => {
  const images = [
    { src: '/1.jpg' },
    { src: '/4.jpg' },
    { src: '/6.jpg' },
    { src: '/5.jpg' },
    { src: '/3.jpg' },
    { src: '/2.jpg' },
  ]

  return (
    <Container maxW="container.xl">
      <SimpleGrid gap={[4, 4, 8]} columns={[2, 2, 3]}>
        {images.map(({ src }, index) => (
          <Box key={index} position="relative">
            <Image
              src={src}
              height={640}
              width={640}
              objectFit={'cover'}
              alt=""
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}
