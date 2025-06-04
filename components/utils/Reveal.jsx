import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "motion/react"
// import moti

export default function Reveal( {children, width = "fit-content"}, props) {

return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
        variants={{
            hidden: {opacity:0, x:200 },
            visible: {opacity:1, x:0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 0.25}}
        > {children} </motion.div>
    </div>
  )
}
