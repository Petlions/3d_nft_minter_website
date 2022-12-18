import { Box, Flex, Link, Text,keyframes,usePrefersReducedMotion } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
function HeaderComp() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`
  return (
    <Box h='10vh' w='100vw' bg='#000' display='flex' alignItems='center' justifyContent='center' pr='10'>
      <Flex alignItems='center'>
        <Logo />
        {/* <Text variant='logoText'>PETLIONS</Text> */}
      </Flex>
        <Box  display='flex' alignItems='center'  justifyContent='flex-end' gap='5' pr='10'  fontSize='20px' flex='1'>
            <Link variant='headerLink'>HOME</Link>
            <Link variant='headerLink'>BUILD NFT</Link>
            {/* <Link variant='headerLink'>AIRDROP</Link> */}
            <Link variant='headerLink'>MINT</Link>
            <Link variant='headerLink'>MARKETPLACE</Link>
            <Link variant='headerLink'>PLAYGROUND</Link>
            <Link variant='headerLink'>GAMES</Link>
            <Link variant='headerLink'>ABOUT</Link>
            <Link variant='headerLink'>WALLET</Link>
        </Box>
    </Box>
  )
}

export default HeaderComp