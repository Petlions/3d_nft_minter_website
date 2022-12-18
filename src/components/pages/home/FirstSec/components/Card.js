import { Box } from '@chakra-ui/react'
import React from 'react'

function Card({children,bgColor1,bgColor2}) {
  return (
    <Box minH={['250px','250px','400px']} w={['250px','250px','400px']} borderRadius='10px' bg={bgColor1 || 'brand.900'} transform='rotateZ(-20deg)'>
        <Box bg={bgColor2 || 'brand.800'} p='5' textAlign='center' display='grid' placeItems='center' borderRadius='10px' minH='100%' w='100%' transform='rotateZ(20deg)'>{children}</Box>
    </Box>
  )
}

export default Card