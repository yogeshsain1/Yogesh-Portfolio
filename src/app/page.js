"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Dot from "@/components/dot_line";
import Object3d from "@/components/threejs";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const greetings = ["Hello", "Olá", "Ciao", "Konnichiwa", "Annyeonghaseyo", "Nǐ hǎo", "नमस्ते"];
let onetime = true;
export default function Home() {
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

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
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
    xPercent += 0.1 * direction;
  }





  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {

      if (currentIndex === greetings.length - 1) {

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

          <g className={styles.nav}><Navbar></Navbar></g>
          
          <div className={styles.outscroll}>
            <div className={styles.arctext}>
              <Image
                src="/arctext.png"
                width={200}
                height={200}
                alt="Picture"
              />
            </div>
            <div className={styles.scrollss}>
              <svg width="198" height="123" viewBox="0 0 198 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="99.5" cy="61.5" r="61.5" fill="#878787" />
                <path d="M9.15516 72.3C7.71516 72.3 6.47516 72.06 5.43516 71.58C4.41516 71.1 3.62516 70.41 3.06516 69.51C2.50516 68.61 2.21516 67.54 2.19516 66.3H4.89516C4.89516 67.4 5.26516 68.27 6.00516 68.91C6.76516 69.55 7.81516 69.87 9.15516 69.87C10.4152 69.87 11.3952 69.56 12.0952 68.94C12.8152 68.32 13.1752 67.46 13.1752 66.36C13.1752 65.48 12.9352 64.71 12.4552 64.05C11.9952 63.39 11.3252 62.93 10.4452 62.67L7.47516 61.74C5.97516 61.28 4.81516 60.51 3.99516 59.43C3.19516 58.35 2.79516 57.08 2.79516 55.62C2.79516 54.44 3.05516 53.42 3.57516 52.56C4.11516 51.68 4.86516 51 5.82516 50.52C6.78516 50.02 7.91516 49.77 9.21516 49.77C11.1352 49.77 12.6752 50.31 13.8352 51.39C14.9952 52.45 15.5852 53.87 15.6052 55.65H12.9052C12.9052 54.57 12.5752 53.73 11.9152 53.13C11.2752 52.51 10.3652 52.2 9.18516 52.2C8.02516 52.2 7.11516 52.48 6.45516 53.04C5.81516 53.6 5.49516 54.38 5.49516 55.38C5.49516 56.28 5.73516 57.06 6.21516 57.72C6.69516 58.38 7.38516 58.85 8.28516 59.13L11.2852 60.09C12.7452 60.55 13.8752 61.33 14.6752 62.43C15.4752 63.53 15.8752 64.82 15.8752 66.3C15.8752 67.5 15.5952 68.55 15.0352 69.45C14.4752 70.35 13.6852 71.05 12.6652 71.55C11.6652 72.05 10.4952 72.3 9.15516 72.3ZM45.1434 72.3C43.8234 72.3 42.6634 72.05 41.6634 71.55C40.6834 71.05 39.9234 70.33 39.3834 69.39C38.8434 68.43 38.5734 67.3 38.5734 66V61.5C38.5734 60.18 38.8434 59.05 39.3834 58.11C39.9234 57.17 40.6834 56.45 41.6634 55.95C42.6634 55.45 43.8234 55.2 45.1434 55.2C47.0434 55.2 48.5734 55.71 49.7334 56.73C50.8934 57.75 51.5034 59.14 51.5634 60.9H48.8634C48.8034 59.84 48.4434 59.03 47.7834 58.47C47.1434 57.89 46.2634 57.6 45.1434 57.6C43.9634 57.6 43.0234 57.94 42.3234 58.62C41.6234 59.28 41.2734 60.23 41.2734 61.47V66C41.2734 67.24 41.6234 68.2 42.3234 68.88C43.0234 69.56 43.9634 69.9 45.1434 69.9C46.2634 69.9 47.1434 69.61 47.7834 69.03C48.4434 68.45 48.8034 67.64 48.8634 66.6H51.5634C51.5034 68.36 50.8934 69.75 49.7334 70.77C48.5734 71.79 47.0434 72.3 45.1434 72.3ZM75.3417 72V55.5H77.9817V58.65H78.6117L77.7417 60.6C77.7417 58.82 78.1217 57.48 78.8817 56.58C79.6617 55.66 80.8117 55.2 82.3317 55.2C84.0717 55.2 85.4517 55.75 86.4717 56.85C87.5117 57.93 88.0317 59.4 88.0317 61.26V62.25H85.3317V61.5C85.3317 60.2 85.0117 59.21 84.3717 58.53C83.7517 57.83 82.8617 57.48 81.7017 57.48C80.5617 57.48 79.6617 57.83 79.0017 58.53C78.3617 59.23 78.0417 60.22 78.0417 61.5V72H75.3417ZM117 72.24C115.68 72.24 114.54 71.99 113.58 71.49C112.62 70.99 111.87 70.27 111.33 69.33C110.81 68.37 110.55 67.24 110.55 65.94V61.56C110.55 60.24 110.81 59.11 111.33 58.17C111.87 57.23 112.62 56.51 113.58 56.01C114.54 55.51 115.68 55.26 117 55.26C118.32 55.26 119.46 55.51 120.42 56.01C121.38 56.51 122.12 57.23 122.64 58.17C123.18 59.11 123.45 60.23 123.45 61.53V65.94C123.45 67.24 123.18 68.37 122.64 69.33C122.12 70.27 121.38 70.99 120.42 71.49C119.46 71.99 118.32 72.24 117 72.24ZM117 69.84C118.18 69.84 119.1 69.51 119.76 68.85C120.42 68.19 120.75 67.22 120.75 65.94V61.56C120.75 60.28 120.42 59.31 119.76 58.65C119.1 57.99 118.18 57.66 117 57.66C115.84 57.66 114.92 57.99 114.24 58.65C113.58 59.31 113.25 60.28 113.25 61.56V65.94C113.25 67.22 113.58 68.19 114.24 68.85C114.92 69.51 115.84 69.84 117 69.84ZM155.238 72C154.278 72 153.438 71.81 152.718 71.43C151.998 71.05 151.438 70.51 151.038 69.81C150.638 69.11 150.438 68.29 150.438 67.35V52.56H144.888V50.1H153.138V67.35C153.138 68.03 153.328 68.57 153.708 68.97C154.088 69.35 154.598 69.54 155.238 69.54H160.488V72H155.238ZM191.227 72C190.267 72 189.427 71.81 188.707 71.43C187.987 71.05 187.427 70.51 187.027 69.81C186.627 69.11 186.427 68.29 186.427 67.35V52.56H180.877V50.1H189.127V67.35C189.127 68.03 189.317 68.57 189.697 68.97C190.077 69.35 190.587 69.54 191.227 69.54H196.477V72H191.227Z" fill="white" />
              </svg>
            </div>


          </div>

          
          






          <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
              <p ref={firstText}>Creative Developer -</p>
              <p ref={secondText}>Creative Developer -</p>
            </div>
          </div>

      <div className={styles.mynamehome}>
            <span className={styles.mynamevd}>vedas dixit</span>
            <span className={styles.mynameportfolio}>portfolio</span>
          </div>




        </div>



        <Dot />



      </main>
      <div>

      </div>

      <Object3d />

    </>

  );
}