import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef,useState } from 'react'
import { useControls } from 'leva';
function Model() {
    const mesh = useRef();
    const {nodes} = useGLTF("/medias/torrus.glb")
    const {viewport} = useThree();
    const [showControls, setShowControls] = useState(true); // State to toggle visibility of controls

  useFrame(()=>{
    mesh.current.rotation.x +=0.01;
    mesh.current.rotation.y +=0.01;
  })
  const materialProps = useControls({
    
})
    return (
    <group ref={mesh} scale={viewport.width/3.5}>
    
        <mesh {...nodes.Torus002}>
            <MeshTransmissionMaterial/>
        </mesh>
    </group>
  )
}

export default Model