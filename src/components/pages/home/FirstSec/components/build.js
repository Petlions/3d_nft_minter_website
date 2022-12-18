import React, { useRef  } from 'react'
import { useGLTF,  

 } from '@react-three/drei'





export function Build(props) {
    const { nodes, materials } = useGLTF('./build.gltf',true,false) 
  return (
    <group  {...props} dispose={null}>
<group position={[-0.06, 0, -0.19,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes['CirclePlane_-_baked'].geometry} material={materials['Turquoise to Violet']} position={[5.05, -3.32, 3.33,]} rotation={[0, 0, 0.32,]}   />
<mesh castShadow receiveShadow geometry={nodes.Image_Plane.geometry} material={materials.Ballon} position={[-0.13, -0.64, 2.12,]} scale={[0.49, 0.49, 1,]}   />
</group><group position={[-0.33, 0, 0.05,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_i'].geometry} material={materials['Impulse 1']} position={[-34.48, -17.84, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_i_1'].geometry} material={materials['Impulse 1']} position={[20.86, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_n'].geometry} material={materials['Impulse 1']} position={[-29.74, -17.84, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_n_1'].geometry} material={materials['Impulse 1']} position={[25.6, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_3'].geometry} material={materials['Impulse 1']} position={[-14.52, -17.84, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_D'].geometry} material={materials['Impulse 1']} position={[-4.8, -17.84, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_R'].geometry} material={materials['Impulse 1']} position={[-34.83, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_e'].geometry} material={materials['Impulse 1']} position={[-23.97, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_p'].geometry} material={materials['Impulse 1']} position={[-14.17, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_o'].geometry} material={materials['Impulse 1']} position={[-3.59, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_r'].geometry} material={materials['Impulse 1']} position={[6.79, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_t'].geometry} material={materials['Impulse 1']} position={[14.14, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_6_-_g'].geometry} material={materials['Impulse 1']} position={[36.41, 1.54, 0.28,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes['Box_6_-_baked'].geometry} material={materials['Cosmopolitan 28']} position={[-44.18, -35.94, 1.77,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.04}   />
</group><group position={[-0.22, 0, 0.15,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes['3D_Text_7_-_A'].geometry} material={materials['Impulse 2']} position={[-36.67, 21.64, 3.35,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_8_-_C'].geometry} material={materials['Impulse 3']} position={[-37.11, -30.24, 3.35,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_-_B'].geometry} material={materials.Impulse} position={[-37.37, -4.33, 3.35,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_5.geometry} material={materials['Cosmopolitan 28']} position={[-34.49, 30, 5.7,]} rotation={[Math.PI / 2, 0, 0,]}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_5_1.geometry} material={materials['Cosmopolitan 28']} position={[-34.49, 4, 5.7,]} rotation={[Math.PI / 2, 0, 0,]}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_5_2.geometry} material={materials['Cosmopolitan 28']} position={[-34.49, -22, 5.7,]} rotation={[Math.PI / 2, 0, 0,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_39.geometry} material={materials['Aquarius 2']} position={[9.7, 26.04, 3,]} scale={0.05}   />
<mesh castShadow receiveShadow geometry={nodes.Box_39_1.geometry} material={materials['Aquarius 2']} position={[9.7, -0.25, 3,]} scale={0.05}   />
<mesh castShadow receiveShadow geometry={nodes.Box_39_2.geometry} material={materials['Aquarius 2']} position={[9.7, -26.54, 3,]} scale={0.05}   />
</group><group position={[-0.34, 0, -0.09,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes['3D_Text_18_-_0'].geometry} material={materials['Glamour 5']} position={[-48.53, 24.77, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_18_-_5'].geometry} material={materials['Glamour 5']} position={[-44.52, 24.77, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_19_-_0'].geometry} material={materials['Glamour 6']} position={[-48.67, 11.79, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_19_-_4'].geometry} material={materials['Glamour 6']} position={[-44.66, 11.79, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_20_-_0'].geometry} material={materials['Glamour 7']} position={[-48.54, -2.51, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_20_-_3'].geometry} material={materials['Glamour 7']} position={[-44.53, -2.51, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_21_-_0'].geometry} material={materials['Glamour 8']} position={[-48.56, -16.51, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_21_-_2'].geometry} material={materials['Glamour 8']} position={[-44.56, -16.51, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_22_-_0'].geometry} material={materials['Glamour 9']} position={[-48, -30.29, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_22_-_1'].geometry} material={materials['Glamour 9']} position={[-43.99, -30.29, 1.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials['Kentucky 1']} position={[48.33, -38.17, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_1.geometry} material={materials['Kentucky 1']} position={[48.33, -30.45, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_2.geometry} material={materials['Kentucky 1']} position={[48.33, -22.73, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_3.geometry} material={materials['Kentucky 1']} position={[48.33, -15.02, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_4.geometry} material={materials['Kentucky 1']} position={[48.33, -7.3, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_5.geometry} material={materials['Kentucky 1']} position={[48.33, 0.41, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_6.geometry} material={materials['Kentucky 1']} position={[48.33, 8.13, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_7.geometry} material={materials['Kentucky 1']} position={[48.33, 15.84, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_8.geometry} material={materials['Kentucky 1']} position={[48.33, 23.56, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_9.geometry} material={materials['Kentucky 1']} position={[48.33, 31.27, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_10.geometry} material={materials['Kentucky 1']} position={[48.33, 38.99, 0.2,]} rotation={[-Math.PI / 2, -Math.PI / 2, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_11.geometry} material={materials.Kentucky} position={[-36.8, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_12.geometry} material={materials.Kentucky} position={[-29.08, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_13.geometry} material={materials.Kentucky} position={[-21.37, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_14.geometry} material={materials.Kentucky} position={[-13.65, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_15.geometry} material={materials.Kentucky} position={[-5.94, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_16.geometry} material={materials.Kentucky} position={[1.78, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_17.geometry} material={materials.Kentucky} position={[9.49, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_18.geometry} material={materials.Kentucky} position={[17.21, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_19.geometry} material={materials.Kentucky} position={[24.92, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_20.geometry} material={materials.Kentucky} position={[32.64, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_21.geometry} material={materials.Kentucky} position={[40.36, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_1_22.geometry} material={materials.Kentucky} position={[48.07, -39.67, 0.2,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Box_25.geometry} material={materials['Cosmopolitan 5']} position={[-28, 14.09, 5.69,]} rotation={[Math.PI, Math.PI / 2, 0,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_26.geometry} material={materials['Cosmopolitan 5']} position={[-28, 0.04, 5.73,]} rotation={[Math.PI, Math.PI / 2, 0,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_28.geometry} material={materials['Cosmopolitan 5']} position={[-28, -28.02, 5.8,]} rotation={[Math.PI, Math.PI / 2, 0,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_11.geometry} material={materials['Cosmopolitan 41']} position={[-28, 28.12, 5.69,]} rotation={[Math.PI, Math.PI / 2, 0,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_18.geometry} material={materials['Frosted 1.5']} position={[-28.9, -0.32, 0.46,]} rotation={[0, 0, -Math.PI / 2,]} scale={[0.1, 0.09, 0.1,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_27.geometry} material={materials['Frosted 1.5']} position={[-28, -14.05, 5.73,]} rotation={[Math.PI, Math.PI / 2, 0,]} scale={0.1}   />
</group><group position={[-0.27, 0, -0.17,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<group position={[-5.24, 27.35, 14.18,]}   >
<mesh castShadow receiveShadow geometry={nodes['Box_10_-_baked_3'].geometry} material={materials['Cosmopolitan 26']} position={[92.57, 0, 77.29,]} scale={[0.3, 0.3, 1,]}   />
<mesh castShadow receiveShadow geometry={nodes['Box_10_-_baked_1'].geometry} material={materials['Cosmopolitan 26']} position={[3.17, 0, 9.95,]} scale={[0.3, 0.3, 1,]}   />
<mesh castShadow receiveShadow geometry={nodes['Box_10_-_baked'].geometry} material={materials['Cosmopolitan 26']} position={[-51.12, 0, 0,]} scale={[0.3, 0.3, 1,]}   />
<mesh castShadow receiveShadow geometry={nodes['Box_10_-_baked_2'].geometry} material={materials['Cosmopolitan 26']} position={[46.21, 0, 33.17,]} scale={[0.3, 0.3, 1,]}   />
</group><mesh castShadow receiveShadow geometry={nodes['3D_Text_25_-_3'].geometry} material={materials['Glamour 12']} position={[5.17, 14.75, 75.48,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_25_-_'].geometry} material={materials['Glamour 12']} position={[15.26, 14.75, 75.48,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_24_-_4'].geometry} material={materials['Glamour 11']} position={[51.26, 14.75, 118.52,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_24_-_'].geometry} material={materials['Glamour 11']} position={[61.35, 14.75, 118.52,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_23_-_1'].geometry} material={materials['Glamour 10']} position={[-93.16, 14.75, 42.95,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_23_-_'].geometry} material={materials['Glamour 10']} position={[-83.07, 14.75, 42.95,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_4_-_2'].geometry} material={materials['Glamour 3']} position={[-38.67, 14.75, 51.56,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_4_-_'].geometry} material={materials['Glamour 3']} position={[-28.58, 14.75, 51.56,]} scale={0.39}   />
<mesh castShadow receiveShadow geometry={nodes.Box_40.geometry} material={materials['Cosmopolitan 27']} position={[80.68, 27.69, 0,]} rotation={[0, 0, -2.36,]} scale={0.25}   />
<mesh castShadow receiveShadow geometry={nodes.Box_41.geometry} material={materials['Cosmopolitan 28']} position={[36.41, 27.52, 0,]} rotation={[0, 0, -2.36,]} scale={0.25}   />
<mesh castShadow receiveShadow geometry={nodes.Box_42.geometry} material={materials['Cosmopolitan 29']} position={[-7.63, 27.67, 0,]} rotation={[0, 0, -2.36,]} scale={0.25}   />
<mesh castShadow receiveShadow geometry={nodes.Box_43.geometry} material={materials['Cosmopolitan 30']} position={[-52.11, 27.34, 0,]} rotation={[0, 0, -2.36,]} scale={0.25}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_b'].geometry} material={materials['Irish Beauty']} position={[-98.17, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_b_1'].geometry} material={materials['Irish Beauty']} position={[-93.93, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_b_2'].geometry} material={materials['Irish Beauty']} position={[-79.48, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o'].geometry} material={materials['Irish Beauty']} position={[-97.27, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_1'].geometry} material={materials['Irish Beauty']} position={[-96.38, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_2'].geometry} material={materials['Irish Beauty']} position={[-88.77, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_3'].geometry} material={materials['Irish Beauty']} position={[-92.56, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_4'].geometry} material={materials['Irish Beauty']} position={[-91.67, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_5'].geometry} material={materials['Irish Beauty']} position={[-84.13, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_6'].geometry} material={materials['Irish Beauty']} position={[-77.09, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_7'].geometry} material={materials['Irish Beauty']} position={[-90.99, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_8'].geometry} material={materials['Irish Beauty']} position={[-95.04, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_o_9'].geometry} material={materials['Irish Beauty']} position={[-97.43, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_k'].geometry} material={materials['Irish Beauty']} position={[-95.5, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_k_1'].geometry} material={materials['Irish Beauty']} position={[-85.32, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_k_2'].geometry} material={materials['Irish Beauty']} position={[-90.78, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_k_3'].geometry} material={materials['Irish Beauty']} position={[-78.77, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_'].geometry} material={materials['Irish Beauty']} position={[-94.72, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-__1'].geometry} material={materials['Irish Beauty']} position={[-84.08, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-__2'].geometry} material={materials['Irish Beauty']} position={[-92.53, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_I'].geometry} material={materials['Irish Beauty']} position={[-93.95, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_I_1'].geometry} material={materials['Irish Beauty']} position={[-86.94, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_I_2'].geometry} material={materials['Irish Beauty']} position={[-93.37, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t'].geometry} material={materials['Irish Beauty']} position={[-93.54, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_1'].geometry} material={materials['Irish Beauty']} position={[-90.19, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_2'].geometry} material={materials['Irish Beauty']} position={[-89.29, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_3'].geometry} material={materials['Irish Beauty']} position={[-82.15, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_4'].geometry} material={materials['Irish Beauty']} position={[-95.4, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_5'].geometry} material={materials['Irish Beauty']} position={[-93.07, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_6'].geometry} material={materials['Irish Beauty']} position={[-82.36, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_7'].geometry} material={materials['Irish Beauty']} position={[-94.24, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_8'].geometry} material={materials['Irish Beauty']} position={[-94.77, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_9'].geometry} material={materials['Irish Beauty']} position={[-90.8, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_10'].geometry} material={materials['Irish Beauty']} position={[-79.32, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_11'].geometry} material={materials['Irish Beauty']} position={[-77.21, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_12'].geometry} material={materials['Irish Beauty']} position={[-94.38, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_13'].geometry} material={materials['Irish Beauty']} position={[-75.65, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_14'].geometry} material={materials['Irish Beauty']} position={[-98.05, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_15'].geometry} material={materials['Irish Beauty']} position={[-95.94, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_16'].geometry} material={materials['Irish Beauty']} position={[-93.28, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_17'].geometry} material={materials['Irish Beauty']} position={[-87.88, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_18'].geometry} material={materials['Irish Beauty']} position={[-81.91, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_19'].geometry} material={materials['Irish Beauty']} position={[-77.4, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_t_20'].geometry} material={materials['Irish Beauty']} position={[-76.89, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_h'].geometry} material={materials['Irish Beauty']} position={[-92.64, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_h_1'].geometry} material={materials['Irish Beauty']} position={[-93.72, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_h_2'].geometry} material={materials['Irish Beauty']} position={[-85.67, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_h_3'].geometry} material={materials['Irish Beauty']} position={[-82.28, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_h_4'].geometry} material={materials['Irish Beauty']} position={[-75.14, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_h_5'].geometry} material={materials['Irish Beauty']} position={[-92.76, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a'].geometry} material={materials['Irish Beauty']} position={[-91.74, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_1'].geometry} material={materials['Irish Beauty']} position={[-96.11, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_2'].geometry} material={materials['Irish Beauty']} position={[-86.14, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_3'].geometry} material={materials['Irish Beauty']} position={[-83.34, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_4'].geometry} material={materials['Irish Beauty']} position={[-89.63, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_5'].geometry} material={materials['Irish Beauty']} position={[-87.63, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_6'].geometry} material={materials['Irish Beauty']} position={[-79, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_7'].geometry} material={materials['Irish Beauty']} position={[-82.67, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_8'].geometry} material={materials['Irish Beauty']} position={[-90.28, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_9'].geometry} material={materials['Irish Beauty']} position={[-87.67, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_10'].geometry} material={materials['Irish Beauty']} position={[-81.38, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_a_11'].geometry} material={materials['Irish Beauty']} position={[-84.91, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s'].geometry} material={materials['Irish Beauty']} position={[-90.93, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_1'].geometry} material={materials['Irish Beauty']} position={[-89.85, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_2'].geometry} material={materials['Irish Beauty']} position={[-98.11, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_3'].geometry} material={materials['Irish Beauty']} position={[-78.78, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_4'].geometry} material={materials['Irish Beauty']} position={[-98.11, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_5'].geometry} material={materials['Irish Beauty']} position={[-88.26, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_6'].geometry} material={materials['Irish Beauty']} position={[-95.47, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_7'].geometry} material={materials['Irish Beauty']} position={[-92.58, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_8'].geometry} material={materials['Irish Beauty']} position={[-91.5, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_9'].geometry} material={materials['Irish Beauty']} position={[-95.08, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_10'].geometry} material={materials['Irish Beauty']} position={[-85.63, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_11'].geometry} material={materials['Irish Beauty']} position={[-80.56, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_12'].geometry} material={materials['Irish Beauty']} position={[-78.93, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_13'].geometry} material={materials['Irish Beauty']} position={[-92.06, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_14'].geometry} material={materials['Irish Beauty']} position={[-88.34, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_s_15'].geometry} material={materials['Irish Beauty']} position={[-87.26, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u'].geometry} material={materials['Irish Beauty']} position={[-89.15, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u_1'].geometry} material={materials['Irish Beauty']} position={[-80.57, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u_2'].geometry} material={materials['Irish Beauty']} position={[-96.37, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u_3'].geometry} material={materials['Irish Beauty']} position={[-84.07, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u_4'].geometry} material={materials['Irish Beauty']} position={[-95.99, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u_5'].geometry} material={materials['Irish Beauty']} position={[-84.93, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u_6'].geometry} material={materials['Irish Beauty']} position={[-91.36, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_u_7'].geometry} material={materials['Irish Beauty']} position={[-81.53, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r'].geometry} material={materials['Irish Beauty']} position={[-88.24, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_1'].geometry} material={materials['Irish Beauty']} position={[-96.71, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_2'].geometry} material={materials['Irish Beauty']} position={[-97.27, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_3'].geometry} material={materials['Irish Beauty']} position={[-94.06, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_4'].geometry} material={materials['Irish Beauty']} position={[-94.25, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_5'].geometry} material={materials['Irish Beauty']} position={[-86.85, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_6'].geometry} material={materials['Irish Beauty']} position={[-73.93, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_7'].geometry} material={materials['Irish Beauty']} position={[-93.87, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_8'].geometry} material={materials['Irish Beauty']} position={[-90.11, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_9'].geometry} material={materials['Irish Beauty']} position={[-89.75, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_r_10'].geometry} material={materials['Irish Beauty']} position={[-96.54, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_v'].geometry} material={materials['Irish Beauty']} position={[-87.65, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_v_1'].geometry} material={materials['Irish Beauty']} position={[-86.54, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_v_2'].geometry} material={materials['Irish Beauty']} position={[-75.49, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i'].geometry} material={materials['Irish Beauty']} position={[-86.91, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_1'].geometry} material={materials['Irish Beauty']} position={[-90.56, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_2'].geometry} material={materials['Irish Beauty']} position={[-75.66, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_3'].geometry} material={materials['Irish Beauty']} position={[-96.67, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_4'].geometry} material={materials['Irish Beauty']} position={[-97.41, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_5'].geometry} material={materials['Irish Beauty']} position={[-98.16, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_6'].geometry} material={materials['Irish Beauty']} position={[-89.15, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_7'].geometry} material={materials['Irish Beauty']} position={[-87.36, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_8'].geometry} material={materials['Irish Beauty']} position={[-76.37, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_9'].geometry} material={materials['Irish Beauty']} position={[-88.71, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_i_10'].geometry} material={materials['Irish Beauty']} position={[-86.56, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e'].geometry} material={materials['Irish Beauty']} position={[-85.8, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_1'].geometry} material={materials['Irish Beauty']} position={[-92.66, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_2'].geometry} material={materials['Irish Beauty']} position={[-84.55, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_3'].geometry} material={materials['Irish Beauty']} position={[-79.99, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_4'].geometry} material={materials['Irish Beauty']} position={[-77.18, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_5'].geometry} material={materials['Irish Beauty']} position={[-73.93, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_6'].geometry} material={materials['Irish Beauty']} position={[-94.88, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_7'].geometry} material={materials['Irish Beauty']} position={[-86.07, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_8'].geometry} material={materials['Irish Beauty']} position={[-80.2, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_9'].geometry} material={materials['Irish Beauty']} position={[-95.44, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_10'].geometry} material={materials['Irish Beauty']} position={[-92.82, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_11'].geometry} material={materials['Irish Beauty']} position={[-84.77, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_12'].geometry} material={materials['Irish Beauty']} position={[-78.8, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_13'].geometry} material={materials['Irish Beauty']} position={[-76.31, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_14'].geometry} material={materials['Irish Beauty']} position={[-74.75, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_15'].geometry} material={materials['Irish Beauty']} position={[-89.51, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_16'].geometry} material={materials['Irish Beauty']} position={[-78.58, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_17'].geometry} material={materials['Irish Beauty']} position={[-77.76, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_18'].geometry} material={materials['Irish Beauty']} position={[-74.23, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_19'].geometry} material={materials['Irish Beauty']} position={[-97.53, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_20'].geometry} material={materials['Irish Beauty']} position={[-91.86, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_21'].geometry} material={materials['Irish Beauty']} position={[-79.75, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_22'].geometry} material={materials['Irish Beauty']} position={[-78.23, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_e_23'].geometry} material={materials['Irish Beauty']} position={[-95.94, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d'].geometry} material={materials['Irish Beauty']} position={[-84.98, 27.41, 20.32,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_1'].geometry} material={materials['Irish Beauty']} position={[-91.84, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_2'].geometry} material={materials['Irish Beauty']} position={[-77.28, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_3'].geometry} material={materials['Irish Beauty']} position={[-97.27, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_4'].geometry} material={materials['Irish Beauty']} position={[-88.57, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_5'].geometry} material={materials['Irish Beauty']} position={[-86.25, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_6'].geometry} material={materials['Irish Beauty']} position={[-84.97, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_7'].geometry} material={materials['Irish Beauty']} position={[-96.88, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_8'].geometry} material={materials['Irish Beauty']} position={[-83.19, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_d_9'].geometry} material={materials['Irish Beauty']} position={[-82.43, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_c'].geometry} material={materials['Irish Beauty']} position={[-97.41, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_c_1'].geometry} material={materials['Irish Beauty']} position={[-76.36, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_c_2'].geometry} material={materials['Irish Beauty']} position={[-96.14, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m'].geometry} material={materials['Irish Beauty']} position={[-95.3, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_1'].geometry} material={materials['Irish Beauty']} position={[-87.5, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_2'].geometry} material={materials['Irish Beauty']} position={[-75.29, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_3'].geometry} material={materials['Irish Beauty']} position={[-83.17, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_4'].geometry} material={materials['Irish Beauty']} position={[-81.81, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_5'].geometry} material={materials['Irish Beauty']} position={[-88.68, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_6'].geometry} material={materials['Irish Beauty']} position={[-84.03, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_7'].geometry} material={materials['Irish Beauty']} position={[-95.12, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_8'].geometry} material={materials['Irish Beauty']} position={[-90.46, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_9'].geometry} material={materials['Irish Beauty']} position={[-86.19, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_10'].geometry} material={materials['Irish Beauty']} position={[-80.63, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_m_11'].geometry} material={materials['Irish Beauty']} position={[-79.27, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_l'].geometry} material={materials['Irish Beauty']} position={[-93.03, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_l_1'].geometry} material={materials['Irish Beauty']} position={[-86.81, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_l_2'].geometry} material={materials['Irish Beauty']} position={[-86.44, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_l_3'].geometry} material={materials['Irish Beauty']} position={[-83.92, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y'].geometry} material={materials['Irish Beauty']} position={[-81.63, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_1'].geometry} material={materials['Irish Beauty']} position={[-85.25, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_2'].geometry} material={materials['Irish Beauty']} position={[-81.84, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_3'].geometry} material={materials['Irish Beauty']} position={[-93.65, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_4'].geometry} material={materials['Irish Beauty']} position={[-80.44, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_5'].geometry} material={materials['Irish Beauty']} position={[-93.27, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_6'].geometry} material={materials['Irish Beauty']} position={[-81.39, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_7'].geometry} material={materials['Irish Beauty']} position={[-83.55, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_y_8'].geometry} material={materials['Irish Beauty']} position={[-77.9, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p'].geometry} material={materials['Irish Beauty']} position={[-80.89, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_1'].geometry} material={materials['Irish Beauty']} position={[-78.08, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_2'].geometry} material={materials['Irish Beauty']} position={[-98.17, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_3'].geometry} material={materials['Irish Beauty']} position={[-81.1, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_4'].geometry} material={materials['Irish Beauty']} position={[-86.53, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_5'].geometry} material={materials['Irish Beauty']} position={[-90.65, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_6'].geometry} material={materials['Irish Beauty']} position={[-80.65, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_7'].geometry} material={materials['Irish Beauty']} position={[-92.96, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_p_8'].geometry} material={materials['Irish Beauty']} position={[-84.82, 27.41, 31.73,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n'].geometry} material={materials['Irish Beauty']} position={[-73.1, 27.41, 21.95,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_1'].geometry} material={materials['Irish Beauty']} position={[-96.3, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_2'].geometry} material={materials['Irish Beauty']} position={[-78.18, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_3'].geometry} material={materials['Irish Beauty']} position={[-97.04, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_4'].geometry} material={materials['Irish Beauty']} position={[-83.95, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_5'].geometry} material={materials['Irish Beauty']} position={[-81.85, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_6'].geometry} material={materials['Irish Beauty']} position={[-79.67, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_7'].geometry} material={materials['Irish Beauty']} position={[-77.99, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_8'].geometry} material={materials['Irish Beauty']} position={[-75.07, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_9'].geometry} material={materials['Irish Beauty']} position={[-98.17, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_10'].geometry} material={materials['Irish Beauty']} position={[-89.47, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_11'].geometry} material={materials['Irish Beauty']} position={[-97.79, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_12'].geometry} material={materials['Irish Beauty']} position={[-76.94, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_13'].geometry} material={materials['Irish Beauty']} position={[-88.78, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_14'].geometry} material={materials['Irish Beauty']} position={[-86.99, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_15'].geometry} material={materials['Irish Beauty']} position={[-84.09, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_n_16'].geometry} material={materials['Irish Beauty']} position={[-76, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_g'].geometry} material={materials['Irish Beauty']} position={[-88.43, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_g_1'].geometry} material={materials['Irish Beauty']} position={[-86.09, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_g_2'].geometry} material={materials['Irish Beauty']} position={[-75.1, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_f'].geometry} material={materials['Irish Beauty']} position={[-83.24, 27.41, 23.58,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_f_1'].geometry} material={materials['Irish Beauty']} position={[-94.16, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_1'].geometry} material={materials['Irish Beauty']} position={[-91.61, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_5'].geometry} material={materials['Irish Beauty']} position={[-90.77, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_0'].geometry} material={materials['Irish Beauty']} position={[-89.93, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_0_1'].geometry} material={materials['Irish Beauty']} position={[-89.09, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_,'].geometry} material={materials['Irish Beauty']} position={[-87.55, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_w'].geometry} material={materials['Irish Beauty']} position={[-86.81, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_w_1'].geometry} material={materials['Irish Beauty']} position={[-76.21, 27.41, 25.21,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_'].geometry} material={materials['Irish Beauty']} position={[-92.91, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_x'].geometry} material={materials['Irish Beauty']} position={[-77.98, 27.41, 26.84,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_x_1'].geometry} material={materials['Irish Beauty']} position={[-96.71, 27.41, 30.1,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_L'].geometry} material={materials['Irish Beauty']} position={[-91.76, 27.41, 28.47,]} scale={0.03}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_28_-_L_1'].geometry} material={materials['Irish Beauty']} position={[-98.19, 27.41, 31.73,]} scale={0.03}   />
</group><group position={[-0.19, 0, -0.09,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes['3D_Text_15_-_2'].geometry} material={materials['Impulse 10']} position={[-59.83, -4.57, 18.84,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_15_-_0'].geometry} material={materials['Impulse 10']} position={[-56.23, -4.57, 18.84,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_17_-_5'].geometry} material={materials['Impulse 12']} position={[-59.91, -4.57, 53.56,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_17_-_0'].geometry} material={materials['Impulse 12']} position={[-56.32, -4.57, 53.56,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_14_-_4'].geometry} material={materials['Impulse 9']} position={[-59.65, -4.57, 42.13,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_14_-_0'].geometry} material={materials['Impulse 9']} position={[-56.06, -4.57, 42.13,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_9_-_1'].geometry} material={materials['Impulse 4']} position={[-60.04, -4.57, 7.05,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_9_-_0'].geometry} material={materials['Impulse 4']} position={[-56.44, -4.57, 7.05,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes.Box_12.geometry} material={materials['Cosmopolitan 29']} position={[45.59, 0.11, 0.78,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_4.geometry} material={materials['Cosmopolitan 28']} position={[-46.91, -2.46, 1.28,]} scale={0.41}   />
<mesh castShadow receiveShadow geometry={nodes.Box_13.geometry} material={materials['Cosmopolitan 28']} position={[-39.25, 0, 0.78,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_14.geometry} material={materials['Cosmopolitan 28']} position={[-25.14, 0.07, 0.78,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_15.geometry} material={materials['Cosmopolitan 28']} position={[-11.1, 0.07, 0.78,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_16.geometry} material={materials['Cosmopolitan 28']} position={[2.97, 0.11, 0.78,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_17.geometry} material={materials['Cosmopolitan 28']} position={[17.06, 0.11, 0.78,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes.Box_10.geometry} material={materials['Cosmopolitan 29']} position={[3.33, 0, 0,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_16_-_3'].geometry} material={materials['Impulse 11']} position={[-59.81, -4.57, 30.27,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_16_-_0'].geometry} material={materials['Impulse 11']} position={[-56.21, -4.57, 30.27,]} scale={0.14}   />
<mesh castShadow receiveShadow geometry={nodes.Box_24.geometry} material={materials['Frosted 1.5']} position={[31.38, 0.11, 0.78,]} rotation={[0, 0, -Math.PI / 2,]} scale={0.1}   />
</group><group position={[-0.07, 0, 0.05,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes['toggle_-_baked_2'].geometry} material={materials['Cosmopolitan 36']} position={[8.17, 3, 46.76,]} rotation={[1.57, 0, -Math.PI,]} scale={[0.26, 0.26, 0.23,]}   />
<mesh castShadow receiveShadow geometry={nodes['toggle_-_baked_4'].geometry} material={materials['Cosmopolitan 37']} position={[32.31, 3, 68.42,]} rotation={[1.57, 0, -Math.PI,]} scale={[0.26, 0.26, 0.23,]}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_23_-_2'].geometry} material={materials.Bastille} position={[-54.27, 0.02, 13.32,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_23_-_0'].geometry} material={materials.Bastille} position={[-52.04, 0.02, 13.32,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_24_-_4_1'].geometry} material={materials['Bastille 1']} position={[-54.23, 0.02, 28.1,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_24_-_0'].geometry} material={materials['Bastille 1']} position={[-51.99, 0.02, 28.1,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_26_-_8'].geometry} material={materials['Bastille 3']} position={[-54.27, 0.02, 57.8,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_26_-_0'].geometry} material={materials['Bastille 3']} position={[-52.03, 0.02, 57.8,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_27_-_1'].geometry} material={materials['Bastille 4']} position={[-56.39, 0.02, 72.58,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_27_-_0'].geometry} material={materials['Bastille 4']} position={[-54.16, 0.02, 72.58,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_27_-_0_1'].geometry} material={materials['Bastille 4']} position={[-51.92, 0.02, 72.58,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes.Box_34.geometry} material={materials['Morning Rush']} position={[-46.04, 0.02, 14.63,]} scale={0.01}   />
<mesh castShadow receiveShadow geometry={nodes['Box_1_-_baked'].geometry} material={materials['Cosmopolitan 31']} position={[52.22, 0.02, 0,]} scale={0.08}   />
<mesh castShadow receiveShadow geometry={nodes['Box_3_-_baked'].geometry} material={materials['Cosmopolitan 29']} position={[-34.15, 0.02, 24.34,]} rotation={[0, -0.84, 0,]} scale={[0.22, 0.02, 0.02,]}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_25_-_6'].geometry} material={materials['Bastille 2']} position={[-54.27, 0.02, 42.73,]} scale={0.09}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_25_-_0'].geometry} material={materials['Bastille 2']} position={[-52.03, 0.02, 42.73,]} scale={0.09}   />
</group><group position={[0.11, 0, -0.06,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes.Cylinder_11.geometry} material={materials['Cosmopolitan 28']} position={[23.28, -4.23, 4.73,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.08}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_12.geometry} material={materials['Cosmopolitan 30']} position={[23.28, 85.84, 4.73,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.08}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_13.geometry} material={materials['Cosmopolitan 29']} position={[23.28, 120.96, 4.73,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.08}   />
<mesh castShadow receiveShadow geometry={nodes.Image_Plane_1.geometry} material={materials['Andres 4']} position={[1.96, -4.67, 25.83,]} rotation={[1.56, 0, 0,]} scale={[0.1, 0.1, 0.4,]}   />
</group><group position={[0.04, 0, 0.04,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes.Box_8.geometry} material={materials['Cosmopolitan 28']} position={[24.53, 13.2, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes.Box_9.geometry} material={materials['Cosmopolitan 29']} position={[24.53, 53.19, 0,]} scale={[0.16, 0.3, 0.16,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_19.geometry} material={materials['Cosmopolitan 30']} position={[24.53, 109.58, 0,]} scale={[0.16, 0.35, 0.16,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_20.geometry} material={materials['Frosted 1.5']} position={[24.53, 146.56, 0,]} scale={[0.16, 0.05, 0.16,]}   />
</group><group position={[0.13, 0, 0.04,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes.Box_8_1.geometry} material={materials['Cosmopolitan 32']} position={[24.52, 6.6, 0,]} scale={0.16}   />
<mesh castShadow receiveShadow geometry={nodes.Box_9_1.geometry} material={materials['Cosmopolitan 29']} position={[24.52, 53.19, 0,]} scale={[0.16, 0.3, 0.16,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_19_1.geometry} material={materials['Cosmopolitan 30']} position={[24.52, 109.58, 0,]} scale={[0.16, 0.35, 0.16,]}   />
<mesh castShadow receiveShadow geometry={nodes.Cylinder_10.geometry} material={materials['Frosted 1.5']} position={[0.14, 0.18, 0,]} scale={0.3}   />
</group><group position={[-0.04, 0, -0.05,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<group position={[0.13, 26.74, 0.11,]}   >
<group position={[-49.18, -26.74, -0.11,]}   >
<mesh castShadow receiveShadow geometry={nodes['Rectangle_-_Stroke'].geometry} material={materials.entity_7} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Path_-_Stroke'].geometry} material={materials.entity_8} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Circle_-_Stroke'].geometry} material={materials.entity_9} position={[0, 0, -0.21,]} scale={1.04}   />
</group><group position={[-16.48, -26.74, -0.11,]}   >
<mesh castShadow receiveShadow geometry={nodes['Rectangle_-_Stroke_1'].geometry} material={materials.entity_7} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Path_-_Stroke_1'].geometry} material={materials.entity_8} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Circle_-_Stroke_1'].geometry} material={materials.entity_9} position={[0, 0, -0.21,]} scale={1.04}   />
</group><group position={[16.22, -26.74, -0.11,]}   >
<mesh castShadow receiveShadow geometry={nodes['Rectangle_-_Stroke_2'].geometry} material={materials.entity_7} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Path_-_Stroke_2'].geometry} material={materials.entity_8} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Circle_-_Stroke_2'].geometry} material={materials.entity_9} position={[0, 0, -0.21,]} scale={1.04}   />
</group><group position={[48.92, -26.74, -0.11,]}   >
<mesh castShadow receiveShadow geometry={nodes['Rectangle_-_Stroke_3'].geometry} material={materials.entity_7} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Path_-_Stroke_3'].geometry} material={materials.entity_8} position={[0, 0, -0.21,]} scale={1.04}   />
<mesh castShadow receiveShadow geometry={nodes['Circle_-_Stroke_3'].geometry} material={materials.entity_9} position={[0, 0, -0.21,]} scale={1.04}   />
</group><mesh castShadow receiveShadow geometry={nodes.Cone_3.geometry} material={materials['Cosmopolitan 27']} position={[48.78, -0.01, 0,]} rotation={[0, 0, Math.PI / 4,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes.Cone_2.geometry} material={materials['Cosmopolitan 28']} position={[16.12, 0.08, 0,]} rotation={[0, 0, Math.PI / 4,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes.Cone_1.geometry} material={materials['Cosmopolitan 29']} position={[-16.61, 0.1, 0,]} rotation={[0, 0, Math.PI / 4,]} scale={0.38}   />
<mesh castShadow receiveShadow geometry={nodes.Cone.geometry} material={materials['Cosmopolitan 30']} position={[-49.14, -0.15, 0,]} rotation={[0, 0, Math.PI / 4,]} scale={0.38}   />
</group><mesh castShadow receiveShadow geometry={nodes['3D_Text_10_-_0'].geometry} material={materials['Impulse 5']} position={[-23.38, -31.11, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_10_-_2'].geometry} material={materials['Impulse 5']} position={[-16.72, -31.11, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_12_-_0'].geometry} material={materials['Impulse 7']} position={[41.67, -31.11, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_12_-_4'].geometry} material={materials['Impulse 7']} position={[48.33, -31.11, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_11_-_0'].geometry} material={materials['Impulse 6']} position={[9.41, -31.11, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_11_-_3'].geometry} material={materials['Impulse 6']} position={[16.06, -31.11, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_13_-_0'].geometry} material={materials['Impulse 8']} position={[-55.55, -30.6, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_13_-_1'].geometry} material={materials['Impulse 8']} position={[-48.89, -30.6, 0.65,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.26}   />
</group><group position={[0.08, 0, -0.18,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes['3D_Text_5_-_D'].geometry} material={materials['Glamour 4']} position={[-68.4, 0.33, 73.95,]} scale={0.18}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_3_-_C'].geometry} material={materials['Glamour 2']} position={[-67.92, 0.33, 59.43,]} scale={0.18}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_2_-_B'].geometry} material={materials['Glamour 1']} position={[-68.1, 0.33, 33.55,]} scale={0.18}   />
<mesh castShadow receiveShadow geometry={nodes['3D_Text_1_-_A'].geometry} material={materials.Glamour} position={[-67.93, 0.33, 4.93,]} scale={0.18}   />
<mesh castShadow receiveShadow geometry={nodes.Box_5.geometry} material={materials['Aquarius 1']} position={[-16.82, 0, 6.89,]} rotation={[0, -Math.PI / 2, 0,]} scale={[0.01, 0.01, 0.03,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_6.geometry} material={materials['Aquarius 2']} position={[-16.82, 0, 35.39,]} rotation={[0, -Math.PI / 2, 0,]} scale={[0.01, 0.01, 0.03,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_7.geometry} material={materials['Aquarius 3']} position={[7.89, 0, 77.05,]} rotation={[0, -Math.PI / 2, 0,]} scale={[0.01, 0.01, 0.05,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_4.geometry} material={materials.Aquarius} position={[2.91, 0, 61.3,]} rotation={[0, -Math.PI / 2, 0,]} scale={[0.01, 0.01, 0.04,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_3.geometry} material={materials['Cosmopolitan 27']} position={[8.41, 0, 71.1,]} scale={[1, 1, 0.37,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_1.geometry} material={materials['Cosmopolitan 28']} position={[8.41, 0, 11.3,]} scale={[1, 1, 0.37,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box.geometry} material={materials['Cosmopolitan 30']} position={[8.41, 0, 0,]} scale={[1, 1, 0.37,]}   />
<mesh castShadow receiveShadow geometry={nodes.Box_2.geometry} material={materials['Frosted 1.5']} position={[8.41, 0, 49.48,]} scale={[1, 1, 0.37,]}   />
</group><group position={[0.04, 0.01, 0.17,]} rotation={[-Math.PI, 0, 0,]} scale={0}   >
<group position={[0, 7.73, 30.93,]} rotation={[Math.PI / 2, 0, 2.62,]} scale={0.62}   >
<mesh castShadow receiveShadow geometry={nodes.Cylinder_3.geometry} material={materials['Cosmopolitan 28']}   />
</group><group position={[0, 7.75, 30.93,]} rotation={[Math.PI / 2, 0, Math.PI / 6,]} scale={0.62}   >
<mesh castShadow receiveShadow geometry={nodes.Cylinder_3_1.geometry} material={materials['Cosmopolitan 27']}   />
</group><group position={[0, 4.65, 30.93,]} rotation={[Math.PI / 2, 0, -2.62,]} scale={0.62}   >
<mesh castShadow receiveShadow geometry={nodes.Cylinder_3_2.geometry} material={materials['Cosmopolitan 29']}   />
</group><group position={[0, 7.75, 30.93,]} rotation={[Math.PI / 2, 0, -Math.PI / 2,]} scale={0.62}   >
<mesh castShadow receiveShadow geometry={nodes.Cylinder_3_3.geometry} material={materials['Frosted 1.5']}   />
</group></group><group position={[-0.08, 0, 0.15,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<mesh castShadow receiveShadow geometry={nodes.Box_35.geometry} material={materials['Cosmopolitan 29']} position={[39.79, -3.22, 2.49,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.05}   />
<mesh castShadow receiveShadow geometry={nodes.Box_36.geometry} material={materials['Cosmopolitan 27']} position={[22.44, -3.22, 2.49,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.05}   />
<mesh castShadow receiveShadow geometry={nodes.Box_37.geometry} material={materials['Cosmopolitan 30']} position={[47.89, 4.87, 2.49,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.05}   />
<mesh castShadow receiveShadow geometry={nodes.Box_38.geometry} material={materials['Cosmopolitan 28']} position={[31.34, 0.25, 2.49,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0.05}   />
</group><group position={[-0.21, 0, 0.04,]} rotation={[-Math.PI / 2, 0, 0,]} scale={0}   >
<group position={[-40.11, 0, -1.25,]} rotation={[0, 0, -Math.PI,]} scale={0.48}   >
<mesh castShadow receiveShadow geometry={nodes.Cylinder_7.geometry} material={materials['Cosmopolitan 29']} position={[-161.04, 61.16, 7.3,]} rotation={[0, 0, Math.PI,]} scale={2.09}   />
<mesh castShadow receiveShadow geometry={nodes.Stroke_1.geometry} material={materials['Cool Touch 1']} position={[-6.78, 0, 13.34,]} scale={1.1}   />
<mesh castShadow receiveShadow geometry={nodes.Plate_1.geometry} material={materials['Object material 10']} position={[-6.78, 0, 2.62,]}   />
<mesh castShadow receiveShadow geometry={nodes.Image_Plane_13.geometry} material={materials['Columbia 1']} position={[-85.36, -38.29, 40.33,]} rotation={[-Math.PI / 2, 0, -Math.PI,]} scale={[0.19, 0.19, 1,]}   />
</group><group position={[33.62, 0, -1.25,]} rotation={[0, 0, -Math.PI,]} scale={0.48}   >
<mesh castShadow receiveShadow geometry={nodes.Cylinder_8.geometry} material={materials['Cosmopolitan 28']} position={[70.36, -40.62, 7.3,]} rotation={[0, 0, Math.PI,]} scale={2.09}   />
<mesh castShadow receiveShadow geometry={nodes.Stroke_2.geometry} material={materials['Cool Touch 1']} position={[-6.78, 0, 13.34,]} scale={1.1}   />
<mesh castShadow receiveShadow geometry={nodes.Plate_2.geometry} material={materials['Object material 13']} position={[-6.78, 0, 2.62,]}   />
<mesh castShadow receiveShadow geometry={nodes.Image_Plane_2.geometry} material={materials.Brimstone} position={[-11.72, 64.1, 40.33,]} rotation={[-Math.PI / 2, 0, -Math.PI,]} scale={[0.19, 0.19, 1,]}   />
</group><mesh castShadow receiveShadow geometry={nodes.Cylinder_9.geometry} material={materials['Cosmopolitan 30']} position={[-36.88, -17.62, 2.24,]}   />
<mesh castShadow receiveShadow geometry={nodes.Stroke.geometry} material={materials['Cool Touch 1']} position={[0, 0, 5.13,]} rotation={[0, 0, -Math.PI,]} scale={0.52}   />
<mesh castShadow receiveShadow geometry={nodes.Plate.geometry} material={materials['Object material 12']} rotation={[0, 0, -Math.PI,]} scale={0.48}   />
<mesh castShadow receiveShadow geometry={nodes.Image_Plane_14.geometry} material={materials.Hampton} position={[-35.81, -18.39, 18.28,]} rotation={[Math.PI / 2, 0, 0,]} scale={[0.09, 0.09, 0.48,]}   />
</group>
    </group>
  )
}

useGLTF.preload('./build.gltf',true,false)