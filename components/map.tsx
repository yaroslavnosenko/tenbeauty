import { AspectRatio, Box, Container } from '@chakra-ui/react'
import { Map as MMap, Marker } from 'pigeon-maps'
import { stamenToner } from 'pigeon-maps/providers'

export const Map = () => {
  return (
    <Box as="section" bg="white">
      <MMap
        provider={stamenToner}
        dprs={[1, 2]}
        height={300}
        defaultZoom={17}
        defaultCenter={[48.1652247, 17.1376747]}
        touchEvents={false}
        mouseEvents={false}
      >
        <Marker width={50} anchor={[48.1652247, 17.1376747]} />
      </MMap>
    </Box>
  )
}
