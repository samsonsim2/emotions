import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Face from './Face';
import Click from './Click';
import Shader from './Shader';
const App = () => {

  return (
  <BrowserRouter>
   {/* <NavBar></NavBar> */}
   <Routes>
      <Route path="/" element={<Click/>}/>
      <Route path="/face" element={<Face/>}/>
      <Route path="/shader" element={<Shader/>}/>
       
  </Routes>  
  </BrowserRouter>
  )
}

export default App