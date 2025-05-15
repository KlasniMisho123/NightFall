import BorderedTitle from '@/components/BorderedTitle';
import { Inter, Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export default function Projects() {
  return (
    // PURPLE/BLUE-500? (Span, Card)
    <div className='min-h-[100vh] py-4 px-4 md:px-14 lg:px-28 transition-all transition-duration-300 bg-nightfall' >
      <section className='my-10 mx-[20%] '>
        <BorderedTitle text="Our Projects" color="purple-500" angle={5}/>
        {/* Light Background */}
        <div className='text-white my-6'>
          <h1 className={`text-white text-4xl my-4 md:text-6xl lg:text-7xl font-bold mt-2 whitespace-nowrap text-center leading-tight ` + urbanist.className} >Sharing Our Experience <br/> <span className='text-purple-500/80 '> With You  </span></h1>
          <p className={"text-gray-400 text-sm max-w-md  mt-3 leading-relaxed lg:max-w-2xl md:text-base text-center " + inter.className} >Interested in what we've worked on and how we've contributed? Take a look at our past projects and see what we've been up to.</p>
        </div>
        {/* Div For Projects */}
      </section>
        <div className='my-12 flex bg-[#091826] justify-center gap-8 w-full text-white'>
          <div className='flex flex-col '>
            1
          </div>
          <div className='flex flex-col mt-5'>
            2
          </div>
        </div>
    </div>
  )
}
