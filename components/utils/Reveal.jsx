import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from "motion/react"

export default function Reveal( {children, width = "fit-content", projectIndex=2}, props) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    
    const mainControls = useAnimation();
    const [initialHiddenVariant, setInitialHiddenVariant] = useState({ opacity: 0, x: 0 });

    useEffect(() => {
        if (isInView) {
            const isOdd = projectIndex % 2 !== 0;
            setInitialHiddenVariant({ opacity: 0, x: isOdd ? -200 : 200 });
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, projectIndex, mainControls]);

return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
        variants={{
            hidden: isOddIndex,
            visible: {opacity:1, x:0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.25, delay: 0.25, ease:"easeIn"}}
        > {children} </motion.div>
    </div>
  )
}
