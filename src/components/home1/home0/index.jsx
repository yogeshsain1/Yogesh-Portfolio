import React, { useLayoutEffect, useEffect, useRef } from 'react'
import styles from "./style.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
function H0() {
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
        requestAnimationFrame(animate);
        xPercent += 0.02 * direction;
    }





    useLayoutEffect(() => {
        setTimeout(() => {

            gsap.fromTo('#ved', {
                opacity: 0,
                y: -150
            }, {


                y: 0,
                opacity: 1,
                duration: 2.3,
                ease: 'power4.out',

            })
        }, 2500)


    }, [])





    return (
        <div className={styles.main}>
            <section className={styles.secpart2}>

                <div className={styles.sliderContainer}>
                    <div ref={slider} className={styles.slider}>
                        <p ref={firstText}>Jai Shree Krishna -</p>
                        <p ref={secondText}>Jai Shree Krishna -</p>
                    </div>
                </div>

            </section>
            <div className={styles.linex}>
                <div className={styles.hellome}>
                    <h1 className={styles.itsme}>IT'S ME,</h1>
                    <p  data-scroll data-scroll-speed="0.4"  className={styles.vedas}>VEDAS</p>
                </div>
            </div>

        </div>
    )
}

export default H0


