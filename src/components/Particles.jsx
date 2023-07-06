import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
 
export function Particles(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/particles.gltf");
  const { actions,names } = useAnimations(animations, group);
  useEffect(()=>{
    console.log(actions)
    console.log(names)
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}  position={[0, -1, 0]}>
        <PerspectiveCamera
          name="CINEMA_4D_Editor"
          makeDefault={false}
          far={10000000000}
          near={0.01}
          fov={31.417}
          position={[17.275, 186.391, -1271.405]}
          rotation={[3.134, -0.07, 3.141]}
        />
        <mesh
          name="Sphere_4"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_4.geometry}
          material={nodes.Sphere_4.material}
          morphTargetDictionary={nodes.Sphere_4.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere_4.morphTargetInfluences}
          position={[-115.413, 314.123, 0]}
          scale={0.596}
        />
        <mesh
          name="Sphere_3"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3.geometry}
          material={nodes.Sphere_3.material}
          morphTargetDictionary={nodes.Sphere_3.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere_3.morphTargetInfluences}
          position={[105, 270.246, 0]}
          scale={0.446}
        />
        <mesh
          name="Sphere_2"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={nodes.Sphere_2.material}
          morphTargetDictionary={nodes.Sphere_2.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere_2.morphTargetInfluences}
          position={[25.161, 407.865, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0}
        />
        <mesh
          name="Sphere_1"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={nodes.Sphere_1.material}
          morphTargetDictionary={nodes.Sphere_1.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere_1.morphTargetInfluences}
          position={[-104.828, 402.706, 0]}
          scale={0.446}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          morphTargetDictionary={nodes.Sphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere.morphTargetInfluences}
          position={[132.296, 335.634, 0]}
          scale={0.882}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/particles.gltf");