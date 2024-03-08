"use client"
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import styles from './page.module.scss'
import { animate, motion } from "framer-motion"
import Link from 'next/link'
import BackHomeBtn from '@/components/backhomebtn'
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
const Pg2 = () => {

  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
// magnetic effect for inner and
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX, y: middleY })
  }
  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }
  const { x, y } = position;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const ourText = new SplitType('#text1', { types: 'words' })
    const words = ourText.words
    gsap.fromTo(words, {
      opacity: 0,
      y: 60
    }, {
      scrollTrigger: {
        trigger: '#text1',
        start: "0px center",
      },
      y: -50,
      opacity: 1,
      stagger: 0.03,
      duration: 0.6,
      ease: 'power4.out',

    })




  }, [])




  return (
    <>
      <main className={styles.main}>

        <div className={styles.textpg2}>
          <motion.div className={styles.mask_PG2}

          >

            <p className={styles.text1} id='text1'>
              Hello, I'm <span>Vedas Dixit</span>, a Computer Science student passionate about web development. I've developed a Modern Job Portal, showcasing skills in MongoDB, Express JS, and <span>React JS</span>. My goal is to excel as a freelancer, delivering innovative solutions to clients.
            </p>

          </motion.div>


          <Link href={`/`}>
            <div className={styles.backhome}>
              <BackHomeBtn />
            </div>
          </Link>


        </div>


        <motion.div 
        className={styles.aboutimage_PG2}
        style={{position: "relative"}}
                  
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
          <img src='/aboutimg.png' />
          <motion.div className={styles.innerimage}
          ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "tween", stiffness: 150, damping: 15, mass: 0.1}}
          
          
          
          
          
          
          >
            <img src='/innerimg.png' ></img>
          </motion.div>
        </motion.div>



      </main>

    </>
  )
}

export default Pg2