import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Combined(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/combined.glb");
  const { actions ,names} = useAnimations(animations, group);

  console.log(animations)
  useEffect(()=>{
    console.log(animations)
     
    actions?.AngryAnimation.fadeIn(0.5).play()
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={0.1}>
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

useGLTF.preload("/models/combined.glb");
