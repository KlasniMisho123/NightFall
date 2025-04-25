import React from 'react'
import Loading from './Loading'
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  return (
    <div className='h-[100vh] py-4 bg-[#A7C6DA] px-2 md:px-18 lg:px-28 '>
      <div className='flex gap-2 justify-between my-6'>
        <div className='min-w-none md:min-w-[60%] '> 
          {/* HERO CARD */}
          {/* Background color */}
          {/* ROCKET -!? FLIES AND LEAVES MOTTO? */}
          <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-blue-500/80 text-blue-500/90 font-bold rotate-[-5deg] text-sm md:text-base ' + urbanist.className }> Your partner in digital transformation</span> 
          <h1 className={`text-white text-3xl my-4 md:text-4xl lg:text-6xl font-bold mt-2 whitespace-nowrap ` + urbanist.className}>
            Digitize Your Idea
          </h1>

          <p className="text-gray-50 text-sm max-w-md mt-3 leading-relaxed md:text-base ">
          Nightfall Webworks helps you build modern, responsive websites that elevate your brand and grow your digital presence.
          From concept to launch — we code your vision into reality.
          </p>


          <div className="flex my-6 gap-4 sm:gap-[10%]">
            <button className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white bg-blue-500 border-blue-500 hover:border-white hover:brightness-90 transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap">
              Contact Us
            </button>
            <button className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white border-blue-500 hover:text-blue-500 transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap">
              About Us
            </button>
          </div>

          <section className='bg-pink-300'>
            STATS DIV
          </section>
        </div>
        <div className='min-w-none md:min-w-[35%] border-2 border-gray-800'> Hero </div>
        {/* <div> ANIMATION</div> */}
      </div>
        <section> OUR SERVICES </section>
    </div>
  )
}
