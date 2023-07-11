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
import { NeutralV1 } from './components/NeutralV1';
import { HappyV1 } from './components/HappyV1';
import { HappyParticles } from './components/HappyParticles';
import { SadV1 } from './components/SadV1';
import { SadParticles } from './components/SadParticles';
import { Pedestal } from './components/Pedestal';
import { SurprisedV1 } from './components/SurprisedV1';
import { AngryV1 } from './components/AngryV1';
import { FearV1 } from './components/FearV1';
import { SurprisedParticles } from './components/SurprisedParticles';
const Final= () => {
    const [emotion,setEmotion] = useState("Happy")
    return (<>

   
     
    
  
      <Box sx={{position:"relative",top:0,display:"flex",justifyContent:"center"}}>

      <Box sx={{position:"absolute",bottom:"100px",display:"flex",justifyContent:"center" ,zIndex:"100"}}>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Happy")} variant="contained">Happy</Button>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Sad")} variant="contained">Sad</Button>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Neutral")} variant="contained">Neutral</Button>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Fearful")} variant="contained">Fearful</Button>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Angry")} variant="contained">Angry</Button>
    <Button sx={{padding:"10px",margin:"10px",backgroundColor:"black"}}onClick={()=>setEmotion("Surprised")} variant="contained">Surprised</Button>
    </Box>
{/*        
      <Display setEmotion={setEmotion} emotion={emotion}/> */}
       
      <Typography sx={{position:"absolute",top:"100px"}}>How are you feeling today?</Typography>
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

        {emotion=="Neutral"?<NeutralV1/> :null}
        {emotion=="Happy"?<HappyV1/>:null}
        {emotion=="Happy"? <HappyParticles/>:null}
         {emotion=="Sad"?<SadV1/>:null}
         {emotion=="Sad"?<SadParticles/>:null}
         {emotion=="Surprised"?<SurprisedParticles/>:null}
         {emotion=="Surprised"?<SurprisedV1/>:null}
         {emotion=="Angry"?<AngryV1/>:null}
         {emotion=="Fearful"?<FearV1/>:null}
        <Pedestal/>
   
          
          
  
          <ambientLight intensity={1} />
          <directionalLight
            position={[20, 40, -5]}
            intensity={0.5}
            castShadow
          />
        </Canvas>
        
      </Box>  

         </Box>
 
      </>
   
    );
}

export default Final
