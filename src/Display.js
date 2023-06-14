import {useRef,useEffect} from 'react'
import './App.css'
import * as faceapi from 'face-api.js'
import { Box } from '@mui/material'
 
function Display({emotion,setEmotion}){
    console.log(emotion)
  const videoRef = useRef()
  const canvasRef = useRef()

  // LOAD FROM USEEFFECT
  useEffect(()=>{
    startVideo()
    videoRef && loadModels()

  },[])



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
        console.log(maxKey); // Output: prop3
        setEmotion(maxKey)

        }
        
        // console.log(Object.keys(detections[0]?.expressions))

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
      faceapi.matchDimensions(canvasRef.current,{
        width:940,
        height:650
      })

      const resized = faceapi.resizeResults(detections,{
         width:940,
        height:650
      })

      faceapi.draw.drawDetections(canvasRef.current,resized)
      faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
      faceapi.draw.drawFaceExpressions(canvasRef.current,resized)


    },1000)
  }

  return (
 
    <Box sx={{border:2,  width:"fit-content",position:"absolute",top:0,left:0}}>

     
    <Box sx={{border:2,borderColor:"red" ,position:"absolute",top:0}}>
      <video sx={{objectFit:"fit-content"}}crossOrigin="anonymous" ref={videoRef} autoPlay></video>    
     </Box>  

    <Box sx={{ border:2, width:"100%",borderColor:"green",  position:"absolute",}}>
    <canvas   ref={canvasRef}  />
    </Box>
        
     

    </Box>
  
   
    )

}

export default Display;