import React from 'react'
import Loading from './Loading'
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  return (
    <div className='h-[100vh] px-12 py-4 bg-[#A7C6DA] '>
      <div className='flex justify-between my-4'>
        <div className='min-w-[60%] bg-red-300'> 
          {/* HERO CARD */}
          {/* Background color */}
          {/* ROCKET -!? FLIES AND LEAVES MOTTO? */}
          {/* Dummy Text */}
          <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-blue-500/80 text-blue-500/90 font-bold rotate-[-5deg] text-sm md:text-base ' + urbanist.className }> Your partner in digital transformation</span> 
          <h1 className={`text-white text-4xl my-4 sm:text-6xl font-bold mt-2 ` + urbanist.className}>
            Digitize Your Idea
          </h1>

          <p className="text-gray-50 text-sm sm:text-base max-w-md mt-4">
            Nightfall Webworks helps you build modern, responsive websites that elevate your brand and grow your digital presence.
             From concept to launch — we code your vision into reality.
          </p>

          <div className='flex gap-2 my-4'>
            <button className='border-2 p-2 '>Contact Us</button>
            <button className='border-2 p-2 '>About Us</button>
          </div>
          <section>
            Stat DIV?
          </section>
        </div>
        <div className='min-w-[35%] bg-green-300'> Hero </div>
        {/* <div> ANIMATION</div> */}
      </div>
        <section> OUR SERVICES </section>
    </div>
  )
}
