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
import Angry from './components/Angry';
import Happy from './components/Happy';
import { Button,Box } from '@mui/material';
import Combined from './components/Combined';
 
function Click() {

  const [emotion,setEmotion] = useState("Happy")
  return (<>
 
    <Box sx={{marginTop:"20px",position:"relative",top:0,display:"flex",justifyContent:"center"}}>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Happy")} variant="contained">Happy</Button>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Angry")} variant="contained">Angry</Button>

    </Box>
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
          enableZoom={false}
        />
        {emotion == "Happy" ? <Happy/> :null }
        {emotion == "Angry" ? <Angry/> :null }
        {/* <Combined/> */}
        
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

export default Click;
