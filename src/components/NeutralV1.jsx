
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NeutralV1(props) {
  const { nodes, materials } = useGLTF("/models/Revised//Neutral.gltf");
  return (
    <group {...props} dispose={null} scale={0.01} position={[0,-1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Neutral.geometry}
        material={materials["Mat.1"]}
        position={[-0.077, 0.225, 0.091]}
        scale={80}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sweep.geometry}
          material={materials["Mat.1"]}
          position={[-0.362, 1.328, -0.098]}
          rotation={[0, -0.262, 0]}
          scale={0.013}
        > <meshStandardMaterial color={"grey"}/></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tail.geometry}
          material={materials["Mat.1"]}
          position={[0.001, 1.18, -0.001]}
          scale={0.013}
        > <meshStandardMaterial color={"grey"}/></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mouth.geometry}
          material={materials["Mat.1"]}
          position={[0.001, 1.112, 0.964]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.013}
        > <meshToonMaterial/></mesh>
        <group
          position={[0.001, 1.4, 0.847]}
          rotation={[-0.262, 0, 0]}
          scale={0.013}
        >
           <mesh
            castShadow
            receiveShadow
            geometry={nodes["Eyes-Mat1"].geometry}
            material={materials["Mat.1"]}
          >
            <meshBasicMaterial color={"white"}/>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Eyes-Mat1_1"].geometry}
            material={materials["Mat.1"]}
          />
        </group>
        <meshStandardMaterial color={"grey"}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/Revised/Neutral.gltf");