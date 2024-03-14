"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/Preloader";
import Slide from "@/components/SlidingImages";
import H2 from "@/components/home1/home2/h2";
import TXTS from "@/components/animations/app/page";
import ApNav from "@/components/appearingnav";
import H0 from "@/components/home1/home0";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Update initial screen width
    updateScreenWidth();

    // Add event listener for resizing
    window.addEventListener('resize', updateScreenWidth);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

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
      <ApNav />
      <main className={styles.main}>
        <g>
          <AnimatePresence mode='wait'>
            {isLoading && <Preloader />}
          </AnimatePresence>
        </g>

        <div style={{ overflow: 'hidden' }}>
          <H0 />
        </div>

        {screenWidth >= 780 && (
          <div style={{ overflow: "hidden" }}>
            <H2 />
          </div>
        )}

        <div style={{ overflow: "hidden" }}>
          <Slide />
        </div>

        <div style={{ zIndex: 0 }}>
          <TXTS />
        </div>
      </main>
    </>
  );
}
