import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Framer({children}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const hasTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
        setIsTouchDevice(hasTouch);
    }, []);

    const handleMouse = (e) => {
        if (isTouchDevice || !ref.current) return;
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        // Keep movement subtle so controls do not jump out of place.
        const middleX = (clientX - (left + width / 2)) * 0.22
        const middleY = (clientY - (top + height / 2)) * 0.22
        setPosition({x: middleX, y: middleY})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{position: "relative", display: "inline-block", willChange: "transform"}}
            ref={ref}
            
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onBlur={reset}
            animate={isTouchDevice ? { x: 0, y: 0 } : {x, y}}
            transition={{type: "spring", stiffness: 180, damping: 18, mass: 0.18}}
        >
            {children}
        </motion.div>
    )
}