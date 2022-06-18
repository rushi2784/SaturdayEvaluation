import React, { createContext, useState } from 'react'

export const AuthContex = createContext();

export const AuthProvider = ({ children }) => {
  const [Authrized, setAuthrized] = useState(false);

 
  
  return (<AuthContex.Provider value={{ Authrized,setAuthrized}}>{children}</AuthContex.Provider>)
}
