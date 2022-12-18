import React from 'react'
import HeaderComp from '../../layouts/header'
import {Box, Flex} from '@chakra-ui/react'
import Heropage from './Heropage'
import FirstSec from './FirstSec/FirstSec'
import Footer from '../../layouts/Footer'
import Thirdcomp from './FirstSec/components/Thirdcomp'
function Homepage() {
  return (
    <>
    <HeaderComp />
    <Flex flexDir='column' gap='10em' minH='90vh' h='max-content'  w='100vw'  bg='#000'>
      <Heropage />
      <FirstSec />
      <Thirdcomp />
    </Flex>
    <Footer />
    </>
  )
}

export default Homepage