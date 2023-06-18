
import React, { useMemo, useRef } from "react";
import { MeshDistortMaterial, MeshWobbleMaterial, shaderMaterial, useGLTF } from "@react-three/drei";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { extend } from '@react-three/fiber'
 import * as THREE from "three"
export function HighresCube({props,noise}) {
 
    const mesh = useRef();
  const hover = useRef(false);
    
   
      
  const { nodes, materials } = useGLTF("/models/highresCube.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        scale={0.01}
        onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
      >  

         <MeshDistortMaterial   metalness={1}
        bumpScale={100}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={4}
        distort={1} />
         
        </mesh>
    </group>


  );

}

useGLTF.preload("/models/highresCube.gltf");
