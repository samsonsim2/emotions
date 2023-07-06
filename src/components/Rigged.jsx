import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, MeshDistortMaterial, GradientTexture } from "@react-three/drei";
 
export function Rigged(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Base2.gltf");
  const { actions,names } = useAnimations(animations, group);
  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01} position={[0, -1, 0]} rotation={[0,Math.PI , 0]}>
        <group
          name="Sweep"
          position={[24.648, 0, 58.81]}
          rotation={[0, 0.167, 0]}
        >
          <skinnedMesh
            name="Sweep_1"
            geometry={nodes.Sweep_1.geometry}
            material={materials["Mat.1"]}
            skeleton={nodes.Sweep_1.skeleton}
          />
          <primitive object={nodes.Joint1} />
        </group>
        <group name="Legs" position={[-17.564, 0, 0]}>
          <skinnedMesh
            name="Legs_1"
            geometry={nodes.Legs_1.geometry}
            material={materials["Mat.1"]}
            skeleton={nodes.Legs_1.skeleton}
          />
          <primitive object={nodes.RightLegJoint} />
          <primitive object={nodes.LeftLegJoint} />
        </group>
        <mesh
          name="Body"
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={materials["Mat.1"]}
          position={[0, 54.084, 6.169]}
          scale={100}
        >
          <group
            name="Null"
            position={[-0.348, 1.235, -0.9]}
            rotation={[1.796, 0, 0]}
            scale={[0.01, 0.01, 0.004]}
          >
            <mesh
              name="Disc3"
              castShadow
              receiveShadow
              geometry={nodes.Disc3.geometry}
              material={materials.Mat}
              position={[0.207, 0.185, 0]}
            />
            <mesh
              name="Disc2"
              castShadow
              receiveShadow
              geometry={nodes.Disc2.geometry}
              material={materials["Mat.1"]}
              position={[-0.207, -0.185, 0]}
            />
          </group>
          <group
            name="Null1"
            position={[0.411, 1.235, -0.9]}
            rotation={[1.796, 0, 0]}
            scale={[0.01, 0.01, 0.004]}
          >
            <mesh
              name="Disc1"
              castShadow
              receiveShadow
              geometry={nodes.Disc1.geometry}
              material={materials["Mat.1"]}
              position={[-0.207, -0.185, 0]}
            />
            <mesh
              name="Disc"
              castShadow
              receiveShadow
              geometry={nodes.Disc.geometry}
              material={materials.Mat}
              position={[0.207, 0.185, 0]}
            />
          </group>
          <MeshDistortMaterial distort={0.2} speed={20} color={"grey"} >
          <meshStandardMaterial />
    
          </MeshDistortMaterial>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Base2.gltf");
