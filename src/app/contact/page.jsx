"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './page.module.scss'
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link'
import Framermagnetic from './component/framermagnetic'
import Profile from './profile'
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Index from '@/components/Preloader_contact'
import { Lato } from 'next/font/google'  
import ApNav from '@/components/appearingnav'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400']
});

const Contact = () => {
  const headingRef = useRef(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId;
    let locomotiveInstance;

    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        locomotiveInstance = new LocomotiveScroll();
        timeoutId = setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 500);
      })();
    } else {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (locomotiveInstance) {
        locomotiveInstance.destroy();
      }
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const headingElement = headingRef.current;
    if (!headingElement) return;

    const split = new SplitType(headingElement, { types: 'chars' });
    const chars = split.chars;

    const context = gsap.context(() => {
      gsap.fromTo(chars, {
        opacity: 0,
        y: -90
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1.2,
        ease: 'power3.out'
      });

      gsap.fromTo(`.${styles.card}`, {
        opacity: 0,
        y: 40
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.2
      });
    });

    const listeners = chars.map((char) => {
      const onEnter = () => gsap.to(char, { color: '#f7e95f', opacity: 1, duration: 0.2 });
      const onLeave = () => gsap.to(char, { color: '#efe9d2', opacity: 0.86, duration: 0.2 });
      char.addEventListener('mouseenter', onEnter);
      char.addEventListener('mouseleave', onLeave);
      return { char, onEnter, onLeave };
    });

    return () => {
      listeners.forEach(({ char, onEnter, onLeave }) => {
        char.removeEventListener('mouseenter', onEnter);
        char.removeEventListener('mouseleave', onLeave);
      });
      context.revert();
      split.revert();
    };
  }, [])



  const words = ["Contact"]
  return (
    <>
      <div className={styles.main}>
        <ApNav />
        <div className={styles.noise} aria-hidden="true" />
        <div className={styles.blobOne} aria-hidden="true" />
        <div className={styles.blobTwo} aria-hidden="true" />

        <AnimatePresence mode='wait'>
          {isLoading && <Index words={words} />}
        </AnimatePresence>

        <div className={styles.topComponents}>
          <div className={styles.profile}>
            <Profile />
          </div>
        </div>

        <div className={styles.letsconnect}>
          <div className={styles.lets}>LET&apos;S</div>
          <div ref={headingRef} className={styles.connect}>
            <span className={lato.className}>CONNECT</span>
          </div>
        </div>

        <motion.section
          className={styles.grid}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div className={styles.card} whileHover={{ y: -6 }}>
            <h3>Email</h3>
            <p>Have an idea or role? I’d love to hear from you.</p>
            <Link href="mailto:yogeshsain054@gmail.com">
              <Framermagnetic>
                <button className={styles.primaryBtn}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7.5C3 6.11929 4.11929 5 5.5 5H18.5C19.8807 5 21 6.11929 21 7.5V16.5C21 17.8807 19.8807 19 18.5 19H5.5C4.11929 19 3 17.8807 3 16.5V7.5Z" stroke="#FFDD00" strokeWidth="1.5"/>
                      <path d="M4 7L12 12.5L20 7" stroke="#fcfbf2" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Say Hello
                  </span>
                </button>
              </Framermagnetic>
            </Link>
          </motion.div>

          <motion.div className={styles.card} whileHover={{ y: -6 }}>
            <h3>Social</h3>
            <p>Prefer socials? Reach me on your favorite platform.</p>
            <div className={styles.socialRow}>
              <Link href="https://www.instagram.com/itz_yogesh_13/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Framermagnetic>
                  <div className={styles.iconChip}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="#FFDD00" strokeWidth="1.8"/>
                      <circle cx="12" cy="12" r="4" stroke="#FFDD00" strokeWidth="1.8"/>
                      <circle cx="17.3" cy="6.7" r="1.1" fill="#FFDD00"/>
                    </svg>
                  </div>
                </Framermagnetic>
              </Link>
            </div>
          </motion.div>

          <motion.div className={styles.card} whileHover={{ y: -6 }}>
            <h3>Availability</h3>
            <p>Open to freelance, full-time roles, and collaborations.</p>
            <Link href="mailto:yogeshsain054@gmail.com?subject=Project%20inquiry">
              <Framermagnetic>
                <button className={styles.secondaryBtn}>Start a project</button>
              </Framermagnetic>
            </Link>
          </motion.div>
        </motion.section>

       
      </div>

    </>
  )
}

export default Contact