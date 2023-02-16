import { useFBX } from '@react-three/drei'

const Scene = () => {
    const fbx = useFBX('/Untitled.fbx')
  return (
    <primitive object={fbx}/>
  )
}

export default Scene