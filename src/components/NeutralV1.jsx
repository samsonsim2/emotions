
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, MeshDiscardMaterial, MeshDistortMaterial } from "@react-three/drei";
 
export function NeutralV1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/revised/Neutral.gltf");
  const { actions,names } = useAnimations(animations, group);

  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.01} position={[0,-1.03,0]}>
      <group>
        <group name="NeutralTail" position={[0, 127.579, 0]}>
          <skinnedMesh
            castShadow
            name="NeutralTail_1"
            geometry={nodes.NeutralTail_1.geometry}
            material={materials["Mat.1"]}
            skeleton={nodes.NeutralTail_1.skeleton}
          />
        </group>
        <group name="NeutralFeet" position={[-4.839, 35.273, -1.297]}>
          <group name="Legs" position={[-9.678, 28.956, -2.593]}>
            <skinnedMesh
              name="Legs_1"
              castShadow
              geometry={nodes.Legs_1.geometry}
              material={materials["Mat.1"]}
              skeleton={nodes.Legs_1.skeleton}
            />
          </group>
        </group>
        <mesh
          name="Neutral"
          castShadow
          receiveShadow
          geometry={nodes.Neutral.geometry}
          material={materials["Mat.1"]}
          position={[0, -0.28, 0]}
          scale={80}
        >
          <primitive object={nodes.Joint1} />
          <primitive object={nodes.Thigh_L} />
          <primitive object={nodes.Thigh_R} />
          <group
            name="NeutralFeatures"
            position={[0.001, 1.194, 0.902]}
            scale={0.013}
          >
            <mesh
              name="Mouth"
              castShadow
              receiveShadow
              geometry={nodes.Mouth.geometry}
              material={materials["Mat.1"]}
              position={[0, -11.497, 5]}
              rotation={[0, 0, -Math.PI / 2]}
            > <meshToonMaterial/></mesh>
            <group
              name="Eyes"
              position={[0, 11.497, -1]}
              rotation={[-0.319, 0, 0]}
            >
              <mesh
                name="Eyes-Mat1"
                castShadow
                receiveShadow
                geometry={nodes["Eyes-Mat1"].geometry}
                
                
                
               > <meshToonMaterial/></mesh>
              <mesh
                name="Eyes-Mat1_1"
                castShadow
                receiveShadow
                geometry={nodes["Eyes-Mat1_1"].geometry}
                material={materials["Mat.1"]}    
                    
               > </mesh>
            </group>
            
          </group>
          {/* <meshStandardMaterial color={"grey"}/> */}
          <MeshDistortMaterial color={"grey"} distort={0.2} speed={10}/>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/revised/Neutral.gltf");
