import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import * as THREE from 'three'

import { Suspense, useState, useRef, useEffect } from 'react'
import Angry from './components/Angry';
import Happy from './components/Happy';
 
import { Button,Box, Typography, Stack } from '@mui/material';
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
import { NeutralV2 } from './components/NeutralV2';
import { HappyV2 } from './components/HappyV2';
import { SadV2 } from './components/SadV2';
import { FearV2 } from './components/FearV2';
import { AngryV2 } from './components/AngryV2';
import { SurprisedV2 } from './components/SurprisedV2';
import { LoveV2 } from './components/LoveV2';
import EmotionButtons from './components/EmotionButtons';
import { useAppContext } from './context/appContext';
 
const FinalV2= () => {

  const {emotions,setEmotions,pageState,setPageState} = useAppContext()
    // const [emotion,setEmotion] = useState("neutral")
    const cameraRef = useRef(null)
    // useEffect(()=>{
    //   console.log(cameraRef.current.position)
    // },[])
  
    return (<>     
    
  
    <Box sx={{position:"relative",width:"100vw",  top:0,display:"flex",justifyContent:"center" ,zIndex:"1000" }}>

     
    <Stack   sx={{  pointerEvents:"none",zIndex:"1000",position:"absolute",width:"95%",height:"90%",  top:20,display:"flex",flexDirection:{xs:"column-reverse",sm:"row"},alignItems:{xs:"center",sm:"flex-start"},justifyContent:"space-between"}}>
{/*      
    <EmotionButtons/> */}
    
    
    <Display  />  
    

    </Stack>

 
 
    
  
   <Box sx={{  height: "100vh", width: "100%" }}>
        <Canvas
          shadows
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
          id='three-canvas-container'
        >
         <OrthographicCamera
        ref={cameraRef}
        name='Camera'
        makeDefault={true}
        zoom={70}
        far={100000}
        near={-100000}
        up={[0, 1, 0]}
        position={[0,30,10]}
        rotation={[-0.78, 1.1, 0.72]}
        scale={1}
      />
          <OrbitControls
           minAzimuthAngle={-Math.PI / 6}
           maxAzimuthAngle={Math.PI / 6}
             
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            enableZoom={false}
            
          />

 

        {emotions=="Meh"?<NeutralV2/> :null}
        {emotions=="Happy"?<HappyV2/>:null}
        {emotions=="Sad"?<SadV2/>:null}
        {emotions=="Love"?<LoveV2/>:null}
         {emotions=="Surprised"?<SurprisedV2/>:null}
         {emotions=="Angry"?<AngryV2/>:null}
         {emotions=="Scared"?<FearV2/>:null}
          
        <Pedestal/>
   
          <ambientLight intensity={0.97} />
          <directionalLight
            position={[20, 40, 10]}
            intensity={0.5}
            castShadow
          />
        </Canvas>
        
      </Box>  

         </Box>
 
      </>
   
    );
}

export default FinalV2
