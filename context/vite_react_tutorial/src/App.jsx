import { useState, useContext } from 'react'
import { ColorContext } from './main'

const {colors} = useContext(ColorContext);
console.log(colors);
function App() {
  return (
    <div>
      HI
    </div>
  )
}

export default App
