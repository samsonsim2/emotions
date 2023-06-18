import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Face from './Face';
import Click from './Click';
import Shader from './Shader';
import FaceControl from './FaceControl';
import { AppProvider } from './context/appContext';
 
const App = () => {

  return (
  <AppProvider>
  <BrowserRouter>
   {/* <NavBar></NavBar> */}
   <Routes>
      <Route path="/" element={<Click/>}/>
      <Route path="/face" element={<Face/>}/>
      <Route path="/shader" element={<FaceControl/>}/>
       
  </Routes>  
  </BrowserRouter>
  </AppProvider>
  )
}

export default App