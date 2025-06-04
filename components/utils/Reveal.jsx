import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "motion/react"
// import moti

export default function Reveal( {children, width = "fit-content"}, props) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    },[isInView])

return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
        variants={{
            hidden: {opacity:0, x:200 },
            visible: {opacity:1, x:0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
        > {children} </motion.div>
    </div>
  )
}
