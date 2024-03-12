'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Projects from './components/Projects';
import Card from './components/cards';
import { projects } from './components/cards/data';
import Link from 'next/link';
import BackHomeBtn from '@/components/backhomebtn';
export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href={`/`}>
          <BackHomeBtn />
        </Link>
      </div>


    </main>
  )
}
