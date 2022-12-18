import { Box, Card as ChCard, Flex, Text } from '@chakra-ui/react'
import { OrbitControls, PerspectiveCamera, TorusKnot, useGLTF,Environment,Html, useProgress, RoundedBox, Sphere, Torus } from '@react-three/drei'
import { Canvas ,useLoader,useFrame} from '@react-three/fiber'
import React, { Suspense,useRef } from 'react'
import { Build } from './build'
import Card from './Card'
import * as THREE from 'three'
import imga from '../../../../assets/6.png'
import { Lion } from './lion'
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function DancingCubes(){
  const ref = useRef()
  // const ref2 = useRef()
    const texture = useLoader(THREE.TextureLoader, imga)
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta
      ref.current.rotation.y -= delta
      ref.current.rotation.z -= delta
      // ref2.current.rotation.x -= delta
      // ref2.current.rotation.y -= delta
      // ref2.current.rotation.z -= delta
    })
return <mesh>
{/* <Sphere radius={0.1} ref={ref2} position={[-1, 0, 1.5]} scale='1.5'>
    <meshStandardMaterial map ={texture} />
</Sphere> */}
<Torus radius={0.1} ref={ref} position={[2.2, 0, 2.5]} scale={1}>
    <meshStandardMaterial map ={texture} />
</Torus>
</mesh>
}
function Firstcomp() {
  return (
    <Box w='100%' position='relative' isolation='isolate' bg='#000'>
      <Flex gap='20' justifyContent='center' w='100%' minH='40vh' h='max-content'>
        <Card>
          <Text fontSize='1.2em' fontWeight='medium' color='#fff'>Build and Launch NFTs with already provided assests. This will ensure speedup for your project as well enable you to focus on community building.</Text>
        </Card>
      <Box w='2' borderRadius='10px' minH='40vh' h='100%' bg='brand.900'></Box>
      <Box flex='0.7' w='250px' h='100%' display='grid' placeItems='center'>
      <Box p='5' h='100%' borderRadius='10px' display='flex' alignItems='center' bg='#ffffff40' backdropFilter='blur(10px)' w='70%' zIndex='1'>
                    <Text position='relative' lineHeight='2em' textAlign='center' fontSize={'1.5em'} fontWeight='700' >CAPITALIZE ON OUR ALREADY MADE ASSETS AND SPEED UP YOUR PRODUCTION.</Text>
                </Box>
      </Box>
      </Flex>
      <Box position='absolute' inset='0' zIndex='-1' h='100%' w='100%'>
        <Canvas  >
      <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<Loader />}>
        {/* <Lion/> */}
        <DancingCubes />
        </Suspense>
        <OrbitControls />
        {/* <Environment preset="warehouse" background /> */}
        </Canvas>
        </Box>
    </Box>
  )
}

export default Firstcomp