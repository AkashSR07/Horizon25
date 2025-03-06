"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, TorusKnot, MeshDistortMaterial } from "@react-three/drei"

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff00ff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00ffff" />
      <TorusKnot args={[1, 0.3, 128, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#9900ff"
          emissive="#9900ff"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </TorusKnot>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

