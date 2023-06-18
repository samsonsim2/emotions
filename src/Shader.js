import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useGLTF } from '@react-three/drei'
 
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import * as THREE from 'three'

import { Suspense, useState, useRef } from 'react'
import Angry from './components/Angry';
import Happy from './components/Happy';
import { Button,Box } from '@mui/material';
import Combined from './components/Combined';
import Blob from './components/Blob';
import { Canvas } from '@react-three/fiber';
 
function Shader() {

  let speed=0

 const [noise,setNoise]=useState(0)
  return (<>


<button onClick={()=>{
setNoise(noise + 0.1)
console.log(noise)
 }}>speed</button>
 
     
    <div className='three-canvas-container'>
      <Canvas
        shadows
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        linear
        id='three-canvas-container'
      >
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
          enableZoom={true}
        />
       <Blob noise={noise}/>
       

        {/* <mesh>
          <boxGeometry args={[2,2,2]}/>
         <meshStandardMaterial color={"red"}/>
        </mesh> */}
         
{/* 
        <Environment
          files={'brown_photostudio_05_4k.hdr'}
          path={'/'}
          intensity={0}
        /> */}

        <ambientLight intensity={0.1} />
        <directionalLight
          position={[10, 20, -5]}
          intensity={0.2}
          castShadow
        />
      </Canvas>
    </div>
    </>
 
  );
}

export default Shader;
