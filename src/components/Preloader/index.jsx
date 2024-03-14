'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import svgs from '../../../public/images/backgroundcard/DOT.svg'
const words = ["Hello", "Bonjour","Olá", "Ciao", "やあ", "Konnichiwa", "Annyeonghaseyo", "Nǐ hǎo", "नमस्ते"]
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
export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect( () => {
        if(index == words.length - 1) return;
        setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && 
            <>
                <motion.p className={poppins.className} variants={opacity} initial="initial" animate="enter">☉ {words[index]} ☉</motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}

