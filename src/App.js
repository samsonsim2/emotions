import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Face from './Face';
import Click from './Click';
import Shader from './Shader';
import FaceControl from './FaceControl';
import { AppProvider } from './context/appContext';
import Character from './Character';
import Final from './Final';
 
 
const App = () => {

  return (
  <AppProvider>
  <BrowserRouter>
   {/* <NavBar></NavBar> */}
   <Routes>
      <Route path="/" element={<Click/>}/>
      <Route path="/face" element={<Face/>}/>
      <Route path="/shader" element={<FaceControl/>}/>
      <Route path="/character" element={<Character/>}/>
      <Route path="/v1" element={<Final/>}/>
       
  </Routes>  
  </BrowserRouter>
  </AppProvider>
  )
}

export default App