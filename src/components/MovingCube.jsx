import React, { useRef } from "react";
import { MeshDistortMaterial, useGLTF } from "@react-three/drei";
 
export function MovingCube(props) {
  const { nodes, materials } = useGLTF("/models/movingCube.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1.geometry}
        material={nodes.Cube1.material}
        scale={0.01}
       >
       <MeshDistortMaterial distort={1} speed={10}   />
       </mesh>
    </group>
  );
}

useGLTF.preload("/models/movingCube.gltf");
