import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
 
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import * as THREE from 'three'

import { Suspense, useState, useRef } from 'react'
 
import { Button,Box, Typography } from '@mui/material';
import { Cube } from './components/Cube';
 
const CubeTest= () => {
    const [emotion,setEmotion] = useState("Neutral")
    return (<>
     
    
  
      
 
   <Box sx={{  height: "100vh", width: "100%"}}>
        <Canvas
          shadows
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
          id='three-canvas-container'
        >
          <OrbitControls
           minAzimuthAngle={-Math.PI / 5}
           maxAzimuthAngle={Math.PI / 5}
             
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            enableZoom={true}
          />

         
         
          <Cube/>
          
  
          <ambientLight intensity={1} />
          <directionalLight
            position={[20, 40, -5]}
            intensity={0.5}
            castShadow
          />
        </Canvas>
        
      </Box>  

         
 
      </>
   
    );
}

export default CubeTest
