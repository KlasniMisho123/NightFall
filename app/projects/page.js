import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Projects() {
  return (
    <div className='min-h-[100vh] py-4 px-4 md:px-14 lg:px-28 transition-all transition-duration-300 bg-nightfall' >
      <section className='my-10 mx-[20%] '>
        <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-purple-500/80 text-purple-500/90 font-bold rotate-[-5deg] text-sm md:text-base ' + urbanist.className }>
          Our Projects
        </span> 
        {/* Chat Like Description? */}
      </section>
    </div>
  )
}
