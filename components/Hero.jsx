'use client'
import React, { useState } from 'react'
import Loading from './Loading'
import { Poppins, Space_Mono, Urbanist } from 'next/font/google';
import StatCard from './statCard';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function Hero() {

  // const [color, setColor] = useState("red-500")
  let color = "red-500"

  return (
    <div className='py-4 bg-[#A7C6DA] px-4 md:px-14 lg:px-28 '>
      <div className='flex gap-2 justify-between my-6'>
        <div className='min-w-none md:min-w-[50%] '> 
          {/* HERO CARD */}
          {/* Background color */}
          {/* ROCKET -!? FLIES AND LEAVES MOTTO? */}
          <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-blue-500/80 text-blue-500/90 font-bold rotate-[-5deg] text-sm md:text-base ' + urbanist.className }> Your partner in digital transformation</span> 
          <h1 className={`text-white text-4xl my-4 md:text-6xl lg:text-7xl font-bold mt-2 whitespace-nowrap ` + urbanist.className}>
            Digitize Your Idea
          </h1>

          <p className="text-gray-50 text-sm max-w-md  mt-3 leading-relaxed lg:max-w-2xl md:text-base ">
          Nightfall Webworks helps you build modern, responsive websites that elevate your brand and grow your digital presence.
          From concept to launch — we code your vision into reality.
          </p>


          <div className="flex my-6 gap-[20%] sm:gap-[10%]  ">
            <button className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white bg-blue-500 border-blue-500 hover:border-white hover:brightness-90 transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap">
              Contact Us
            </button>
            <button className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white border-blue-500 hover:text-blue-500 transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap">
              About Us
            </button>
          </div>

          {/* <section className='bg-white mt-12 mb-4 flex justify-between p-16 px-8 rounded-lg '>
              <StatCard color="blue-500"/> 
              <StatCard color="purple-500" /> 
              <StatCard color="red-500" /> 

              <div className='flex flex-col gap-2 items-center '> 
                <div className={`border-6 rounded w-12 border-red-500`}></div>
                <div className={`font-bold text-4xl text-${color}`}>100+</div>
                <div className={`font-bold text-lg text-${color}`}>Years Of Service</div>
                <div className=''> To Monitor Mood </div>
              </div>

          </> */}
          <section className={'bg-white mt-12 mb-4 flex justify-between p-4 px-8 rounded-lg '} >
              
              <div className=' flex flex-col gap-4 items-center px-4 py-8 min-w-[150px] totalStats '> 
                <div className='border-1 border-blue-500  bg-blue-500 px-4 py-1 rounded-lg '> </div>   
                <h2 className={'text-4xl text-blue-500 italic ' + mono.className}> 300+ </h2>
                <h3 className={'text-sm text-blue-400 ' + poppins.className} > USERS </h3>
                <h4 className={'text-xs '}> To Monitor Mood </h4>
              </div>

              <div className=' flex flex-col gap-4 items-center px-4 py-8 min-w-[150px] totalStatsOne '>
                <div className='border-1 border-purple-500  bg-purple-500 px-4 py-1 rounded-lg '> </div>
                <h2 className={'text-4xl text-purple-500 italic ' + mono.className}> 200 </h2>
                <h3 className={'text-sm text-purple-500 ' + poppins.className}> Total Users </h3>
                <h4 className={'text-xs '}> For a Healthier Life </h4>
              </div>

              <div className=' flex flex-col gap-4 items-center px-4 py-8 min-w-[150px] totalStatsTwo '> 
                <div className='border-1 border-red-500  bg-red-500 px-4 py-1 rounded-lg '> </div>
                <h2 className={'text-4xl text-red-500 italic ' + mono.className}> 100 </h2>
                <h3 className={'text-sm text-red-500 ' + poppins.className}>  Mood Commits  </h3>
                <h4 className={'text-xs '}> Connecting with Your Emotions </h4>
              </div>

              <div className=' flex flex-col gap-4 items-center px-4 py-8 min-w-[150px] totalStatsTwo '> 
                <div className='border-1 border-red-500  bg-red-500 px-4 py-1 rounded-lg '> </div>
                <h2 className={'text-4xl text-red-500 italic ' + mono.className}> 100 </h2>
                <h3 className={'text-sm text-red-500 ' + poppins.className}>  Mood Commits  </h3>
                <h4 className={'text-xs '}> Connecting with Your Emotions </h4>
              </div>
          </section>  
        </div>
        <div className='min-w-none sm:min-w-[20%] md:min-w-[25%] border-2 border-gray-800'> Hero </div>
        {/* <div> ANIMATION</div> */}
      </div>
        <section> OUR SERVICES </section>
    </div>
  )
}
