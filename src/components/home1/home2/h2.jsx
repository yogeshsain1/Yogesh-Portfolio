
import { ScrollTrigger } from 'gsap/all';
import React, {  useEffect, useRef } from 'react'
import styles from "./styles.module.scss";

import gsap from 'gsap';


function H2() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])






  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);

  }


  return (
    <div className={styles.main}>
      <div className={styles.section1}>

        <section className={styles.secpart1}>
          <video src='/video/two.mp4' autoPlay loop muted />
          

        </section>
        <section className={styles.secpart2}>
          <video src='/video/one.mp4' autoPlay loop muted />


        </section>

      </div>

      <div className={styles.section2}>
        <video style={{zIndex: 0}} src='/video/three.mp4' autoPlay loop muted />
        
        <div   data-scroll data-scroll-speed="0.1"   className={styles.portfolio}>
          <span>(</span>

          <p>portfolio</p>

          <span>)</span>
        </div>



      </div>
    </div>
  )
}

export default H2