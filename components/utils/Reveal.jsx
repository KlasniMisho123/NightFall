import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from "motion/react"

export default function Reveal( {children, width = "fit-content", projectIndex=2}, props) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const {isOddIndex, setIsOddIndex} = useState({}) 

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
             if(projectIndex % 2 == 0){
                setIsOddIndex({opacity:0, x:200 })
            } else {
                setIsOddIndex({opacity:0, x:-200 },)
            }
            mainControls.start("visible")
        }
    },[])
    
    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    },[isInView])


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
