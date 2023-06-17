
import React, { useMemo, useRef } from "react";
import { MeshDistortMaterial, MeshWobbleMaterial, shaderMaterial, useGLTF } from "@react-three/drei";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { extend } from '@react-three/fiber'
 import * as THREE from "three"
export function HighresCube(props) {

    // const uniforms = useMemo(() => {
    //     return {
    //       u_time: { value: 0 },
    //       u_intensity: { value: 0.3 },
    //     };
    //   });
    
    //   useFrame((state) => {
    //     const { clock } = state;
    //     if (mesh.current) {
    //       mesh.current.material.uniforms.u_time.value =
    //         0.4 * clock.getElapsedTime();
    
    //       mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
    //         mesh.current.material.uniforms.u_intensity.value,
    //         hover.current ? 1 : 0.15,
    //         0.02
    //       );
    //     }
    //   });

    // const ColorShiftMaterial = shaderMaterial(
    //     { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
    //     // vertex shader
    //     /*glsl*/`
    //       varying vec2 vUv;
    //       void main() {
    //         vUv = uv;
    //         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    //       }
    //     `,
    //     // fragment shader
    //     /*glsl*/`
    //       uniform float time;
    //       uniform vec3 color;
    //       varying vec2 vUv;
    //       void main() {
    //         float strength = vUv.y;
    //         gl_FragColor.rgba = vec4(vec3(strength),1.0);
    //       }
    //     `
    //   )

    //   // declaratively
    //   extend({ ColorShiftMaterial })

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
         {/* <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      /> */}


         <MeshDistortMaterial distort={1} speed={5}   />
         {/* <colorShiftMaterial color="hotpink" time={1} /> */}
       {/* <MeshWobbleMaterial factor={0.3} speed={10}  /> */}
        </mesh>
    </group>


  );

}

useGLTF.preload("/models/highresCube.gltf");
