import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
 
export function HappyParticles(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Revised/HappyParticles.gltf");
  const { actions ,names} = useAnimations(animations, group);

  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.01} position={[0,-1,0]}>
      <group >
        <group name="HappyParticles" position={[15.479, 260.121, -1]} >
          <mesh
            name="Diamond"
            castShadow
            receiveShadow
            geometry={nodes.Diamond.geometry}
            material={materials["Mat.1"]}
            position={[-69.744, 13.477, 1]}
            scale={[0.689, 0.689, 0.207]}
          />
          <mesh
            name="Diamond_1"
            castShadow
            receiveShadow
            geometry={nodes.Diamond_1.geometry}
            material={materials["Mat.1"]}
            position={[54.071, -41.934, 1]}
            scale={[0.974, 0.974, 0.292]}
          />
          <mesh
            name="Heart1"
            castShadow
            receiveShadow
            geometry={nodes.Heart1.geometry}
            material={materials["Mat.1"]}
            position={[-102.226, -48.43, 1]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0}
          />
          <mesh
            name="Heart1_1"
            castShadow
            receiveShadow
            geometry={nodes.Heart1_1.geometry}
            material={materials["Mat.1"]}
            position={[59.804, 23.413, 1]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0}
          />
          <mesh
            name="Heart2"
            castShadow
            receiveShadow
            geometry={nodes.Heart2.geometry}
            material={materials["Mat.1"]}
            position={[8.596, 60.481, 1]}
            scale={0.473}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Revised/HappyParticles.gltf");
