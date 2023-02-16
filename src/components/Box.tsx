import React, { useRef } from 'react'
import {useFrame,ThreeElements} from '@react-three/fiber'


const Box = (props: ThreeElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame((state,delta) => (mesh.current.rotation.x +=delta))
  return (
    <mesh
        {...props}
        ref={mesh}
    >
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color={'hotpink'}/>
    </mesh>
  )
}

export default Box