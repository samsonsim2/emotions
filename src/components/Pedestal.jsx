
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pedestal(props) {
  const { nodes, materials } = useGLTF("/models/RevisedV2/Pedestal.gltf");
  return (
    <group {...props} dispose={null} scale={0.01} position={[0,-1.1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Groves.geometry}
        material={nodes.Groves.material}
        position={[0, -293.251, 0]}
       ><meshPhongMaterial color={"#E8E8E8"}/></mesh>
    </group>
  );
}

useGLTF.preload("/models/RevisedV2/Pedestal.gltf");