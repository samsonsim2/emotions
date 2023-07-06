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
 
import { Button,Box, Typography } from '@mui/material';
import Display from './Display';
import { Neutral } from './components/Neutral';
import { Rigged } from './components/Rigged';
import { Particles } from './components/Particles';
 
const Character = () => {
    const [emotion,setEmotion] = useState("Happy")
    return (<>
     
    
  
      <Box sx={{position:"relative",top:0,display:"flex",justifyContent:"center"}}>
       
      <Display setEmotion={setEmotion} emotion={emotion}/>
       
      <Typography sx={{position:"absolute",top:"50px"}}>current emotion:{emotion}</Typography>
      {/* <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Happy")} variant="contained">Happy</Button>
      <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Angry")} variant="contained">Angry</Button> */}
  
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
         <Rigged/>
         {emotion == "surprised" ? <Particles/> :null }
          
          
  
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[10, 20, -5]}
            intensity={1}
            castShadow
          />
        </Canvas>
        
      </Box>  

         </Box>
 
      </>
   
    );
}

export default Character
