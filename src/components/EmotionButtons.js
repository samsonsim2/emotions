import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useAppContext } from '../context/appContext';
 
const EmotionButtons = () => {
   
    const emotions = ["Meh","Sad","Happy","Surprised","Angry","Scared","Love"]
    const {setEmotions,pageState,setPageState} = useAppContext()
    let [count,setCount] = useState(0)

    const increment=()=>{
        if (pageState == "buttons"){
        if(count < emotions.length-1){
        setCount(count+1)
        setEmotions(emotions[count+1])
        }
        else{
            setCount(0)
            setEmotions(emotions[0])
        }
    }
    }

    const decrement=()=>{
        if (pageState == "buttons"){
        if(count >0 ){
        setCount(count-1)
        setEmotions(emotions[count-1])
        }
        else{
            setCount(emotions.length-1)
            setEmotions(emotions[emotions.length-1])
        }
    }
    }
  return (<>


    
   

   {/* <Stack direction="row" spacing={1} sx={{ height:"fit-content", display:"flex",alignContent:"center",  zIndex:"100",position:"absolute", top:"10%",left:"5%" }}>
        <ArrowLeftIcon  onClick={()=>{decrement()}  } sx={{fontSize:"90px" ,color:pageState=="buttons"?"black":"grey",cursor:"pointer"}}></ArrowLeftIcon>
        <Box sx={{width:"200px", alignSelf:"center",cursor:"pointer" }} onClick={()=>{setPageState("buttons")}}><Typography textAlign={"center"} sx={{fontSize:"30px" }}>{pageState=="buttons"?emotions[count]: "Pick a feeling"}</Typography></Box>
        <ArrowRightIcon onClick={()=>{increment()}} sx={{fontSize:"90px" ,color:pageState=="buttons"?"black":"grey",cursor:"pointer"}}></ArrowRightIcon >
       
        
    </Stack>   */}


    {pageState=="buttons" ? 
     <button class="pickButton" style={{marginLeft:"100px"}} onClick={()=>{setPageState("buttons")}}>
     <Stack direction={"row"} sx={{display:"flex",alignContent:"center"}}>
        <ArrowLeftIcon onClick={()=>{decrement()}}  sx={{fontSize:"90px" ,color:"#FF00C0",cursor:"pointer"}}></ArrowLeftIcon>  
        <Box sx={{alignSelf:"center"}}> Pick a feeling</Box>
       <ArrowRightIcon  onClick={()=>{increment()}}   sx={{ padding:"0px!important" ,fontSize:"90px" ,color:"#FF00C0",cursor:"pointer"}}></ArrowRightIcon >
     </Stack>
     </button>:
    
    <button class="landingButton" style={{marginLeft:"100px"}} onClick={()=>{setPageState("buttons")}}>
    <Stack direction={"row"} sx={{display:"flex",alignContent:"center"}}>
       <ArrowLeftIcon   sx={{fontSize:"90px" ,color:"transparent",cursor:"pointer"}}></ArrowLeftIcon>  
       <Box sx={{alignSelf:"center"}}> Pick a feeling</Box>
      <ArrowRightIcon   sx={{ fontSize:"90px" ,color:"transparent",cursor:"pointer"}}></ArrowRightIcon >
    </Stack>
    </button>}

    </>
  )
}

export default EmotionButtons
