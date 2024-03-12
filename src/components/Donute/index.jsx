import React from 'react'
import styles from './style.module.scss'
import dynamic from 'next/dynamic'
import Scene from './components/scene'

function Donut() {
  return (
    <div className={styles.main}>
    <Scene/>
    </div>
  )
}

export default Donut