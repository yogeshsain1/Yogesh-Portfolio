
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'
import styles from "./styles.module.scss";
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';


function H2() {



  return (
    <div className={styles.main}>
      <div className={styles.section1}>

        <section className={styles.secpart1}>
          <video src='/video/two.mp4' autoPlay loop muted />


        </section>
        <section className={styles.secpart2}>
          <video src='/video/one.mp4' autoPlay loop muted />


        </section>

        <div data-scroll data-scroll-speed="0.4" className={styles.abts}>
          <Image
            src="/images/ar1.png"
            alt="Description of your image"
            width={300}
            height={120}
          />
          <g>
          <Image
            src="/images/ar2.png"
            alt="Description of your image"
            width={300}
            height={120}
          />
          </g>
        </div>
      </div>

      <div className={styles.section2}>
        <video style={{ zIndex: 0 }} src='/video/three.mp4' autoPlay loop muted />

        <div data-scroll data-scroll-speed="0.1" className={styles.portfolio}>
          <span>(</span>

          <p>portfolio</p>

          <span>)</span>
        </div>



      </div>
    </div>
  )
}

export default H2