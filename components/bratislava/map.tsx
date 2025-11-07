import { Box } from '@chakra-ui/react'

export const Map = () => {
  return (
    <Box as="section" bg="white">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.148211347983!2d17.137674699999994!3d48.165224699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8ec848d60df7%3A0x2cf2213a71f12ac7!2sBajkalsk%C3%A1%2012188%2F5A%2C%20831%2004%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1700107911705!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0, width: '100%' }}
        loading="lazy"
      ></iframe>
    </Box>
  )
}
