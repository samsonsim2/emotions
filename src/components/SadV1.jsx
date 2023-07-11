
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
 
export function SadV1(props) {
  const { nodes, materials } = useGLTF("/models/Revised/Sad.gltf");
  return (
    <group {...props} dispose={null} scale={0.01} position={[0,-1.1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sad.geometry}
        material={materials["Mat.1"]}
      >
        <group position={[0, 118.236, 70.281]} rotation={[-Math.PI / 6, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyes_1.geometry}
            material={nodes.Eyes_1.material}
          ><meshToonMaterial/></mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Eyes-Mat1"].geometry}
            material={materials["Mat.1"]}
           ></mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Legs.geometry}
          material={materials["Mat.1"]}
          position={[-47.709, -11.644, 40.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tail.geometry}
          material={materials["Mat.1"]}
          position={[-47.709, -11.644, 40.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sweep_1.geometry}
          material={materials["Mat.1"]}
          position={[0.764, 64.316, 77.576]}
         ><meshToonMaterial/></mesh>
          <meshStandardMaterial color={"grey"}/>
      </mesh>
     
    </group>
  );
}

useGLTF.preload("/models/revised/Sad.gltf");
