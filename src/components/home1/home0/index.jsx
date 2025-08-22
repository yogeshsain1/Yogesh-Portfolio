import React, { useLayoutEffect, useEffect, useRef } from 'react'
import styles from "./style.module.scss";
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import { Poppins } from 'next/font/google'
import { Lato } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { Oswald } from 'next/font/google'
import { Nunito } from 'next/font/google'
import { Unica_One } from 'next/font/google';
const unica = Unica_One({
    subsets: ['latin'],
    weight: ['400']
});




const lato = Lato({
    subsets: ['latin'],
    weight: ['400']
});
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400']
});
const montserrat = Montserrat({
    subsets: ['vietnamese'],
    weight: ['500']
});
const raleway = Raleway({
    subsets: ['vietnamese'],
    weight: ['600']
});
const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400']
});

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400']
});


function H0() {


    useEffect(() => {

        gsap.fromTo('#text1', {
            opacity: 0,
            y: -280
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.13,
            duration: 7,
            ease: 'power4.out',
      
          })

    },[])

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

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



    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        xPercent += 0.02 * direction;
        requestAnimationFrame(animate);
    }



    return (
        <div className={styles.main}>
            <section className={styles.secpart2}>
                <g  className={montserrat.className}>
                <div className={styles.sliderContainer}>
                    <div ref={slider} className={styles.slider}>
                        <p ref={firstText}>Jai Shree Krishna -</p>
                        <p ref={secondText}>Jai Shree Krishna -</p>
                    </div>
                </div>
                </g>
            </section>
            <div id='text1' className={styles.linex}>
                <div className={styles.hellome}>
                    <h1 className={styles.itsme}>IT&apos;S ME,</h1>
                    <g data-scroll data-scroll-speed="0.4" className={raleway.className}>
                        <p  className={styles.vedas}>YOGESH</p>
                    </g>
                </div>

            </div>

        </div>
    )
}

export default H0


