import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      <ambientLight/>
      <pointLight position={[10,10,10]}/>
    </Canvas>
  )
}

export default App
