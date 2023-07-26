 
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
 
export function NeutralV2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/RevisedV2/Neutral.gltf");
  const { actions,names } = useAnimations(animations, group);

  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.01}>
      <group>
        <group name="Neutral" position={[0.685, -100, 41.707]}>
          <mesh
            name="okai"
            castShadow
            receiveShadow
            geometry={nodes.okai.geometry}
            material={materials["Mat.2"]}
            position={[-262.794, 58.583, -41.707]}
          />
          <group
            name="Tail"
            position={[27.006, -74.689, -99.688]}
            rotation={[0, 0.735, 0]}
          >
            <skinnedMesh
              name="Tail_1"
              geometry={nodes.Tail_1.geometry}
              material={materials["Mat.1"]}
              skeleton={nodes.Tail_1.skeleton}
            />
          </group>
          <group name="Legs" position={[0, 28.32, -28.347]}>
            <skinnedMesh
              name="Legs_1"
              geometry={nodes.Legs_1.geometry}
              material={materials["Mat.1"]}
              skeleton={nodes.Legs_1.skeleton}
            />
          </group>
          <mesh
            name="Body"
            castShadow
            receiveShadow
            geometry={nodes.Body.geometry}
            material={materials["Mat.1"]}
            position={[0, -4, -41.707]}
          >
            <primitive object={nodes.Hip_R} />
            <primitive object={nodes.Hip_L} />
            <primitive object={nodes.Joint1} />
            <mesh
              name="Ear_L"
              castShadow
              receiveShadow
              geometry={nodes.Ear_L.geometry}
              material={materials["Mat.1"]}
              position={[35.45, 220.841, 0]}
              rotation={[0, 0, -0.02]}
            />
            <mesh
              name="Ear_R"
              castShadow
              receiveShadow
              geometry={nodes.Ear_R.geometry}
              material={materials["Mat.1"]}
              position={[-35.45, 220.841, 0]}
              rotation={[0, 0, 0.02]}
            />
            <group name="Features" position={[0, 182.034, 58.513]}>
              <mesh
                name="Mouth"
                castShadow
                receiveShadow
                geometry={nodes.Mouth.geometry}
                 
                position={[0, -42.942, 66.607]}
                rotation={[0, 0, -Math.PI / 2]}
              ><meshStandardMaterial color={"#F5F5F5"}/></mesh>
              <mesh
                name="Eyes"
                castShadow
                receiveShadow
                geometry={nodes.Eyes.geometry}
                 
                position={[0, -34.672, 50.42]}
                rotation={[-0.338, 0, 0]}
                scale={[1, 0, 1]}
               ><meshStandardMaterial color={"#F5F5F5"} /></mesh>
            </group>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/RevisedV2/Neutral.gltf");
