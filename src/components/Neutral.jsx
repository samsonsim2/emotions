import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Neutral(props) {
  const { nodes, materials } = useGLTF("/models/Neutral.gltf");
  return (
    <group {...props} dispose={null} scale={0.01}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.neutral.geometry}
        material={nodes.neutral.material}
      />
    </group>
  );
}

useGLTF.preload("/models/Neutral.gltf");
