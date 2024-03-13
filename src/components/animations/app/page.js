'use client'
import styles from './page.module.scss'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

export default function TXTS() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;


  return (
    <main className={styles.main}>

      <div className={styles.backrender}>

      <video src='/video/vd2.mp4' autoPlay loop muted />
      </div>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >

        <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
          An Artist with developer skills - that haven't been replaced by A.I (yet) <br/>Ctrl + Code + Create.
          
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>I'm a <span>Skilled</span> Frontend designer & Developer with strong focus on producing high quality & impactful web experience.</p>
      </div>
      

    </main>
  )
}
