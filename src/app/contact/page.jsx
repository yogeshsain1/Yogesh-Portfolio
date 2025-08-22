"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link'
import Framermagnetic from './component/framermagnetic'
import Profile from './profile'
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import WhiteBackHomeBtn from '@/components/Whitebackhomebtn'
import Index from '@/components/Preloader_contact'
import { Poppins } from 'next/font/google'
import { Lato } from 'next/font/google'  
import { Montserrat } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { Oswald } from 'next/font/google'
import { Nunito } from 'next/font/google'
const lato = Lato({
  subsets: ['latin'],
  weight: ['400']
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500']
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400']
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400']
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400']
});
const Contact = () => {
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        new LocomotiveScroll();
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 500);
      })();
    } else {
      // Mobile: fallback, simpler animation, no LocomotiveScroll
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 500);
    }
  }, []);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ourText = new SplitType('#text_1', { types: 'chars' })
    const chars = ourText.chars

    chars.forEach(char => {
      char.addEventListener('mouseenter', () => {
        gsap.to(char, {

          color: "white",
          opacity: 1
        });
      });

      char.addEventListener('mouseleave', () => {
        gsap.to(char, { color: "black", opacity: 0.7 });
      });
    });


    gsap.fromTo(chars, {
      opacity: 0,
      y: -250
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.13,
      duration: 4,
      ease: 'power4.out',

    })
  }, [])



  const words = ["Contact"]
  return (
    <>
      
      <div className={styles.main}>
      
        <AnimatePresence mode='wait'>
                {isLoading && <Index words={words} />}
            </AnimatePresence>
        <div className={styles.topComponents}>

          <div className={styles.bcshm}>
            <Link href={`/`}>
              <div className={styles.backhome}><WhiteBackHomeBtn /></div>
            </Link>
          </div>


          <div className={styles.profile}><Profile /></div>
        </div>

        <div className={styles.letsconnect}>

        <div className={styles.lets}>Let&apos;s</div>

          <div id='text_1' className={styles.connect}>

            <span className={lato.className}>CONNECT</span>

          </div>

        </div>

        <div className={styles.magneticconnects}>


          {/* LINKED IN */}
          <Link href="https://www.linkedin.com/in/yogeshsain/">
            <Framermagnetic>

              <svg width="70" height="69" viewBox="0 0 70 69" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M62.2222 0C64.285 0 66.2633 0.797005 67.7219 2.21568C69.1806 3.63436 70 5.5585 70 7.56481V60.5185C70 62.5248 69.1806 64.449 67.7219 65.8676C66.2633 67.2863 64.285 68.0833 62.2222 68.0833H7.77778C5.71498 68.0833 3.73667 67.2863 2.27806 65.8676C0.819442 64.449 0 62.5248 0 60.5185V7.56481C0 5.5585 0.819442 3.63436 2.27806 2.21568C3.73667 0.797005 5.71498 0 7.77778 0H62.2222ZM60.2778 58.6273V38.5806C60.2778 35.3103 58.9421 32.1739 56.5645 29.8615C54.187 27.549 50.9624 26.2499 47.6 26.2499C44.2944 26.2499 40.4444 28.2168 38.5778 31.167V26.9686H27.7278V58.6273H38.5778V39.98C38.5778 37.0676 40.9889 34.6847 43.9833 34.6847C45.4273 34.6847 46.8121 35.2426 47.8331 36.2357C48.8542 37.2287 49.4278 38.5756 49.4278 39.98V58.6273H60.2778ZM15.0889 21.0302C16.8216 21.0302 18.4834 20.3607 19.7087 19.169C20.9339 17.9773 21.6222 16.361 21.6222 14.6757C21.6222 11.1581 18.7056 8.28347 15.0889 8.28347C13.3458 8.28347 11.6742 8.95694 10.4416 10.1557C9.20909 11.3545 8.51667 12.9804 8.51667 14.6757C8.51667 18.1934 11.4722 21.0302 15.0889 21.0302ZM20.4944 58.6273V26.9686H9.72222V58.6273H20.4944Z" fill="white" />
              </svg>

            </Framermagnetic>
          </Link>
          {/* INSTAGRAM */}
          <Link href="https://www.instagram.com/itz_yogesh_13/">
            <Framermagnetic>
              <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M40.2533 0C44.3595 0.0109497 46.4436 0.0328492 48.243 0.083948L48.9511 0.109497C49.7686 0.138697 50.5753 0.175196 51.5498 0.218995C55.4333 0.40149 58.0831 1.01468 60.4081 1.91621C62.8171 2.84328 64.8464 4.09885 66.8758 6.12456C68.7317 7.94913 70.1678 10.1562 71.0841 12.5922C71.9857 14.9172 72.5988 17.567 72.7813 21.4542C72.8251 22.4251 72.8616 23.2317 72.8908 24.0529L72.9127 24.761C72.9675 26.5568 72.9894 28.6409 72.9967 32.747L73.0003 35.4699V40.2513C73.0093 42.9135 72.9813 45.5758 72.9164 48.2373L72.8945 48.9454C72.8653 49.7666 72.8288 50.5732 72.785 51.5441C72.6025 55.4313 71.982 58.0774 71.0841 60.4061C70.1705 62.8434 68.734 65.051 66.8758 66.8737C65.0507 68.7291 62.8438 70.1651 60.4081 71.0821C58.0831 71.9836 55.4333 72.5968 51.5498 72.7793C50.6837 72.8201 49.8175 72.8566 48.9511 72.8888L48.243 72.9107C46.4436 72.9618 44.3595 72.9873 40.2533 72.9946L37.5305 72.9983H32.7528C30.0893 73.0075 27.4258 72.9795 24.7631 72.9143L24.055 72.8924C23.1886 72.8596 22.3223 72.8219 21.4563 72.7793C17.5728 72.5968 14.9229 71.9836 12.5943 71.0821C10.1586 70.1673 7.9524 68.731 6.13031 66.8737C4.27267 65.0498 2.83526 62.8426 1.91831 60.4061C1.01678 58.0811 0.403596 55.4313 0.2211 51.5441C0.180436 50.678 0.143937 49.8118 0.111603 48.9454L0.0933541 48.2373C0.0260937 45.5758 -0.00432545 42.9136 0.002106 40.2513V32.747C-0.00808078 30.0848 0.0186881 27.4225 0.0824043 24.761L0.107954 24.0529C0.137153 23.2317 0.173652 22.4251 0.217451 21.4542C0.399946 17.567 1.01313 14.9209 1.91466 12.5922C2.8312 10.1537 4.27148 7.94595 6.13396 6.12456C7.9556 4.26848 10.1603 2.83229 12.5943 1.91621C14.9229 1.01468 17.5691 0.40149 21.4563 0.218995C22.4272 0.175196 23.2374 0.138697 24.055 0.109497L24.7631 0.0875977C27.4246 0.0227488 30.0868 -0.00523652 32.7491 0.00364965L40.2533 0ZM36.5012 18.2496C31.6611 18.2496 27.0193 20.1723 23.5968 23.5948C20.1744 27.0172 18.2517 31.6591 18.2517 36.4991C18.2517 41.3392 20.1744 45.9811 23.5968 49.4035C27.0193 52.826 31.6611 54.7487 36.5012 54.7487C41.3413 54.7487 45.9831 52.826 49.4056 49.4035C52.8281 45.9811 54.7508 41.3392 54.7508 36.4991C54.7508 31.6591 52.8281 27.0172 49.4056 23.5948C45.9831 20.1723 41.3413 18.2496 36.5012 18.2496ZM36.5012 25.5494C37.9392 25.5492 39.3631 25.8322 40.6916 26.3822C42.0202 26.9323 43.2274 27.7386 44.2444 28.7552C45.2613 29.7718 46.0681 30.9788 46.6186 32.3072C47.1691 33.6356 47.4525 35.0594 47.4528 36.4973C47.453 37.9353 47.17 39.3592 46.62 40.6877C46.0699 42.0163 45.2636 43.2235 44.247 44.2405C43.2304 45.2574 42.0234 46.0642 40.695 46.6147C39.3666 47.1652 37.9428 47.4487 36.5049 47.4489C33.6008 47.4489 30.8157 46.2953 28.7622 44.2418C26.7088 42.1883 25.5551 39.4032 25.5551 36.4991C25.5551 33.5951 26.7088 30.81 28.7622 28.7565C30.8157 26.703 33.6008 25.5494 36.5049 25.5494M55.6669 12.7747C54.4569 12.7747 53.2964 13.2554 52.4408 14.111C51.5852 14.9666 51.1045 16.1271 51.1045 17.3371C51.1045 18.5471 51.5852 19.7076 52.4408 20.5632C53.2964 21.4188 54.4569 21.8995 55.6669 21.8995C56.8769 21.8995 58.0374 21.4188 58.893 20.5632C59.7486 19.7076 60.2293 18.5471 60.2293 17.3371C60.2293 16.1271 59.7486 14.9666 58.893 14.111C58.0374 13.2554 56.8769 12.7747 55.6669 12.7747Z" fill="white" />
              </svg>
            </Framermagnetic>
          </Link>

          {/* x.com */}

          <Link href="https://twitter.com/codeyogesh">
            <Framermagnetic>
              <svg width="80" height="68" viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="68" rx="20" fill="white" />
                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M64.3675 60.8955L45.3087 29.5451L45.3413 29.5745L62.5255 7.10446H56.783L42.7843 25.3934L31.6675 7.10446H16.607L34.4001 36.3742L34.398 36.3717L15.6318 60.8955H21.3744L36.9377 40.5478L49.3069 60.8955H64.3675ZM29.3922 11.9945L56.1329 56.0054H51.5822L24.8199 11.9945H29.3922Z" fill="black" />
              </svg>
            </Framermagnetic>
          </Link>
     


          

        </div>
</div>

    </>
  )
}

export default Contact