import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import frag from "./shader/frag";
import vert from "./shader/vert";
 
 
export const TerrainSphere = ( ) => {
    const sphere = useRef();

    console.log(sphere.current.geometry)
    for (var i = 0; i < sphere.current.geometry.vertices.length; i++) {
        var p = sphere.current.geometry.vertices[i];
        p.normalize().multiplyScalar(1 + 0.3 );
    }
     
  
    return (
      <mesh ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
    
        <meshStandardMaterial color="red" />
      </mesh>
    );
}
