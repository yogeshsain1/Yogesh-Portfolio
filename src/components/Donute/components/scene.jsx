'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './model'
import { Environment } from '@react-three/drei'
function Scene() {
  return (
    <Canvas style={{backgroundColor:"rgb(20, 20, 20)"}}>
    <directionalLight  intensity={3} position={[0,3,2]}/>
    <Environment preset='city'/>
      <Model/>
    </Canvas>
  )
}

export default Scene