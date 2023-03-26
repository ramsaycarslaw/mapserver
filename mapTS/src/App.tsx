import './App.css'
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  )
}

export default App
