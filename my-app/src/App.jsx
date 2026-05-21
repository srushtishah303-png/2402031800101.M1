//import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'


import Hello from "./Hello"
import Bye from "./Bye"

function App() {

  return (
    <>
      <h1>App Component</h1>
        <Hello />
      <img src={reactLogo}  width="200" height="200" className="logo" alt="React logo" />
      

      <Bye />
     
    </>
  )
}

export default App
