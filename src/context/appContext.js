import { useState, useEffect, useReducer, useContext, useRef } from "react";
// import { database, storage } from "../firebase";
// import { onChildAdded, push, ref, set } from "firebase/database";
import React from "react";
import ReactDOM from "react-dom/client";
// Create context
const AppContext = React.createContext();

 
// const username = localStorage.getItem('username')

// Create Provider
const AppProvider = ({ children }) => {
  // State values
  
  // Form data 
  const initValues={
    happy:0,
    sad:0,
    disgusted:0,
    angry:0,
    surprised:0,
    neutral:0,
    fearful:0
    
  
  }
  
const [measure,setMeasure]=useState(initValues)
 

 

  return (
    <AppContext.Provider
      value={{
        measure,
        setMeasure
       
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Exports

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };