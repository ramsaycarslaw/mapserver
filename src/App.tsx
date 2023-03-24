import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { StageBuilder } from './StageBuilder'

function App() {

  return (
    <div>
      <Canvas style={{ position: "relative", width: 1000, height: 1000 }} className="overflow-hidden" >
        <ambientLight />
        <OrbitControls />
        <Stats />
        <color attach="background" args={['#222']} />
        <spotLight position={[5, 5, 5]} penumbra={1} intensity={0.1}/>
        <spotLight position={[-5, 5, 5]} penumbra={1} intensity={0.1}/>
        <spotLight position={[5, 5, -5]} penumbra={1} intensity={0.1}/>
        <StageBuilder selectedFile />
      </Canvas>
    </div>
  )
}

export default App
