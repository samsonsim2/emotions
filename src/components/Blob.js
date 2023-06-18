import React, { useMemo, useRef } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { HighresCube } from "./HighresCube";
import { MovingCube } from "./MovingCube";
import { MeshAnim } from "./MeshAnim";
import { TerrainSphere } from "./TerrainSphere";
import { useAppContext } from "../context/appContext";
 
const Blob = ({noise}) => {
  const { measure,setMeasure} = useAppContext();
 
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  
  useFrame((state) => {
     


    const { clock } = state;
    mesh.current.material.uniforms.u_time.value =  0.4 * clock.getElapsedTime()  ;

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      measure.happy + 0.2,
      0.05
    );
  });
 
  return (
    

    <>
   <mesh
      ref={mesh} 
      position={[0, 0, 0]}
      scale={1.5}
      
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
       
    </mesh>
    </>
  );
};

export default Blob;