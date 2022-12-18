import { Box, Card } from '@chakra-ui/react'
import React from 'react'
import Firstcomp from './components/Firstcomp'
import SecondComp from './components/Secondcomp'

function FirstSec() {
  return (
    <Card display='flex'  flexDir='column' gap='40' w='100vw' minH='100vh' bg='#000'>
      <Firstcomp />
      <SecondComp />
    </Card>
  )
}

export default FirstSec