
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei"
export function Cube( ) {

    const props = useTexture({
        map: 'diffuse.png'
        
      })
  const { nodes, materials } = useGLTF("/models/Cube.gltf");
  return (
    <group {...props} dispose={null} scale={0.01}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
       
       ><meshStandardMaterial {...props}/></mesh>
    </group>
  );
}

useGLTF.preload("/models/Cube.gltf");