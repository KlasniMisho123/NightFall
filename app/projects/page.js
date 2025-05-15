import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Projects() {
  return (
    // PURPLE/BLUE-500? (Span, Card)
    <div className='min-h-[100vh] py-4 px-4 md:px-14 lg:px-28 transition-all transition-duration-300 bg-nightfall' >
      <section className='my-10 mx-[20%] '>
        <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-purple-500/80 text-purple-500/90 font-bold rotate-[-5deg] text-sm md:text-base ' + urbanist.className }>
          Our Projects
        </span> 
        {/* Chat Like Description? */}
        <div className='text-white my-6'>
          <h1 className={`text-white text-4xl my-4 md:text-6xl lg:text-7xl font-bold mt-2 whitespace-nowrap text-center ` + urbanist.className} >Sharing Our Experience <br/> <span className='text-purple-500/80 '> With You  </span></h1>
          <p className="text-gray-400 text-sm max-w-md  mt-3 leading-relaxed lg:max-w-2xl md:text-base text-center " >Interested in what we've worked on and how we've contributed? Take a look at our past projects and see what we've been up to.</p>
        </div>
        
      </section>
    </div>
  )
}
