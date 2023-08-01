import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
 
export function SurprisedV2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/RevisedV2/Surprised.gltf");
  const { actions ,names} = useAnimations(animations, group);
  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn().play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.01}>
      <group>
        <group name="Surprised(70Frames)" position={[0.228, -100.887, 4.453]}>
          <mesh
            name="wowai"
            castShadow
            receiveShadow
            geometry={nodes.wowai.geometry}
            material={materials["Mat.2"]}
            position={[14.888, 428.016, -20.974]}
          />
          <group name="Body" position={[-0.228, -4.493, -4.453]}>
            <group name="Capsule" position={[0, -94.617, -32.504]}>
              <skinnedMesh
                name="Capsule_1"
                geometry={nodes.Capsule_1.geometry}
                material={materials["Mat.1"]}
                skeleton={nodes.Capsule_1.skeleton}
              />
              <primitive object={nodes.Joint1} />
            </group>
            <primitive object={nodes.SurprisedHip_R} />
            <primitive object={nodes.SurprisedHip_L} />
          </group>
          <group name="SurprisedLegs" position={[0.457, 25.774, 8.906]}>
            <skinnedMesh
              name="SurprisedLegs_1"
              geometry={nodes.SurprisedLegs_1.geometry}
              material={materials["Mat.1"]}
              skeleton={nodes.SurprisedLegs_1.skeleton}
            />
          </group>
          <mesh
            name="Body_1"
            castShadow
            receiveShadow
            geometry={nodes.Body_1.geometry}
            material={materials["Mat.1"]}
            position={[-0.228, -4.493, -4.453]}
            scale={[1.073, 0.981, 1]}
          >
            <mesh
              name="Ears"
              castShadow
              receiveShadow
              geometry={nodes.Ears.geometry}
              material={materials["Mat.1"]}
              position={[-27.549, 183.157, 57.236]}
              scale={[1, 0.781, 1]}
            />
            <mesh
              name="Eyes"
              castShadow
              receiveShadow
              geometry={nodes.Eyes.geometry}
              material={materials["Mat.2"]}
              position={[0, 123.284, 109.733]}
              scale={[1, 0.272, 1]}
             > <meshStandardMaterial color={"#F5F5F5"}/></mesh>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/RevisedV2/Surprised.gltf");