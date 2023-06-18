import {useRef,useEffect} from 'react'
import './App.css'
import * as faceapi from 'face-api.js'
import { Box } from '@mui/material'
import { useAppContext } from './context/appContext'
 

const videoHeight = 150
const videoWidth = 200
function Display({emotion,setEmotion}){
     
  const videoRef = useRef()
  const canvasRef = useRef()

  // LOAD FROM USEEFFECT
  useEffect(()=>{
    startVideo()
    videoRef && loadModels()

  },[])
  const { measure,setMeasure} = useAppContext();


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
    
        setEmotion(maxKey)

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
 
  

    <Box>
  
    <video  className="videoBox"  crossOrigin="anonymous" ref={videoRef}  height={videoHeight}  width={videoWidth} autoPlay></video>    
     
 
    <canvas  className="canvasElement" ref={canvasRef}  />
   
    </Box>
 
  
   
    </>)

}

export default Display;