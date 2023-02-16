import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import { Html } from '@react-three/drei'
import Scene from './components/Scene'
import Loader from './components/Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas style={{ height: "100vh", margin: 0, width: "100vw" }}>
      <ambientLight castShadow />
      <pointLight position={[10, 10, 10]} />
      <Box castShadow receiveShadow position={[1, 0, 3]} />
        <Suspense fallback={<Loader/>}>
          <Scene/>
        </Suspense>
      <Html scale={[1, 0, 0]} position={[1, 0, -1]}>
        <button color='red'>hello</button>
      </Html>
    </Canvas>
  )
}

export default App
