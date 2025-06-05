import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";

export default function Reveal( {children, width = "fit-content", animationIndex=2, noRepeat=true} , props) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: noRepeat})
    const mainControls = useAnimation();
    
    const isOdd = animationIndex % 2 !== 0;
    const hiddenVariant = { opacity: 0, x: isOdd ? -200 : 200 };
    const delayVal =  isOdd ? 0.25 : 0.40; 

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
        variants={{
            hidden: hiddenVariant,
            visible: {opacity:1, x:0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.25, delay: delayVal, ease:"easeInOut"}}
        > {children} </motion.div>
    </div>
  )
}
