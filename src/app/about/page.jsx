"use client"
import Picture1 from '../../../public/images/10.jpg';
import Picture2 from '../../../public/images/20.png';
import Picture3 from '../../../public/images/30.jpg';
import Picture4 from '../../../public/images/40.png'
import Picture5 from '../../../public/images/50.png'
import Picture6 from '../../../public/images/60.jpg'
import Picture7 from '../../../public/images/70.jpg'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Navbar from '@/components/navbar/navbar'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import { motion, useTransform,AnimatePresence } from "framer-motion"
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import aboutmesvg from '../../../public/specialimgs/aboutmesvg.svg'
import { useScroll } from 'framer-motion'
import { useTrail } from '@react-three/drei'
import Lenis from '@studio-freight/lenis'
import LocomotiveScroll from 'locomotive-scroll';
import Framer from '../contact/component/framermagnetic';
import Donut from '@/components/Donute';
import Roundmousecurser from '@/components/animations/mousedotcurser/mousedottedcurser';
import Preloder from '@/components/Preloader_about';







const About = () => {

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












    const tl = gsap.timeline();
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]


    useLayoutEffect(() => {

        setTimeout(() => {

        }, [])

        gsap.from('[animate] .word', {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out',
            stagger: 0.1,

        })

        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

        const ourText = new SplitType('#textss', { types: 'words' });
        const t1 = ourText.words;

        const ourText2 = new SplitType('#textss2', { types: 'words' });
        const t2 = ourText2.words;
        tl.from(t1, {
            opacity: 0.3,
            duration: 1,
            ease: 'power1.out',
            stagger: 0.2,
            onComplete: () => {
                setTimeout(() => { gsap.to(t1, { opacity: 0 }) }, 1000)
            }
        }).add(() => { }, "+=1").fromTo(t2, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.7,
            ease: 'power1.out',
            stagger: 0.1,

        })

        gsap.to('#dott', {
            opacity: 0,
            duration: 1,
            repeat: -1,
            yoyo: true

        });



    }, [])


    useLayoutEffect(() => {




    }, [])


    const [index, setIndex] = useState(0);
    const images = [
        'pic2.jpeg',
        'pic2.jpg',
        'pic1.jpg'
    ];
    const colors = [
        '#D1D1D1',
        '#F0E915',
        '#A55215'
    ]

    const texts = [
        '“With a learning attitude, every day I strive to be better than anything that came before me.”',
        '“Just like a bird needs the wind to soar through the sky, you need a little wishful thinking to keep on living.”',
        '“A place where someone still thinks about you is a place you can call home.”'
    ];
    const heads = [
        'A Developer',
        'A Wildlife Enthusiast',
        'A Better Human'
    ];
    const skill = [
        'TECHNICAL SKILLS',
        'WILDLIFE PHOTOGRAPHER',
        'BE KIND'
    ];
    const skillset = [
        'Data Structure | React | Express | Next | Mongo | Docker | Version Control',
        'Research(Flora & Fauna) | Artistic Editor | Adobe Photoshop | Premiere Pro',
        'Active Listening | Empathy and Understanding | Team Collaboration'
    ];

    const ourText = new SplitType('#skillset', { types: 'words' })
    const words = ourText.words
    useLayoutEffect(() => {


        gsap.fromTo('#skillset', {
            y: '100%',
            opacity: 0,
            duration: 1,
            ease: 'power1.out',

        }, {
            opacity: 1,
            y: '0%',

        })
        gsap.fromTo('#maintxt', {
            y: '-100%',
            opacity: 0,
            duration: 1,
            ease: 'back.in',

        }, {
            opacity: 1,
            y: '0%',

        })
        gsap.fromTo('#middletxt', {
            opacity: 0,
            duration: 2,
            ease: 'back.in',

        }, {
            opacity: 1

        })
        gsap.fromTo('#headings', {
            y: '-40%',
            opacity: 0,
            duration: 2,
            ease: 'back.in',

        }, {
            opacity: 1,
            y: '0%',

        })





    }, [index])

    useEffect(() => {
        const interval = setInterval(() => {


            setIndex((prevIndex) => (prevIndex + 1) % images.length);

            gsap.from('#backgroundimage', {
                opacity: 0,
                duration: 1
            })


            gsap.to('#backgroundimage', {
                scale: 1.4,
                duration: 90
            })






        }, 7000);

        return () => clearInterval(interval);
    }, index);






    return (
        <main className={styles.main}>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloder />}
        </AnimatePresence>
            <div className={styles.donut}>
                <Donut />
            </div>
            <div className={styles.beforevw}>
                <motion.div id='scrollnow' className={styles.scrollnow}
                    style={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 6 }}

                >
                    <Framer>
                        <svg width="128" height="73" viewBox="0 0 198 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="99.5" cy="61.5" r="61.5" fill="#878787" />
                            <path d="M9.15516 72.3C7.71516 72.3 6.47516 72.06 5.43516 71.58C4.41516 71.1 3.62516 70.41 3.06516 69.51C2.50516 68.61 2.21516 67.54 2.19516 66.3H4.89516C4.89516 67.4 5.26516 68.27 6.00516 68.91C6.76516 69.55 7.81516 69.87 9.15516 69.87C10.4152 69.87 11.3952 69.56 12.0952 68.94C12.8152 68.32 13.1752 67.46 13.1752 66.36C13.1752 65.48 12.9352 64.71 12.4552 64.05C11.9952 63.39 11.3252 62.93 10.4452 62.67L7.47516 61.74C5.97516 61.28 4.81516 60.51 3.99516 59.43C3.19516 58.35 2.79516 57.08 2.79516 55.62C2.79516 54.44 3.05516 53.42 3.57516 52.56C4.11516 51.68 4.86516 51 5.82516 50.52C6.78516 50.02 7.91516 49.77 9.21516 49.77C11.1352 49.77 12.6752 50.31 13.8352 51.39C14.9952 52.45 15.5852 53.87 15.6052 55.65H12.9052C12.9052 54.57 12.5752 53.73 11.9152 53.13C11.2752 52.51 10.3652 52.2 9.18516 52.2C8.02516 52.2 7.11516 52.48 6.45516 53.04C5.81516 53.6 5.49516 54.38 5.49516 55.38C5.49516 56.28 5.73516 57.06 6.21516 57.72C6.69516 58.38 7.38516 58.85 8.28516 59.13L11.2852 60.09C12.7452 60.55 13.8752 61.33 14.6752 62.43C15.4752 63.53 15.8752 64.82 15.8752 66.3C15.8752 67.5 15.5952 68.55 15.0352 69.45C14.4752 70.35 13.6852 71.05 12.6652 71.55C11.6652 72.05 10.4952 72.3 9.15516 72.3ZM45.1434 72.3C43.8234 72.3 42.6634 72.05 41.6634 71.55C40.6834 71.05 39.9234 70.33 39.3834 69.39C38.8434 68.43 38.5734 67.3 38.5734 66V61.5C38.5734 60.18 38.8434 59.05 39.3834 58.11C39.9234 57.17 40.6834 56.45 41.6634 55.95C42.6634 55.45 43.8234 55.2 45.1434 55.2C47.0434 55.2 48.5734 55.71 49.7334 56.73C50.8934 57.75 51.5034 59.14 51.5634 60.9H48.8634C48.8034 59.84 48.4434 59.03 47.7834 58.47C47.1434 57.89 46.2634 57.6 45.1434 57.6C43.9634 57.6 43.0234 57.94 42.3234 58.62C41.6234 59.28 41.2734 60.23 41.2734 61.47V66C41.2734 67.24 41.6234 68.2 42.3234 68.88C43.0234 69.56 43.9634 69.9 45.1434 69.9C46.2634 69.9 47.1434 69.61 47.7834 69.03C48.4434 68.45 48.8034 67.64 48.8634 66.6H51.5634C51.5034 68.36 50.8934 69.75 49.7334 70.77C48.5734 71.79 47.0434 72.3 45.1434 72.3ZM75.3417 72V55.5H77.9817V58.65H78.6117L77.7417 60.6C77.7417 58.82 78.1217 57.48 78.8817 56.58C79.6617 55.66 80.8117 55.2 82.3317 55.2C84.0717 55.2 85.4517 55.75 86.4717 56.85C87.5117 57.93 88.0317 59.4 88.0317 61.26V62.25H85.3317V61.5C85.3317 60.2 85.0117 59.21 84.3717 58.53C83.7517 57.83 82.8617 57.48 81.7017 57.48C80.5617 57.48 79.6617 57.83 79.0017 58.53C78.3617 59.23 78.0417 60.22 78.0417 61.5V72H75.3417ZM117 72.24C115.68 72.24 114.54 71.99 113.58 71.49C112.62 70.99 111.87 70.27 111.33 69.33C110.81 68.37 110.55 67.24 110.55 65.94V61.56C110.55 60.24 110.81 59.11 111.33 58.17C111.87 57.23 112.62 56.51 113.58 56.01C114.54 55.51 115.68 55.26 117 55.26C118.32 55.26 119.46 55.51 120.42 56.01C121.38 56.51 122.12 57.23 122.64 58.17C123.18 59.11 123.45 60.23 123.45 61.53V65.94C123.45 67.24 123.18 68.37 122.64 69.33C122.12 70.27 121.38 70.99 120.42 71.49C119.46 71.99 118.32 72.24 117 72.24ZM117 69.84C118.18 69.84 119.1 69.51 119.76 68.85C120.42 68.19 120.75 67.22 120.75 65.94V61.56C120.75 60.28 120.42 59.31 119.76 58.65C119.1 57.99 118.18 57.66 117 57.66C115.84 57.66 114.92 57.99 114.24 58.65C113.58 59.31 113.25 60.28 113.25 61.56V65.94C113.25 67.22 113.58 68.19 114.24 68.85C114.92 69.51 115.84 69.84 117 69.84ZM155.238 72C154.278 72 153.438 71.81 152.718 71.43C151.998 71.05 151.438 70.51 151.038 69.81C150.638 69.11 150.438 68.29 150.438 67.35V52.56H144.888V50.1H153.138V67.35C153.138 68.03 153.328 68.57 153.708 68.97C154.088 69.35 154.598 69.54 155.238 69.54H160.488V72H155.238ZM191.227 72C190.267 72 189.427 71.81 188.707 71.43C187.987 71.05 187.427 70.51 187.027 69.81C186.627 69.11 186.427 68.29 186.427 67.35V52.56H180.877V50.1H189.127V67.35C189.127 68.03 189.317 68.57 189.697 68.97C190.077 69.35 190.587 69.54 191.227 69.54H196.477V72H191.227Z" fill="white" />
                        </svg>
                    </Framer>
                </motion.div>
                <div className={styles.whiteback}>

                    <p className={styles.p11} id='textss' style={{ color: "white" }}>
                        I Aspire to create my Profile
                    </p>
                    <motion.p
                        style={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }}


                        className={styles.p22} id='textss2'>
                        A profile that defines who i really am<span id='dott'>.</span>
                    </motion.p>
                </div>
            </div>
            <div ref={container} className={styles.container}>
                <div className={styles.sticky}>
                    {
                        pictures.map(({ src, scale }, index) => {
                            return <motion.div key={index} style={{ scale }} className={styles.el}>

                                <div className={styles.imageContainer}>
                                    <Image
                                        src={src}
                                        fill
                                        alt="image"
                                        placeholder='blur'
                                    />

                                </div>

                            </motion.div>
                        })
                    }
                </div>
            </div>



            {/*//! AFTER VIEW SCREEN */}
            <div className={styles.aftervw}>

                <motion.div id='headings' className={styles.headings}>
                    {heads[index]}
                </motion.div>

                <motion.div
                    style={{ backgroundColor: `${colors[index]}` }}

                    className={styles.lineee}></motion.div>

                <div className={styles.portfoliocontainer}>
                    <motion.div

                        className={styles.backgroundimage}
                        id='backgroundimage'
                        style={{
                            backgroundImage: `url(${images[index]})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',


                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}

                    >
                    </motion.div>
                    <motion.div
                        id='middletxt'
                        className={styles.innertext}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >

                        {texts[index]}

                    </motion.div>
                    <div className={styles.floattxt}>
                        <motion.div onClick={() => { index === 0 ? setIndex(2) : setIndex(index - 1); }} className={styles.firstimg}>
                            <Framer>
                                <svg width="70" height="50" viewBox="0 0 156 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M68.9629 71.458C68.2678 70.9833 67.5716 70.5078 66.9046 70.0031C67.2934 69.1143 67.6822 68.2256 68.1821 67.448C69.256 67.3739 70.3299 67.2937 71.4038 67.2135C73.5515 67.053 75.6992 66.8925 77.8469 66.7814C81.1875 66.6321 84.5248 66.486 87.8604 66.34C98.1683 65.8889 108.46 65.4385 118.783 64.8929C121.283 64.7818 124.005 64.5041 126.226 63.4488C127.615 62.7822 128.781 60.616 129.004 59.0052C129.281 56.7278 127.837 54.506 125.504 54.0617C121.949 53.3951 118.228 53.0619 114.562 53.1175C106.291 53.2129 98.0388 53.3812 89.7941 53.5493C83.6426 53.6748 77.4954 53.8001 71.3482 53.8951C70.9397 53.8951 70.5151 53.9345 70.0842 53.9745C68.4053 54.1302 66.6311 54.2948 65.3493 52.1732C65.4185 52.0152 65.4876 51.8554 65.5574 51.6942C65.8799 50.9487 66.2159 50.1724 66.6269 49.396C66.8344 48.981 67.0993 48.5851 67.3621 48.1924C67.7324 47.6392 68.0983 47.0924 68.2932 46.5076C68.9042 44.7857 69.4597 43.0083 69.6818 41.2309C70.0151 38.4536 66.9601 36.2319 64.5717 37.4539C63.2942 38.1204 61.9611 38.898 60.9058 39.8423C52.5741 47.2852 43.4647 53.4507 33.189 57.8943C29.6341 59.394 26.1903 61.4491 26.3014 65.6705C26.4125 70.5585 30.4117 72.3359 34.522 73.2802C43.5758 75.3353 52.0742 78.8902 60.4059 82.8339C62.4055 83.7781 64.5162 84.5002 66.6824 84.9446C69.293 85.5 71.8481 85.1112 73.681 82.8339C75.3474 80.6676 75.2919 77.1128 73.0145 74.6688C71.8515 73.4307 70.4096 72.446 68.9629 71.458Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M92.3693 1.0443C90.4442 0.860048 88.6732 0.690539 87.1229 0.516521C63.072 1.07197 42.7427 6.07096 23.0798 14.236C21.9172 14.7011 20.8324 15.3219 19.7603 15.9355C19.5519 16.0547 19.3441 16.1737 19.1362 16.2912C11.0267 20.8458 5.58326 27.4557 2.75049 36.3984C-0.748818 47.3407 -1.08211 58.1163 2.69493 69.0586C5.80545 77.8347 9.9713 86.0553 15.6369 93.4428C17.7228 96.1725 19.8565 98.8664 21.9882 101.558C24.4542 104.671 26.9175 107.781 29.3009 110.939C33.9111 117.049 39.8543 121.215 46.9085 123.937C55.1847 127.158 63.7386 129.547 72.6257 130.491C76.6249 130.935 80.7908 131.047 84.79 130.491C88.436 129.976 92.0088 129.118 95.5892 128.259C97.4088 127.822 99.2304 127.385 101.065 126.992C111.563 124.77 120.394 119.66 127.393 111.55C132.003 106.274 136.335 100.72 140.668 95.1652L140.668 95.1646C146.667 87.4995 150.444 78.6679 153.221 69.3919C156.665 57.7831 155.443 46.7852 149.555 36.1762C145 27.9556 139.335 20.7348 132.392 14.5138C125.56 8.40384 117.672 4.51575 108.73 3.01603C103.009 2.06261 97.2036 1.50696 92.3693 1.0443ZM73.6285 118.724L72.8479 118.605C72.67 117.741 72.5067 116.949 72.3519 116.2C71.8299 113.671 71.4052 111.613 70.8483 108.829C70.1993 109.455 69.5889 110.044 69.0052 110.608C66.7913 112.747 64.9597 114.516 62.8499 116.494C52.2408 114.827 42.9093 110.495 36.4106 100.941C34.3687 97.9465 32.0975 95.1186 29.8268 92.2914C28.3914 90.5042 26.9562 88.7172 25.5793 86.8885C19.6916 79.1678 15.5813 70.5584 13.1374 61.1158C10.7489 51.9509 13.0263 43.5081 17.0255 35.3986C19.6361 30.1218 24.5796 27.1224 29.8008 25.2894C39.1878 21.9568 48.6304 18.6796 58.2952 16.4023C74.2921 12.6253 90.4555 12.2919 106.73 15.1247C114.673 16.5134 121.561 19.8461 127.115 25.5116C147.278 46.0632 149.055 59.9493 136.113 84.1113C131.614 92.4985 125.282 99.9971 119.006 107.218C113.34 113.717 106.23 117.882 96.8988 118.16C95.0961 118.208 93.2935 118.714 91.4639 119.227C89.0652 119.9 86.6202 120.586 84.0679 120.271C80.6939 119.804 77.3199 119.288 73.6285 118.724Z" fill="black" />
                                </svg>
                            </Framer>
                        </motion.div>

                        <motion.div onClick={() => { index === 2 ? setIndex(0) : setIndex(index + 1); }} className={styles.secimg}>
                            <Framer>
                                <svg width="70" height="50" viewBox="0 0 156 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M86.1567 59.9258C86.8518 60.4005 87.5481 60.876 88.215 61.3807C87.8262 62.2695 87.4374 63.1582 86.9375 63.9358C85.8636 64.0098 84.7897 64.0901 83.7159 64.1703C81.5682 64.3308 79.4204 64.4913 77.2727 64.6023C73.9322 64.7517 70.5949 64.8978 67.2593 65.0437C56.9514 65.4949 46.6597 65.9453 36.3363 66.4909C33.8368 66.602 31.1151 66.8797 28.8933 67.935C27.5047 68.6016 26.3382 70.7678 26.116 72.3786C25.8383 74.656 27.2825 76.8777 29.6154 77.3221C33.1702 77.9886 36.8917 78.3219 40.5577 78.2663C48.8284 78.1709 57.0808 78.0026 65.3255 77.8345C71.4771 77.709 77.6243 77.5836 83.7715 77.4887C84.1799 77.4887 84.6045 77.4493 85.0355 77.4093C86.7143 77.2536 88.4885 77.089 89.7703 79.2106C89.7012 79.3686 89.632 79.5284 89.5623 79.6896C89.2397 80.4351 88.9038 81.2114 88.4928 81.9878C88.2853 82.4028 88.0203 82.7987 87.7575 83.1914C87.3873 83.7446 87.0213 84.2914 86.8264 84.8762C86.2154 86.5981 85.66 88.3755 85.4378 90.1529C85.1045 92.9301 88.1595 95.1519 90.5479 93.9299C91.8254 93.2634 93.1585 92.4858 94.2139 91.5415C102.546 84.0986 111.655 77.9331 121.931 73.4895C125.486 71.9898 128.929 69.9347 128.818 65.7132C128.707 60.8253 124.708 59.0478 120.598 58.1036C111.544 56.0485 103.045 52.4936 94.7137 48.5499C92.7142 47.6057 90.6035 46.8836 88.4372 46.4392C85.8266 45.8837 83.2716 46.2726 81.4386 48.5499C79.7722 50.7162 79.8278 54.271 82.1051 56.715C83.2682 57.9531 84.71 58.9378 86.1567 59.9258Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.7504 130.339C64.6754 130.524 66.4465 130.693 67.9968 130.867C92.0476 130.312 112.377 125.313 132.04 117.148C133.202 116.683 134.287 116.062 135.359 115.448C135.568 115.329 135.776 115.21 135.983 115.093C144.093 110.538 149.536 103.928 152.369 94.9854C155.868 84.0431 156.202 73.2675 152.425 62.3252C149.314 53.5491 145.148 45.3285 139.483 37.941C137.397 35.2113 135.263 32.5174 133.131 29.826C130.665 26.7125 128.202 23.6024 125.819 20.4445C121.209 14.3345 115.265 10.1687 108.211 7.44698C99.9349 4.22539 91.3811 1.83694 82.4939 0.892676C78.4947 0.448325 74.3288 0.337229 70.3296 0.892676C66.6836 1.40829 63.1109 2.26577 59.5304 3.12508C57.7108 3.5618 55.8892 3.999 54.055 4.39202C43.5571 6.61381 34.7255 11.724 27.7269 19.8335C23.1168 25.11 18.7845 30.6643 14.4521 36.2185L14.4517 36.2192C8.45284 43.8843 4.67579 52.7159 1.89856 61.9918C-1.5452 73.6007 -0.323232 84.5986 5.56451 95.2076C10.1192 103.428 15.7847 110.649 22.7278 116.87C29.5598 122.98 37.4472 126.868 46.3899 128.368C52.1104 129.321 57.9161 129.877 62.7504 130.339ZM81.4911 12.66L82.2717 12.7793C82.4496 13.6432 82.6129 14.4344 82.7677 15.1843C83.2897 17.7128 83.7144 19.7705 84.2714 22.5551C84.9204 21.9293 85.5307 21.3397 86.1144 20.7758C88.3283 18.6372 90.1599 16.8679 92.2698 14.89C102.879 16.5563 112.21 20.8888 118.709 30.4425C120.751 33.4372 123.022 36.2652 125.293 39.0924C126.728 40.8796 128.163 42.6666 129.54 44.4953C135.428 52.216 139.538 60.8254 141.982 70.268C144.371 79.4329 142.093 87.8757 138.094 95.9852C135.484 101.262 130.54 104.261 125.319 106.094C115.932 109.427 106.489 112.704 96.8244 114.981C80.8276 118.759 64.6641 119.092 48.3895 116.259C40.4466 114.87 33.5591 111.538 28.0046 105.872C7.84184 85.3206 6.06441 71.4344 19.0063 47.2725C23.5055 38.8853 29.8376 31.3867 36.1141 24.1659C41.7797 17.6672 48.8894 13.5014 58.2209 13.2236C60.0235 13.1756 61.8261 12.6699 63.6558 12.1566C66.0544 11.4837 68.4994 10.7978 71.0517 11.1129C74.4257 11.5801 77.7997 12.0958 81.4911 12.66Z" fill="black" />
                                </svg>
                            </Framer>

                        </motion.div>

                    </div>

                </div>


                <div className={styles.lowerskillsec}>
                    <motion.div id='maintxt' className={styles.skill}

                    >
                        {skill[index]}
                    </motion.div>
                    <div className={styles.lineee}></div>

                    <motion.div id='skillset' className={styles.skillset}>
                        {skillset[index]}
                    </motion.div>

                </div>

            </div>

            

        </main>

    )
}

export default About