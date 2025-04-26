'use client'
import React, { useState } from 'react'
import Loading from './Loading'
import { Poppins, Space_Mono, Urbanist } from 'next/font/google';
import StatCard from './statCard';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function Hero() {
  // const [color, setColor] = useState("red-500")

  return (
    <div className='py-4 bg-gray-800 px-4 md:px-14 lg:px-28 '>
      <div className='flex gap-2 justify-between my-6'>
        <div className='min-w-none md:min-w-[50%] '> 
          {/* HERO CARD */}
          {/* HERO BACKGROUND? */}
          {/* Background color  bg-[#A7C6DA]/ bg-gray-800 / bg-gray-900 */}
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
            <Link className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white bg-blue-500 border-blue-500 hover:border-white hover:brightness-90 text-center
            transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap"
            href={'/support'}
            >
              Contact Us
            </Link>
            <Link className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white border-blue-500 hover:text-blue-500 transition-all duration-300 text-center
            cursor-pointer shadow-sm whitespace-nowrap"
            href={'/aboutus'}
            >
              About Us
            </Link>
          </div>

          <section className={'flex overflow-x-auto whitespace-nowrap bg-white mt-12 mb-4 flex justify-between py-4 px-2 rounded-lg  md:px-4 lg:px-8 '} >
              
              {/* <StatCard /> */}
              {/* RESPONSIVE */}
              <div className="p-6 flex flex-col justify-between bg-white shadow-md">
                <i className="fa-solid fa-laptop-code text-8xl text-indigo-700 text-center"></i>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="text-gray-600">WEBSITE DEVELOPMENT</p>
                  <p>Custom-built websites for businesses of all sizes.</p>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between bg-white shadow-md">
                <i className="fa-solid fa-paint-brush text-8xl text-purple-700 text-center"></i>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="text-gray-600">UI/UX DESIGN</p>
                  <p>Crafting stunning, user-friendly interfaces.</p>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between bg-white shadow-md">
                <i className="fa-solid fa-chart-line text-8xl text-blue-600 text-center"></i>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="text-gray-600">SEO OPTIMIZATION</p>
                  <p>Boost your online presence and search rankings.</p>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between bg-white shadow-md">
                <i className="fa-solid fa-headset text-8xl text-gray-700 text-center"></i>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="text-gray-600">ONGOING SUPPORT</p>
                  <p>We maintain and update your website, so you don't have to.</p>
                </div>
              </div>
          </section>  
        </div>
        <div className='min-w-none sm:min-w-[20%] md:min-w-[25%] border-2 border-gray-800'>
           Hero
           {/* <img src='https://i.pinimg.com/originals/df/88/b0/df88b01e4797b1efb65c74be984dc7f4.gif' /> */}
        </div>
      </div>
        {/* <div> ANIMATION</div> */}
        {/* LAZY LOAD ANIMATION */}
        <section className='grid grid-cols-2 md:grid-cols-3 gap-6 p-4 py-8'> 
          <div className='p-8 py-12 flex flex-col gap-2 bg-black '>
            <p className='text-gray-300'>OUR SERVICES </p>
            <h2 className='text-4xl text-white font-bold'>What <br/> CAN WE <br/>  DO?</h2>
            {/* BG PHOTO */}
          </div>

          <div className="p-6 flex flex-col justify-between bg-white shadow-md">
            <i className="fa-solid fa-laptop-code text-8xl text-center"></i>
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-gray-600">WEBSITE DEVELOPMENT</p>
              <p>Custom-built websites for businesses of all sizes.</p>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between bg-white shadow-md">
            <i className="fa-solid fa-paint-brush text-8xl text-center"></i>
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-gray-600">UI/UX DESIGN</p>
              <p>Crafting stunning, user-friendly interfaces.</p>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between bg-white shadow-md">
            <i className="fa-solid fa-chart-line text-8xl text-center"></i>
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-gray-600">SEO OPTIMIZATION</p>
              <p>Boost your online presence and search rankings.</p>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between bg-white shadow-md">
            <i className="fa-solid fa-headset text-8xl text-center"></i>
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-gray-600">ONGOING SUPPORT</p>
              <p>We maintain and update your website, so you don't have to.</p>
            </div>
          </div>

          <div className='p-6  flex flex-col justify-between bg-white shadow-md'>
            <div className='flex flex-col gap-2'>
              <p>More</p>
            </div>
          </div>
          
         
        </section>
    </div>
  )
}
