"use client"
import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar/navbar'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import { motion } from "framer-motion"
import Pg2 from './pg2'
const About = () => {

  const animations = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }


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
      
        <div className={styles.goalsandasp}>
          <img src='/goalAsp.svg' />
        </div>


        <div class className={styles.effes}>
          <motion.div className={styles.mask}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, bounce: 2 }}
          >
            <p>
              Hello, I'm <span>Vedas Dixit</span>, a Computer Science student passionate about web development. I've developed a Modern Job Portal, showcasing skills in MongoDB, Express JS, and <span>React JS</span>. My goal is to excel as a freelancer, delivering innovative solutions to clients.
            </p>
          </motion.div>



        </div>

      </div>


    </main>
    <Pg2></Pg2>
    </>
  )
}

export default About