
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import lgltf from './lion.gltf'
import imga from '../../../../assets/0.png'
import * as THREE from 'three'
import { useLoader,useFrame } from "@react-three/fiber";
import lionTexture from "../../../../assets/secondliontxt.jpg"
export function Lion(props) {
  const texture = useLoader(THREE.TextureLoader,lionTexture)
  const { nodes, materials } = useGLTF('/lion.gltf',true,false);
  const ref = useRef()
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
    useFrame((state, delta) => (ref.current.rotation.z += delta))
    // useFrame((state, delta) => (ref.current.rotation.y += delta))
  // console.log({materials,nodes})
  return (
    <group rotation={[150,0,0]} onUpdate={(e)=>{console.log({up:e})}} ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["11506_Lion"].geometry}
        material={materials._11506_Lion_v3_FINALdefault}
        // position={[0,-20,300]}
      > <meshStandardMaterial  map={texture}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/lion.gltf",true,false);