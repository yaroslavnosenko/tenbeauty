import { Box } from '@chakra-ui/react'

export const Map = () => {
  return (
    <Box as="section" bg="white">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5264.492758733742!2d21.256514300000003!3d48.7198837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee06561819f6d%3A0x3c98007dec4b16aa!2sAl%C5%BEbetina%2012%2F18%2C%20040%2001%20Star%C3%A9%20Mesto%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1762485450110!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0, width: '100%' }}
        loading="lazy"
      ></iframe>
    </Box>
  )
}
