import { Box, HStack } from '@chakra-ui/react'
import Image from 'next/image'

export const Carousel = () => {
  const images = [
    '/img1.jpeg',
    '/img2.jpeg',
    '/img3.jpeg',
    '/img1.jpeg',
    '/img2.jpeg',
    '/img3.jpeg',
  ]

  return (
    <HStack overflow="hidden" pos="relative" gap={4}>
      <HStack className="anim" gap={4} flexWrap="nowrap" flex="0 0 auto">
        {images.map((src, index) => {
          return (
            <Box flex="0 0 320px" key={index}>
              <Image
                width="320"
                height="320"
                src={src}
                objectFit="cover"
                priority
                alt=""
              />
            </Box>
          )
        })}
      </HStack>
      <HStack className="anim" gap={4} flexWrap="nowrap" flex="0 0 auto">
        {images.map((src, index) => {
          return (
            <Box flex="0 0 320px" key={index}>
              <Image
                width="320"
                height="320"
                src={src}
                objectFit="cover"
                alt=""
                priority
              />
            </Box>
          )
        })}
      </HStack>
    </HStack>
  )
}
