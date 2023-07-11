
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function AngryV1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Revised/Angry.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} scale={0.01} position={[0,-1.1,0]}>
      <group>
        <mesh
          name="Angry"
          castShadow
          receiveShadow
          geometry={nodes.Angry.geometry}
          material={materials["Mat.1"]}
          position={[0, -14.941, -8.096]}
          scale={68}
        >
          <mesh
            name="Leg"
            castShadow
            receiveShadow
            geometry={nodes.Leg.geometry}
            material={materials["Mat.1"]}
            position={[-0.322, 1.502, 0.07]}
            scale={0.015}
          />
          <mesh
            name="Tail"
            castShadow
            receiveShadow
            geometry={nodes.Tail.geometry}
            material={materials["Mat.1"]}
            position={[0, 1.554, 0.119]}
            scale={0.015}
          />
          <mesh
            name="Mouth"
            castShadow
            receiveShadow
            geometry={nodes.Mouth.geometry}
            material={materials["Mat.1"]}
            position={[0, 1.691, 0.909]}
            scale={0.015}
           ><meshToonMaterial/></mesh>
          <group name="Eyes" position={[0, 1.65, 0.119]} scale={0.015}>
            <mesh
              name="Eyes-Mat1"
              castShadow
              receiveShadow
              geometry={nodes["Eyes-Mat1"].geometry}
              material={materials["Mat.1"]}
            ><meshToonMaterial/></mesh>
            <mesh
              name="Eyes-Mat1_1"
              castShadow
              receiveShadow
              geometry={nodes["Eyes-Mat1_1"].geometry}
              material={materials["Mat.1"]}
            />
          </group>
          <meshStandardMaterial color={"grey"}/>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Revised/Angry.gltf");
