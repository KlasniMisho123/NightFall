'use client'
import React, { useState } from 'react'
import Loading from './Loading'
import { Poppins, Space_Mono, Urbanist } from 'next/font/google';
import StatCard from './statCard';
import Link from 'next/link';
import ServiceCard from './ServiceCard';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function Hero() {

  return (
    <div className='py-4 px-4 md:px-14 lg:px-28 transition-all transition-duration-300 bg-nightfall'>
      <div className='flex gap-2 justify-between my-6 load-hero z-10'>
        {/* HERO Div ^ */}
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
              
              {/* RESPONSIVE */}
              
              <StatCard stat={300 + "+"} title={`USERS`} titleDec={`To Monitor Mood`} cardColor={`blue-500`}/>
              <StatCard stat={200} title={`Total Users`} titleDec={`For a Healthier Lifed`} cardColor={`purple-500`}/>
              <StatCard stat={100} title={`Mood Commits`} titleDec={`Connecting with Your Emotions`} cardColor={`red-500`}/>
              <StatCard stat={450} title={`Reaction`} titleDec={`Connecting with Your Emotions`} cardColor={`green-500`}/>
          </section>  
        </div>
        <div className='min-w-none sm:min-w-[20%] md:min-w-[25%] border-2 border-gray-800 text-white'>
           Hero
           {/* <img src='https://i.pinimg.com/originals/df/88/b0/df88b01e4797b1efb65c74be984dc7f4.gif' /> */}
        </div>

      </div>
        <span className='text-white'> NightFall/Services -Animation </span>
        {/* <div> ANIMATION</div> */}
        {/* LAZY LOAD ANIMATION */}
        {/* RESPONSIVE */}
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
          <ServiceCard
              desc={`Stand out with a custom-built website tailored to your brand's identity and goals.
              From design to deployment, we craft unique digital experiences that leave a lasting impression.`}
              title={`Custom Websites`}
              imgSrc={`websitesWallpaper.jpg`}
              cardParagraph={`Bespoke designs built for your brand.`}
          />

          <ServiceCard
              desc={`Deliver seamless, user-first experiences with thoughtfully crafted interfaces. 
                  We design intuitive, visually stunning layouts that keep users engaged and coming back.`}
              title={`UI/UX Design`}
              imgSrc={`UI-UXWallpaper.jpg`}
              cardParagraph={`Beautiful, intuitive interfaces users love.`}
          />

          <ServiceCard
              desc={`Effortless hosting and reliable deployment solutions to keep your websites fast, secure, and always online. 
                Say goodbye to downtime and technical headaches — we handle it all so you can focus on what matters most`}
              title={`Hosting & Deployment`}
              imgSrc={`Deployment.jpg`}
              cardParagraph={`Lightning-fast hosting, zero stress.`}
          />
          <ServiceCard
              desc={`Keep your site running smoothly with proactive updates, security monitoring, and performance optimization.
                 Our ongoing support ensures your website stays fresh, functional, and problem-free.`}
              title={`Ongoing Support`}
              imgSrc={`Maintenance.jpg`}
              cardParagraph={`Website Maintenance`}
          />

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
