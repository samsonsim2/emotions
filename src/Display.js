import {useRef,useEffect, useState} from 'react'
import './App.css'
import * as faceapi from 'face-api.js'
import { Box, Typography } from '@mui/material'
import { useAppContext } from './context/appContext'
 

const videoHeight = 225
const videoWidth = 300
function Display( ){
     
  const videoRef = useRef()
  const canvasRef = useRef()
  const { measure,setMeasure,emotions,setEmotions,pageState,setPageState} = useAppContext();
  const [test,setTest] = useState("home")

  // LOAD FROM USEEFFECT
  useEffect(()=>{
     
    
    startVideo()
    videoRef && loadModels()
    
    

  },[test])
  

  // OPEN YOU FACE WEBCAM
  const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      videoRef.current.srcObject = currentStream
    })
    .catch((err)=>{
      console.log(err)
    })
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
   
    setInterval(async()=>{
      const detections = await faceapi.detectAllFaces(videoRef.current,
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
          
        if(detections[0]){
          
        const maxKey = findPropertyWithMaxValue(detections[0]?.expressions);
         
        setMeasure({...detections[0].expressions})
        // console.log(maxKey); // Output: prop3

        if (maxKey=="neutral" && test=="faceTracking"  ){
          setEmotions("Meh")
        }

        if (maxKey=="happy" && test=="faceTracking" ){
          setEmotions("Happy")
        }

        if (maxKey=="sad"  && test=="faceTracking" ){
          setEmotions("Sad")
        }

        if (maxKey=="surprised"  && test=="faceTracking" ){
          setEmotions("Surprised")
        }

        if (maxKey=="fearful" && test=="faceTracking" ){
          setEmotions("Scared")
        }

        if (maxKey=="angry"&& test=="faceTracking" ){
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
  }

  

  return (<>

  
  

    <Box  onClick={()=>{setPageState("faceTracking")
  setTest("faceTracking")}} sx={{position:"absolute",top:"5%" ,right:"20%",cursor:"pointer" }} >
    { test =="faceTracking" ? null:<Box sx={{ display:"flex",justifyContent:"center",alignItems:"center",position:"absolute" ,zIndex:"1000" ,background: "rgba(255, 255,255, 0.5)",height:"225px" ,width:"300px"  }} >
      <Typography   fontSize={"30px"}>Or make a Face</Typography>
    </Box>}
  
    <video  className="videoBox"  crossOrigin="anonymous" ref={videoRef}  height={videoHeight}  width={videoWidth} autoPlay></video>    
     
 
    <canvas  className="canvasElement" ref={canvasRef}   >
 
    </canvas>
   
    </Box>
 
  
   
    </>)

}

export default Display;