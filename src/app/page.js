"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import { Roboto } from "next/font/google";
import Dot from "@/components/dot_line";
import { motion, AnimatePresence } from "framer-motion"; 
import Object3d from "@/components/threejs";


const greetings = ["Hello", "Olá", "Ciao", "Konnichiwa", "Annyeonghaseyo", "Nǐ hǎo", "नमस्ते"];
let onetime = true;
export default function Home() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const intervalId = setInterval(() => {

      if (currentIndex  === greetings.length - 1) {

        clearInterval(intervalId);
        
      } else {

        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 180);


    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    
    <>
      <main className={styles.main}>
        <div className={styles.home}>

          <div className={styles.greets}>
            {greetings[currentIndex]}
          </div>

          <div className={styles.upmove} />
          <Navbar></Navbar>

          <div>
            <div className={styles.arctext}>
              <Image
                src="/arctext.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            {/* <div>  arrow </div> */}
          </div>

          <div className={styles.displayname} >
            <img src="/vedas.svg" alt="SVG Image" />
          </div>
        </div>

        <Dot />

        
  
      </main>

      <Object3d/>

    </>
    
  );
}