"use client"
import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar/navbar'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import { motion } from "framer-motion"
import Pg2 from './pg2'
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const ourText = new SplitType('#text_1', { types: 'chars' })
    const words = ourText.chars
    
    gsap.fromTo(words,{
      opacity: 0,
      y: 0
    }, {
      
      
        y: -250,
        opacity: 1,
        stagger: 0.01,
        duration: 0.3,
        ease: 'power4.out',
        
      })
      // gsap.to(words,{
      //   scrollTrigger:{
      //     trigger: '#text_1',
      //     start: "top 200px",
      //     markers: true
      //   },
      //     y: -50,
      //     opacity: 0,
      //     stagger: 0.02,
      //     duration: 0.6,
      //     ease: 'power4.out',
      // })


  }, [])



  return (
    <>
      <main className={styles.main}>

        <div className={styles.home}>

          <Navbar></Navbar>
        </div>

        <div className={styles.aboutimage}>
          <img src='/aboutimg.png' />
        </div>


        <div className={styles.cont}>
          <div className={styles.newwwa}>
          <div className={styles.goalsandasp}>
            <img src='/goalsandasp.svg' />
          </div>


          <div class>
            <div>
              <motion.p id='text_1' className={styles.text_1}
                initial={{opacity: 0.6}}
                
              >
                Hello, I'm <span>Vedas Dixit</span>, a Computer Science student passionate 
                about web development. <br></br>I've developed a Modern Job Portal, showcasing 
                skills in MongoDB,<span>Express JS</span>, and <span>React JS</span>. My goal is to 
                excel as a freelancer, delivering innovative solutions to clients.
              </motion.p>
            </div>
          </div>
            </div>
        
        </div>


      </main>
      <Pg2></Pg2>
    </>
  )
}

export default About