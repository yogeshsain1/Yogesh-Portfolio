"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Dot from "@/components/dot_line";
import Object3d from "@/components/threejs";
import gsap from 'gsap';
import contact from "@/components/Contact";
import { ScrollTrigger } from 'gsap/all';
import MainHome from "@/components/home1/h";
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/Preloader";
import Slide from "@/components/SlidingImages";
import H2 from "@/components/home1/home2/h2";
import TextAnime from "@/components/animations/page";
import TXTS from "@/components/animations/app/page";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  return (

    <>
      <main className={styles.main}>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>

        <Navbar />
        <H2 />
        <div style={{ overflow: "hidden" }}>

        <Slide />
        </div>

        <TXTS/>



      </main>


    </>

  );
}