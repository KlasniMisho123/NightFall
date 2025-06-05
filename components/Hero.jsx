'use client'
import React, { useState } from 'react'
import { Inter, Poppins, Space_Mono, Urbanist } from 'next/font/google';
import StatCard from '@/components/StatCard';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import WorkStages from './WorkStages';
import OurAdvantages from './OurAdvantages';
import HeroAnimation from './HeroAnimation';
import BorderedTitle from './BorderedTitle';
import { useAuth } from '@/context/AuthContext';


const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export default function Hero() {
    const {handleSelectedNavSection} =  useAuth();

  return (
    <div className='py-4 px-4 md:px-14 lg:px-28 transition-all transition-duration-300 bg-nightfall overflow-hidden'>
      <div className='flex flex-col md:flex-row gap-2 justify-between my-6 z-10 '>
        <div className='min-w-none md:min-w-[50%] '> 
          {/* HERO ANIMATION Moon / Sun  DayChangeAnimation ? */}
          <div className='load-hero flex flex-col '>
            <div className=''>
              <BorderedTitle text="Your partner in digital transformation" color="blue-500" posAngle={true} /> 
            </div>
            <h1 className={`text-white my-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mt-2 whitespace-nowrap ` + urbanist.className}>
              Digitize Your Idea
            </h1>

            <p className={"text-gray-300 text-base md:text-sm max-w-md  mt-3 leading-relaxed lg:max-w-2xl md:text-base " + inter.className}>
            Nightfall Webworks helps you build modern, responsive websites that elevate your brand and grow your digital presence.
            From concept to launch — we code your vision into reality.
            </p>


            <div className="flex mt-6 md:my-6 gap-[15%] sm:gap-[10%] ">
              <Link className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white bg-blue-500 border-blue-500 hover:border-white hover:brightness-90 text-center
              transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap"
              href={'/support'}
              onClick={() => {handleSelectedNavSection('support')}}
            >
              
                Contact Us
              </Link>
              <Link className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white border-blue-500 hover:text-blue-500 transition-all duration-300 text-center
              cursor-pointer shadow-sm whitespace-nowrap"
              href={'/aboutus'}
              onClick={()=>{
                handleSelectedNavSection("aboutus")
                }
              }>
                About Us
              </Link>
            </div>
          </div>
          {/* RESPONSIVE */}
          <section className='flex flex-col gap-4 bg-white mt-12 md:mt-18 lg:mt-24 mb-4 rounded-lg overflow-x-auto whitespace-nowrap py-6 px-2 md:px-4 lg:px-8 hero-stats-load '>
            <div className={"self-center text-2xl font-bold text-blue-500 tracking-wide " + urbanist.className }>
              NightFall In Numbers
              {/* Style/ dismount */}
            </div>
            <div className={'flex justify-between '} >
                <StatCard stat="1+" title="Years of Experience" titleDec="Working With You" cardColor="blue" delay={0} />
                <StatCard stat="10+" title="Completed Projects" titleDec="From Start to Finish" cardColor="purple" delay={0.5} />

                <StatCard stat={100} title={`Mood Commits`} titleDec={`Connecting with Your Emotions`} cardColor={`red`} delay={1}/>
                <StatCard stat={450} title={`Reaction`} titleDec={`Connecting with Your Emotions`} cardColor={`green`} delay={1.5}/>
            </div> 
         </section>
        </div>
        {/* Consider other Variatons for This Animation// (moon/sun ..env) */}
        <HeroAnimation />
      </div>
        <OurAdvantages />
        {/* RESPONSIVE */}
        <section className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6 lg:p-2 lg:py-8 my-12 text-white '> 
        <div className="flex flex-col justify-center gap-2 p-4 py-18 services-card bg-blue-800/50 max-w-[400px] min-h-[370px] ">
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
              imgSrc={`/websitesWallpaper.jpg`}
              cardParagraph={`Bespoke designs built for your brand.`}
          />

          <ServiceCard
              desc={`Deliver seamless, user-first experiences with thoughtfully crafted interfaces. 
                  We design intuitive, visually stunning layouts that keep users engaged and coming back.`}
              title={`UI/UX Design`}
              imgSrc={`/UI-UXWallpaper.jpg`}
              cardParagraph={`Beautiful, intuitive interfaces users love.`}
          />

          <ServiceCard
              desc={`Effortless hosting and reliable deployment solutions to keep your websites fast, secure, and always online. 
                Say goodbye to downtime and technical headaches — we handle it all so you can focus on what matters most`}
              title={`Hosting & Deployment`}
              imgSrc={`/Deployment.jpg`}
              cardParagraph={`Lightning-fast hosting, zero stress.`}
          />
          <ServiceCard
              desc={`Keep your site running smoothly with proactive updates, security monitoring, and performance optimization.
                 Our ongoing support ensures your website stays fresh, functional, and problem-free.`}
              title={`Ongoing Support`}
              imgSrc={`/Maintenance.jpg`}
              cardParagraph={`Ongoing Website Maintenance & Support`}
          />

          <Link className="flex justify-center items-center text-black gap-8 p-4 rounded group cursor-pointer bg-white
          transition-all transition-duration-300 transition-ease-in-out ring-4 ring-blue-900 hover:scale-105 aboutus-card max-w-[400px] min-h-[370px]"
          href="/aboutus"
           onClick={()=>{
              handleSelectedNavSection("aboutus")
              }
            }
          >
          <div>
              <i className="fa-solid fa-angle-right text-9xl text-gray-300 transition-all transition-duration-300 group-hover:text-blue-900"></i>
              <h3 className="text-lg text-gray-600 text-center lg:text-start ">More on us</h3>
          </div>
          </Link>
        </section>
          <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
          <div className="bg-white mx-2  my-6 py-6 text-black rounded md:py-8 lg:py-10 md:mx-4 lg:mx-8 md:my-12">
              <div className="flex justify-center items-center overflow-hidden">
                <div className="flex flex-row  justify-center items-center px-2 gap-2 sm:gap-4 sm:px-4 md:gap-10 lg:gap-20  ">
                  <div className='flex justify-center items-center p-8 border-2 border-gray-100 rounded w-20 h-20 cursor-pointer 
                  transition-all transition-duration-600 shadow-md  hover:shadow-none bg-blue-500 hover:bg-transparent group  hover:border-blue-500 '>
                    <i className="fa-brands fa-rocketchat text-4xl text-gray-100 group-hover:text-blue-500 "></i>
                  </div>
                  <div className="space-y-0 sm:space-y-4">
                    <h1 className={" font-bold text-gray-800 text-lg sm:text-xl lg:text-2xl " + urbanist.className}>
                      Need a Customer Service?
                    </h1>
                    <p className="text-gray-600 overflow-hidden text-ellipsis hidden sm:inline sm:appear sm:text-sm md:text-base">
                      Our team is ready to assist you with any issues or questions you may have.
                    </p>
                  </div>

                <div className="flex my-6 gap-[20%] sm:gap-[10%]  ">
                  <Link className="flex-1 max-w-40 border-2 p-3 rounded-lg text-white bg-blue-500 border-blue-500 hover:border-white hover:brightness-90 text-center
                  transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap"
                  href={'/support'}
                  onClick={() => {handleSelectedNavSection('support')}}
                  >
                    Contact Us
                  </Link>
                </div>

                </div>
              </div>
            </div>
          </section>
        <WorkStages />
    </div>
  )
}
