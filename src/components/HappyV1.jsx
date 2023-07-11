
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HappyV1(props) {
  const { nodes, materials } = useGLTF("/models/Revised/Happy.gltf");
  return (
    <group {...props} dispose={null} scale={0.01} position={[0,-1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Happy.geometry}
        material={materials["Mat.1"]}
        position={[-0.077, 0.225, 0.091]}
        scale={80}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Teeth.geometry}
          material={materials["Mat.1"]}
          position={[0.001, 1.383, 0.565]}
          scale={0.013}
         ><meshToonMaterial/></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sweep.geometry}
          material={materials["Mat.1"]}
          position={[-0.18, 1.328, -0.05]}
          scale={0.013}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tail.geometry}
          material={materials["Mat.1"]}
          position={[0.001, 1.18, -0.001]}
          scale={0.013}
        />
        <group
          position={[0.001, 1.795, 0.691]}
          rotation={[-2.094, 0, -Math.PI]}
          scale={0.013}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Eyes-Mat1"].geometry}
            material={materials["Mat.1"]}
          ><meshToonMaterial/></mesh>
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

useGLTF.preload("/models/Revised/Happy.gltf");
