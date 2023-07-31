import {useRef,useEffect, useState} from 'react'
import './App.css'
import * as faceapi from 'face-api.js'
import { Box, Stack, Typography } from '@mui/material'
import { useAppContext } from './context/appContext'
 
 
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const videoHeight = 225
const videoWidth = 300
function Display( ){

  
     
  const videoRef = useRef()
  const canvasRef = useRef()
  const { measure,setMeasure,emotions,setEmotions,pageState,setPageState} = useAppContext();
  const [test,setTest] = useState("home")

  const emotionsArray = ["Meh","Sad","Happy","Surprised","Angry","Scared","Love"]
 
  let [count,setCount] = useState(0)

  const increment=()=>{
      if (pageState == "buttons"){
      if(count < emotionsArray.length-1){
      setCount(count+1)
      setEmotions(emotionsArray[count+1])
      }
      else{
          setCount(0)
          setEmotions(emotionsArray[0])
      }
  }
  }

  const decrement=()=>{
      if (pageState == "buttons"){
      if(count >0 ){
      setCount(count-1)
      setEmotions(emotionsArray[count-1])
      }
      else{
          setCount(emotionsArray.length-1)
          setEmotions(emotionsArray[emotionsArray.length-1])
      }
  }
  }
  // LOAD FROM USEEFFECT
  useEffect(()=>{
 
     
      
    startVideo()
    loadModels()
 
  

  
    
  
    

  },[pageState])

   

  // OPEN YOU FACE WEBCAM
  const startVideo = ()=>{

    if (pageState !== "faceTracking"){
      videoRef.current.srcObject = null
    }else{
  
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      videoRef.current.srcObject = currentStream
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 
  }
  // LOAD MODELS FROM FACE API

  const loadModels = ()=>{
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/faceModels"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/faceModels"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/faceModels"),
      faceapi.nets.faceExpressionNet.loadFromUri("/faceModels")

      ]).then(()=>{
      
      faceMyDetect()
        
    })
  }

  function findPropertyWithMaxValue(obj) {
    let maxKey = null;
    let maxValue = -Infinity;
  
    Object.entries(obj).forEach(([key, value]) => {
      if (value > maxValue) {
        maxKey = key;
        maxValue = value;
      }
    });
  
    return maxKey;
  }

  const faceMyDetect = ()=>{

   
    const myInterval = 
    setInterval(async()=>{
    
      const detections = await faceapi.detectAllFaces(videoRef.current,
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
          
        if(detections[0] ){
          
        const maxKey = findPropertyWithMaxValue(detections[0]?.expressions);
         
        setMeasure({...detections[0].expressions})
        // console.log(maxKey); // Output: prop3

        if (maxKey=="neutral"  ){
          setEmotions("Meh")
        }

        if (maxKey=="happy"    ){
          setEmotions("Happy")
        }

        if (maxKey=="sad"    ){
          setEmotions("Sad")
        }

        if (maxKey=="surprised"    ){
          setEmotions("Surprised")
        }

        if (maxKey=="fearful" ){
          setEmotions("Scared")
        }

        if (maxKey=="angry" ){
          setEmotions("Angry")
        }
        }
        

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
      faceapi.matchDimensions(canvasRef.current,{
        width:videoWidth,
        height:videoHeight
      })

      const resized = faceapi.resizeResults(detections,{
        width:videoWidth,
        height:videoHeight
      })

      faceapi.draw.drawDetections(canvasRef.current,resized)
      faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
      faceapi.draw.drawFaceExpressions(canvasRef.current,resized)


    },1000)
  

    return () => clearInterval(myInterval);
  
}


  

  return (<>

{pageState=="buttons" ? 
     <button class="pickButton" style={{left:0,marginLeft:"100px"}} 
     onClick={()=>{
    setPageState("buttons")
    setTest("buttons")
   }}>
     <Stack direction={"row"} sx={{display:"flex",alignContent:"center"}}>
        <ArrowLeftIcon   onClick={()=>{decrement()}} sx={{fontSize:"90px" ,color:"#FF00C0",cursor:"pointer"}}></ArrowLeftIcon>  
        <Box sx={{alignSelf:"center"}}> Pick a feeling</Box>
       <ArrowRightIcon   onClick={()=>{increment()}}   sx={{ padding:"0px!important" ,fontSize:"90px" ,color:"#FF00C0",cursor:"pointer"}}></ArrowRightIcon >
     </Stack>
     </button>:
    
    <button class="landingButton" style={{left:0,marginLeft:"100px"}}
     onClick={()=>{
      setPageState("buttons") 
    setTest("buttons")
    setEmotions("Meh")}}>
    <Stack direction={"row"} sx={{display:"flex",alignContent:"center"}}>
       <ArrowLeftIcon onClick={()=>{decrement()}}  sx={{fontSize:"90px" ,color:"transparent",cursor:"pointer"}}></ArrowLeftIcon>  
       <Box sx={{alignSelf:"center"}}> Pick a feeling</Box>
      <ArrowRightIcon  onClick={()=>{increment()}}  sx={{ fontSize:"90px" ,color:"transparent",cursor:"pointer"}}></ArrowRightIcon >
    </Stack>
    </button>}

  


    <Box sx={{position:"absolute",right:0,marginRight:"100px" }}>
      
    <button class={pageState=="faceTracking"?"hideButton":"landingButton"}  onClick={()=>{
      setPageState("faceTracking")
      setTest("faceTracking")}}>
    <Stack direction={"row"} sx={{display:"flex",alignContent:"center"}}>
       <ArrowLeftIcon   sx={{fontSize:"90px" ,color:"transparent",cursor:"pointer"}}></ArrowLeftIcon>  
       <Box sx={{alignSelf:"center"}}> Or make a face</Box>
      <ArrowRightIcon   sx={{ fontSize:"90px" ,color:"transparent",cursor:"pointer"}}></ArrowRightIcon >
    </Stack>
    </button>
    <video   style={{display:pageState=="faceTracking"?"block":"none"}} className="videoBox"  crossOrigin="anonymous" ref={videoRef}  height={videoHeight}  width={videoWidth} autoPlay></video>    
    <canvas  style={{display:test=="faceTracking"?"block":"none"}} className="canvasElement" ref={canvasRef}   >
     </canvas>
   
    </Box>

  
  
   
    </>)

}

export default Display;