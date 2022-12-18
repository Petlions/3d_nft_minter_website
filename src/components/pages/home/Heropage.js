import { Box, Text,Flex, Button } from '@chakra-ui/react'
import { TorusKnot, } from '@react-three/drei'
import { Canvas,useFrame ,useLoader} from '@react-three/fiber'
import lionImg from '../../assets/0.png'
import * as THREE from 'three'
import style from './style.module.css'
// import {Card} from ''
import React,{useRef} from 'react'

export function Hero3d(){
    const ref = useRef()
    const texture = useLoader(THREE.TextureLoader, lionImg)
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta;
        ref.current.rotation.z += delta;
        ref.current.rotation.y -= delta;
    });
return <mesh>
<TorusKnot radius={0.1} ref={ref} position={[2.2, 0, 1.5]}>
    <meshStandardMaterial map ={texture} />
</TorusKnot>
</mesh>
}
function Heropage() {
  return (
    <Box  pl='10' pr='10' pt='10' position='relative' h='90vh' isolation='isolate'>
        <Flex wrap='wrap' h='100%' w='100%'>
        <Box bgGradient='linear(to-r, green.200, pink.500)' bgClip='text' w={['100%','100%','50%']}>
        <Text fontSize='3em'  fontFamily='roboto' fontWeight='700'  lineHeight='1.3'>BUILD AND LAUNCH YOUR META VERSE 3D NFTS USING A POWERFUL READY MADE 3D MODELS AND TOOLS OR CUSTOMLY BY YOUR SELF, WITH FEW CLICKS.</Text>
        <Flex justifyContent='space-between'>
            <Button borderRadius='50%' boxShadow='2px 7px 2px 5px #ff00ff' color='#fff' _hover={{color:'#000',transition:'all 1.5s',transform:'scale(1.2)'}} w='45%' bgGradient='linear(to-r, green.200, pink.500)'>CREATE NFT</Button>
            <Button borderRadius='50%' boxShadow='inset 2px 7px 10px 2px #ff00ff, inset -2px -7px 10px 2px #ff00ff'  bg='transparent' color='#fff' border='2px solid #fff' _hover={{color:'#000',bgGradient:'linear(to-r, green.200, pink.500)',transition:'all 1.5s',transform:'scale(1.2)'}} w='45%'>MINT NFT</Button>
        </Flex>
        </Box>
        <Flex alignItems='center' justifyContent='center' zIndex='20' h='100%' w={['100%','100%','50%']} >
                <Box p='5' h='70%' borderRadius='10px' display='flex' alignItems='center' bg='#ffffff40' backdropFilter='blur(10px)' w='60%' zIndex='1'>
                    <Text position='relative' lineHeight='2em' textAlign='center' fontSize={'1.5em'} fontWeight='700' >BUILD, LAUNCH AND MANAGE 3D NFTS WITH EASE. FOCUS ON YOUR COMMUNITY BUILD!</Text>
                </Box>
            </Flex>
            <Canvas style={{height:'100%',width:'100%',zIndex:'-1',position:'absolute',inset:'0'}}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
                <Hero3d />
            </Canvas>
            
            </Flex>
    </Box>
  )
}

export default Heropage