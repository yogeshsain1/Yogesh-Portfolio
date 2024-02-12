import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import * as THREE from 'three'
function Home1() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight ,0.1 ,1000);
  const renderer = new THREE.WebGLRenderer();
  
  return (
    <>
      <canvas className={styles.webgl}>

      </canvas>
    </>

    )
}
 
export default Home1