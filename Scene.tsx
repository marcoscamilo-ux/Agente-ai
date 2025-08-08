'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'

function Knot() {
  return (
    <mesh castShadow receiveShadow>
      <torusKnotGeometry args={[1.2, 0.35, 180, 12]} />
      <meshStandardMaterial metalness={0.6} roughness={0.2} color={'#22d3ee'} />
    </mesh>
  )
}

function GlowRings() {
  return (
    <group>
      {[1.9, 2.4, 3.1].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.02, 16, 200]} />
          <meshBasicMaterial color={i % 2 ? '#0ea5e9' : '#a855f7'} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Stars radius={120} depth={60} count={4000} factor={4} fade speed={1} />
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.2}>
        <Knot />
        <GlowRings />
      </Float>
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  )
}
