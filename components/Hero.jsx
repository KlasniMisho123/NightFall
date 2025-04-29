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
              <div className='flex flex-col gap-4 items-center px-1 py-4 min-w-[100px] totalStatsOne md:px-2 lg:px-4 '>
                <div className='border-1 border-blue-500  bg-blue-500 px-4 py-1 rounded-lg '> </div>   
                <h2 className={'text-4xl text-blue-500 italic ' + mono.className}> 300+ </h2>
                <h3 className={'text-sm text-blue-500 ' + poppins.className} > USERS </h3>
                <h4 className={'text-xs '}> To Monitor Mood </h4>
              </div>

              <div className='flex flex-col gap-4 items-center px-1  py-4 min-w-[100px] totalStatsOne md:px-2 lg:px-4 '>
                <div className='border-1 border-purple-500  bg-purple-500 px-4 py-1 rounded-lg '> </div>
                <h2 className={'text-4xl text-purple-500 italic ' + mono.className}> 200 </h2>
                <h3 className={'text-sm text-purple-500 ' + poppins.className}> Total Users </h3>
                <h4 className={'text-xs '}> For a Healthier Life </h4>
              </div>

              <div className='flex flex-col gap-4 items-center px-1 py-4 min-w-[100px] totalStatsOne md:px-2 lg:px-4 '>
                <div className='border-1 border-red-500  bg-red-500 px-4 py-1 rounded-lg '> </div>
                <h2 className={'text-4xl text-red-500 italic ' + mono.className}> 100 </h2>
                <h3 className={'text-sm text-red-500 ' + poppins.className}>  Mood Commits  </h3>
                <h4 className={'text-xs '}> Connecting with Your Emotions </h4>
              </div>

              <div className='flex flex-col gap-4 items-center px-1 py-4 min-w-[100px] totalStatsOne md:px-2 lg:px-4 '>
                <div className='border-1 border-green-500  bg-emerald-500 px-4 py-1 rounded-lg '> </div>
                <h2 className={'text-4xl text-green-500 italic ' + mono.className}> 450 </h2>
                <h3 className={'text-sm text-green-500 ' + poppins.className}>  Reaction  </h3>
                <h4 className={'text-xs '}> Connecting with Your Emotions </h4>
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
        <section className='grid grid-cols-2 md:grid-cols-3 gap-6 p-2 py-8 my-12 text-white '> 
        <div className="flex flex-col justify-center gap-2 p-4 py-18 services-card bg-blue-800/50 ">
        {/* https://i.pinimg.com/736x/1c/44/f8/1c44f8914b9f20e13b6168a2c2be3586.jpg */}
            <h3 className="text-lg text-gray-200 text-center lg:text-start ">Our Services</h3>
            <div className="flex flex-col items-center text-4xl font-bold lg:items-start">
                <div>What</div>
                <div>Can We</div>
                <div>Do?</div>
            </div>
        </div>
          <div className="flex flex-col bg-white text-black gap-8 p-4 rounded cursor-pointer
            transition-all transition-duration-300 transition-ease-in-out hover:scale-105 flip-card">
              <p className='rotate-y-180'>Desc</p>
            <div className="flex justify-center">
                <img src="websitesWallpaper.jpg" className="h-[200px] w-full " alt="" />
            </div>
            <div className="flex flex-col items-center font-bold lg:items-start ">
                <h3 className="text-lg text-gray-600 text-center lg:text-start text-2xl lg:text-2xl ">Custom Websites</h3>
                <div className="flex justify-between  my-4 w-full services-item-card-three">
                    <h3 className="text-xl">Bespoke designs built for your brand.</h3>
                </div>
            </div>
            {/* HOVER ANIMATION, Card flip */}
          </div>

          <div className="flex flex-col bg-white text-black gap-8 p-4 rounded cursor-pointer
            transition-all transition-duration-300 transition-ease-in-out hover:scale-105 flip-card ">
                <p className='rotate-y-180'>Desc</p>

            <div className="flex justify-center">
                <img src="UI-UXWallpaper.jpg" className="h-[200px] w-full object-cover " alt="" />
            </div>
            <div className="flex flex-col items-center font-bold lg:items-start">
                <h3 className="text-lg text-gray-600 text-center lg:text-start text-2xl lg:text-2xl ">UI/UX Design</h3>
                <div className="flex justify-between  my-4 w-full services-item-card-three">
                    <h3 className="text-xl">Beautiful, intuitive interfaces users love.</h3>
                </div>
            </div>
          </div>

          <div className="flex flex-col bg-white text-black gap-8 p-4 rounded cursor-pointer
            transition-all transition-duration-300 transition-ease-in-out hover:scale-105 flip-card">
              <p className='rotate-y-180'>Service Desc/Details</p>
            <div className="flex justify-center">
                <img src="Deployment.jpg" className="h-[200px] w-full object-cover " alt="" />
            </div>
            <div className="flex flex-col items-center font-bold lg:items-start">
                <h3 className="text-lg text-gray-600 text-center lg:text-start text-2xl lg:text-2xl ">Hosting & Deployment</h3>
                <div className="flex justify-between  my-4 w-full services-item-card-three">
                    <h3 className="text-xl">Lightning-fast hosting, zero stress.</h3>
                </div>
            </div>
          </div>

          <div className="flex flex-col bg-white text-black gap-8 p-4 rounded cursor-pointer
            transition-all transition-duration-300 transition-ease-in-out hover:scale-105 flip-card">
            <div className="flex justify-center">
                <img src="Maintenance.jpg" className="h-[200px] w-full object-cover " alt="" />
            </div>
            <div className="flex flex-col items-center font-bold lg:items-start">
                <h3 className="text-lg text-gray-600 text-center lg:text-start text-2xl lg:text-2xl ">Ongoing Support</h3>
                <div className="flex justify-between  my-4 w-full services-item-card-three">
                    <h3 className="text-xl">Website Maintenance</h3>
                </div>
            </div>
          </div>

          <Link className="flex justify-center items-center text-black gap-8 p-4 rounded group cursor-pointer bg-white
          transition-all transition-duration-300 transition-ease-in-out ring-4 ring-blue-900 hover:scale-105 aboutus-card"
          href="/aboutus"
          >
          <div>
              <i className="fa-solid fa-angle-right text-9xl text-gray-300 transition-all transition-duration-300 group-hover:text-blue-900"></i>
              <h3 className="text-lg text-gray-600 text-center lg:text-start ">More on us</h3>
          </div>
          </Link>
          {/* hover arrow animation */}
         
        </section>
    </div>
  )
}
