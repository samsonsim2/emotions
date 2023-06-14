import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Face from './Face';
import Click from './Click';
 
const App = () => {

  return (
  <BrowserRouter>
   {/* <NavBar></NavBar> */}
   <Routes>
      <Route path="/" element={<Click/>}/>
      <Route path="/face" element={<Face/>}/>
       
  </Routes>  
  </BrowserRouter>
  )
}

export default App