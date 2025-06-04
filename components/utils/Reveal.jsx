import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "motion/react"
// import moti

export default function Reveal( {children, width = "fit-content"}, props) {

return (
     <div style={{ width }} {...props}>
        <div>{children}</div>
    </div>
  )
}
