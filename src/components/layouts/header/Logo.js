import {Box,Center,OrbitControls,RoundedBox,Text3D} from '@react-three/drei'
import { Canvas,useFrame,useLoader  } from '@react-three/fiber'
import React,{useRef,Suspense} from 'react'
import * as THREE from 'three'
import imge from '../../assets/0.png'
export function LogoBox(){
    const ref = useRef()
    const texture = useLoader(THREE.TextureLoader, imge)
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.z += delta;
      ref.current.rotation.y += delta;
    });
return <mesh>
<RoundedBox radius={0.1} ref={ref} position={[-1.5, 0, 3.6]}>
    <meshStandardMaterial  map={texture}/>
</RoundedBox>
</mesh>
}
export function TextBox(){
  const texture = useLoader(THREE.TextureLoader, imge)
  return  <Text3D
  position={[-1,-1,0]}
  curveSegments={32}
  bevelEnabled
  bevelSize={0.04}
  bevelThickness={0.2}
  height={1}
  lineHeight={2}
  letterSpacing={-0.1}
  size={2}
  font="/Inter_Bold.json">
  PETLIONS
  <meshStandardMaterial  map={texture}/>
</Text3D>
}
function Logo() {
    
  return (
    <Suspense>

    <Canvas  style={{height:'70px',width:'290px'
    // ,background:"#ff0000"
    }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <LogoBox /> 
        <TextBox />
    </Canvas>
    </Suspense>
  )
}

export default Logo