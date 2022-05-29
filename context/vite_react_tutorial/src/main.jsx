import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import colorsObj from "./color-data.json"
import './index.css'

export const ColorContext = createContext();
console.log(colorsObj.colors);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorContext.Provider value={{colorsObj}}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>
)
