import React, { useLayoutEffect } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import gsap from 'gsap'
import BackHomeBtn from '@/components/backhomebtn'

function Card({ i, title, description, src, link, color, svgs, backs }) {

    useLayoutEffect(() => {


        gsap.fromTo('#cards', {
            scale: 1.1,
            opacity: 0
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power4.out',


            scrollTrigger: {
                trigger: '#cards',
                start: "top 500px",
                scrub: true
            }
        });

    }, []);



    return (
        < >

            <div className={styles.cardcontainer}>
                <motion.div>
                    <Image

                       fill
                        src={`/images/backgroundcard/${backs}`}
                        alt='images'

                    />


                </motion.div>
                <motion.div id='cards' style={{ backgroundColor: color, top: `calc(-10% + ${i * 30}px )` }} className={styles.card}>
                    <h2>{title}</h2>
                    <div className={styles.body}>

                        <div className={styles.imageContainer}>

                            <motion.div className={styles.inner}>
                                <Image

                                    fill
                                    src={`/images/${src}`}
                                    alt='images'

                                />
                            </motion.div>
                        </div>

                    </div>


                </motion.div>
                <div>
                    {/* <Image data-scroll data-scroll-speed="0.4"
                        style={{ overflow: "hidden", opacity: 0.1 }}
                        fill
                        src={svgs}
                        alt='images'
                    /> */}
                </div>
            </div>

            <motion.div className={styles.description}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p>{description}</p>


            </motion.div>

        </>
    )
}

export default Card