'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Projects from './components/Projects';
import Card from './components/cards';
import { projects } from './components/cards/data';
import Index from '@/components/Preloader_contact';
import { AnimatePresence, motion } from "framer-motion"
import ApNav from '@/components/appearingnav';
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
              }, 1000)
          }
      )()
  }, [])
const words = ["Work"]

  return (
    <>
    <div style={{zIndex:4}}>
    <ApNav/>
    </div>
            <AnimatePresence mode='wait'>
                {isLoading && <Index words={words}/>}
            </AnimatePresence>
    
    <main className={styles.main}>

      <Projects />


      <section className={styles.cardmain}>
        <div className={styles.cards}>
          {
            projects.map((projects, index) => {
              return <Card key={index} i={index} {...projects} />
            })

          }

        </div>
      </section>
      <div style={{ display: "flex", justifyContent: "center",zIndex:3 }}>
        <p style={{color:'wheat', fontSize:"50px"}}>:)</p>
      </div>


    </main>
    </>
  )
}
