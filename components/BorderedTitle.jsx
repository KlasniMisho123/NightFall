import React from 'react'
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function BorderedTitle(props) {

const {text, color } = props

  return (
    <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-purple-500/80 text-purple-500/90 font-bold rotate-[-5deg] text-sm md:text-base ' + urbanist.className }>
        {text}
    </span> 
  )
}
