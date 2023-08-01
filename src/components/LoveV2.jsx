import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
 
export function LoveV2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/RevisedV2/Love.gltf");
  const { actions,names } = useAnimations(animations, group);

  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn().play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.01}>
      <group>
        <group name="Love" position={[-5.507, -180.395, 9.972]}>
        <mesh
            name="Extrude2"
            castShadow
            receiveShadow
            geometry={nodes.Extrude2.geometry}
            material={materials["Mat.1"]}
            position={[113.247, 368.531, 11.425]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0}
          />
          <mesh
            name="Extrude1"
            castShadow
            receiveShadow
            geometry={nodes.Extrude1.geometry}
            material={materials["Mat.1"]}
            position={[-70.841, 455.476, 7.189]}
            rotation={[-0.05, 0, -0.009]}
          />
          <mesh
            name="Extrude"
            castShadow
            receiveShadow
            geometry={nodes.Extrude.geometry}
            material={materials["Mat.1"]}
            position={[3.283, 312.955, 14.231]}
            scale={0.042}
          />
          <mesh
            name="Loveai"
            castShadow
            receiveShadow
            geometry={nodes.Loveai.geometry}
            material={materials["Mat.2"]}
            position={[-318.601, -7.273, -9.972]}
          />
          <group name="Legs" position={[-27.536, 204.906, 5.641]}>
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
            position={[5.507, -4.336, -14.591]}
            rotation={[0, 0, 0.017]}
            scale={25}
          >
            <mesh
              name="EyeR"
              castShadow
              receiveShadow
              geometry={nodes.EyeR.geometry}
              material={materials["Mat.2"]}
              position={[-2.69, 9.062, 1.333]}
              rotation={[-0.05, 0, 0]}
              scale={0.105}
             ><meshStandardMaterial color={"#F5F5F5"}/></mesh>
            <mesh
              name="EyeL"
              castShadow
              receiveShadow
              geometry={nodes.EyeL.geometry}
              material={materials["Mat.2"]}
              position={[2.69, 9.062, 1.333]}
              rotation={[-0.05, 0, 0]}
              scale={0.105}
              ><meshStandardMaterial color={"#F5F5F5"}/></mesh>
            <mesh
              name="Mouth"
              castShadow
              receiveShadow
              geometry={nodes.Mouth.geometry}
              material={materials["Mat.2"]}
              position={[0, 9.383, 1.54]}
              rotation={[0, 0, -2.356]}
              scale={0.04}
             >  <meshStandardMaterial color={"#F5F5F5"}/></mesh>
            <mesh
              name="Cheeks"
              castShadow
              receiveShadow
              geometry={nodes.Cheeks.geometry}
              material={materials["Mat.2"]}
              position={[-1.322, 8.37, 0.809]}
              scale={0.04}
             ><meshStandardMaterial color={"#F5F5F5"}/></mesh>
            <mesh
              name="Tail"
              castShadow
              receiveShadow
              geometry={nodes.Tail.geometry}
              material={materials["Mat.1"]}
              position={[-0.066, 0.993, -0.28]}
              rotation={[0, 0, -0.035]}
              scale={0.04}
            />
            <primitive object={nodes.LoveHip_R} />
            <primitive object={nodes.LoveHip_L} />
          </mesh>
          <mesh
            name="Extrude3"
            castShadow
            receiveShadow
            geometry={nodes.Extrude3.geometry}
            material={materials["Mat.1"]}
            position={[-181.841, 371.103, 11.425]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0}
          />
          <mesh
            name="Extrude4"
            castShadow
            receiveShadow
            geometry={nodes.Extrude4.geometry}
            material={materials["Mat.1"]}
            position={[82.565, 450.216, 14.231]}
            scale={0.042}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/RevisedV2/Love.gltf");
