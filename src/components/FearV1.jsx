
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function FearV1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Revised/Fear.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} scale={0.01} position={[0,-1,0]}>
      <group>
        <mesh
          name="Fear"
          castShadow
          receiveShadow
          geometry={nodes.Fear.geometry}
          material={materials["Mat.1"]}
          position={[-1.919, 61.107, -0.338]}
        >
          <mesh
            name="Tail"
            castShadow
            receiveShadow
            geometry={nodes.Tail.geometry}
            material={materials["Mat.1"]}
            position={[17.39, 48.688, -0.527]}
          />
          <mesh
            name="Legs"
            castShadow
            receiveShadow
            geometry={nodes.Legs.geometry}
            material={materials["Mat.1"]}
            position={[-17.303, 23.471, 5.181]}
          />
          <mesh
            name="Mouth"
            castShadow
            receiveShadow
            geometry={nodes.Mouth.geometry}
            material={nodes.Mouth.material}
            position={[-13.738, -2.582, 89.132]}
          ><meshToonMaterial/></mesh>
          <group
            name="Eyes"
            position={[-20.791, -9.241, 60.834]}
            rotation={[0, -0.175, 0]}
          >
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

useGLTF.preload("/models/Revised/Fear.gltf");