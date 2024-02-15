"use client"
import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar/navbar'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import { animate, motion } from "framer-motion"
const Pg2 = () => {

    const fadeanimation={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1
        },
        transition:{
            duration: 2.2
        }
    }
    const lineanimation={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1
        },
        transition:{
            duration: 2.2
        }
    }



  return (
    <main className={styles.main}>
        <div className={styles.textpg2}>
            <motion.div className={styles.mask_PG2}
                variants={fadeanimation}
                initial="initial"
                transition={{duration: 1.6}}
                whileInView="animate"
            >

            <p>
              Hello, I'm <span>Vedas Dixit</span>, a Computer Science student passionate about web development. I've developed a Modern Job Portal, showcasing skills in MongoDB, Express JS, and <span>React JS</span>. My goal is to excel as a freelancer, delivering innovative solutions to clients.
            </p>
            
          </motion.div>
        </div>


      <div className={styles.aboutimage_PG2}>
        <img src='/aboutimg.png' />
      </div> 
      


    </main>
  )
}

export default Pg2