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

const Face = () => {
    const [emotion,setEmotion] = useState("Happy")
    return (<>
     
    
  
      <Box sx={{position:"relative",top:0,display:"flex",justifyContent:"center"}}>
      <Display setEmotion={setEmotion} emotion={emotion}/>
      <Typography sx={{position:"absolute",top:"200px"}}>current emotion:{emotion}</Typography>
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
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            enableZoom={false}
          />
          {emotion == "happy" ? <Happy/> :null }
          {emotion == "surprised" ? <Angry/> :null }
          {emotion =="neutral" ? <Neutral/> :null }
          
          
  
          <ambientLight intensity={0.1} />
          <directionalLight
            position={[10, 20, -5]}
            intensity={0.2}
            castShadow
          />
        </Canvas>
        
      </Box>  

         </Box>
 
      </>
   
    );
}

export default Face
