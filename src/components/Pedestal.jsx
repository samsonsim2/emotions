/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Pedestal(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Revised/pedestal.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} scale={0.01} position={[0,-2.2,0]}>
      <group>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0, -263.433, 0]}
        ><meshStandardMaterial color={"#D3D3D3"}/></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Revised/pedestal.gltf");
