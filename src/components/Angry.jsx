import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Angry(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Angry.gltf");
  const { actions ,names} = useAnimations(animations, group);

  useEffect(()=>{
    actions[names[0]].reset().fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group 
       scale={0.01}>
        <mesh
          name="Angry"
          castShadow
          receiveShadow
          geometry={nodes.Angry.geometry}
          material={nodes.Angry.material}
          morphTargetDictionary={nodes.Angry.morphTargetDictionary}
          morphTargetInfluences={nodes.Angry.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Angry.gltf");