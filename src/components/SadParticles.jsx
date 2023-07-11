import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
 
export function SadParticles(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Revised/SadParticles.gltf");
  const { actions ,names} = useAnimations(animations, group);
  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.01} position={[0,-1.5,0]}>
      <group>
        <group name="SadCloud" position={[11.065, 181.973, 0.274]}>
          <mesh
            name="Cloud"
            castShadow
            receiveShadow
            geometry={nodes.Cloud.geometry}
            material={materials["Mat.1"]}
            position={[-4.218, 90.866, 0.274]}
            scale={100}
           ><meshStandardMaterial color={"grey"}/></mesh>
          <group
            name="SadParticles"
            position={[4.218, -90.866, -0.274]}
            scale={[1, 0.882, 1]}
          >
            <mesh
              name="Capsule"
              castShadow
              receiveShadow
              geometry={nodes.Capsule.geometry}
              material={materials["Mat.1"]}
              position={[-79.1, -31.022, 0]}
            />
            <mesh
              name="Capsule5"
              castShadow
              receiveShadow
              geometry={nodes.Capsule5.geometry}
              material={materials["Mat.1"]}
              position={[-47.064, 142.848, 0]}
            />
            <mesh
              name="Capsule4"
              castShadow
              receiveShadow
              geometry={nodes.Capsule4.geometry}
              material={materials["Mat.1"]}
              position={[56.694, 158.175, 0]}
            />
            <mesh
              name="Capsule3"
              castShadow
              receiveShadow
              geometry={nodes.Capsule3.geometry}
              material={materials["Mat.1"]}
              position={[-3.832, 158.175, 0]}
            />
            <mesh
              name="Capsule2"
              castShadow
              receiveShadow
              geometry={nodes.Capsule2.geometry}
              material={materials["Mat.1"]}
              position={[-27.588, -10.422, 0]}
            />
            <mesh
              name="Capsule1"
              castShadow
              receiveShadow
              geometry={nodes.Capsule1.geometry}
              material={materials["Mat.1"]}
              position={[21.789, 142.848, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Revised/SadParticles.gltf");
