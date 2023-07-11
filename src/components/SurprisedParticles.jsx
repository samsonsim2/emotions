import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
 
export function SurprisedParticles(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Revised/SurprisedParticles.gltf");
  const { actions,names } = useAnimations(animations, group);
  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.01} position={[0,-1,0]}>
      <group>
        <group name="SurprisedParticles" position={[2.014, 248.511, 0]}>
          <group
            name="Null7"
            position={[94.939, 34.325, 0]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
          >
            <mesh
              name="Capsule"
              castShadow
              receiveShadow
              geometry={nodes.Capsule.geometry}
              material={materials["Mat.1"]}
              position={[-51.191, 96.953, 0]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1, 0.5, 1]}
            />
          </group>
          <group
            name="Null6"
            position={[-2.014, -56.506, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              name="Capsule_1"
              castShadow
              receiveShadow
              geometry={nodes.Capsule_1.geometry}
              material={materials["Mat.1"]}
              position={[-51.191, 96.953, 0]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1, 0.5, 1]}
            />
          </group>
          <group
            name="Null5"
            position={[-42.866, 124.289, 0]}
            rotation={[0, 0, -2.679]}
          >
            <mesh
              name="Capsule_2"
              castShadow
              receiveShadow
              geometry={nodes.Capsule_2.geometry}
              material={materials["Mat.1"]}
              position={[-51.191, 96.953, 0]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1, 0.5, 1]}
            />
          </group>
          <group
            name="Null4"
            position={[-48.045, -45.602, 0]}
            rotation={[0, 0, -0.498]}
          >
            <mesh
              name="Capsule_3"
              castShadow
              receiveShadow
              geometry={nodes.Capsule_3.geometry}
              material={materials["Mat.1"]}
              position={[-51.191, 96.953, 0]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1, 0.5, 1]}
            />
          </group>
          <group name="Null3" position={[-2.014, -56.506, 0]}>
            <mesh
              name="Capsule_4"
              castShadow
              receiveShadow
              geometry={nodes.Capsule_4.geometry}
              material={materials["Mat.1"]}
              position={[-51.191, 96.953, 0]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1, 0.5, 1]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Revised/SurprisedParticles.gltf");
