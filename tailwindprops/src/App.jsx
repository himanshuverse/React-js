import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
  return (
    <>
    <Card username="ram" image="https://i.pinimg.com/736x/b4/79/cf/b479cf396ed91e222a52047a68c6b588.jpg"/>
    <Card username='shyam' image="https://i.pinimg.com/736x/7f/78/22/7f782235063de037a978053f102e1c70.jpg"/>
    <Card/>
    </>
  )
}

export default App
