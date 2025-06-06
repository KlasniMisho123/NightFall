'use client'
import TeamMemberCard from '@/components/TeamMemberCard';
import { Exo_2, Inter, Poppins, Urbanist } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import { teamMemberMap } from '@/utils';
import OurVision from '@/components/OurVision';
import ChatComponent from '@/components/ChatComponent';
import Image from 'next/image';
import Reveal from '@/components/utils/Reveal';


const exo2 = Exo_2({subsets: ["latin"],weight: ["300", "700"]});
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function Aboutus() {
const [selectedTeamMember, setSelectedTeamMember] = useState('')
const [selectedMemberInfo, setSelectedMemberInfo] = useState('')
const [isMemberCardActive, setIsMemberCardActive] = useState(false)

function selectTeamMember(teamMember) {
  if(teamMember == selectedTeamMember ) {
    setSelectedTeamMember("")
  } else {
    setSelectedTeamMember(teamMember)
    setSelectedMemberInfo(teamMemberMap[teamMember])
  }
}

useEffect(()=>{
 if(selectedTeamMember == '' ) {
  setTimeout(()=>{
    setIsMemberCardActive(false)
    setSelectedMemberInfo("")
  }, 250)
 } else {
  setIsMemberCardActive(true)
 }
},[selectedTeamMember])

  return (
    <section className=' bg-nightfall bg-white text-white'>
      <div className='relative py-8 bg-transparent '>
        <Image src="/aboutus-bg.jpg"
        alt="Background"
        width={800} 
        height={600} 
        className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className='relative inset-0 z-10 flex flex-col mx-4 md:mx-16 min-h-[250px] text-white items-center justify-center gap-4'>
          <h2 className={'text-3xl sm:text-4xl md:text-5xl font-light truncate ' + exo2.className} > About Us </h2>
          <p className='text-gray-400 text-center text-sm sm:text-base max-w-[500px] max-h-[200px] line-clamp-5 md:line-clamp-none' >
             🌒 We’re more than a design agency — we’re your digital partner. From UX strategy to clean code,
              Nightfall helps brands transform ideas into powerful online experiences.
          </p>
        </div>
      </div>
      <section className='flex flex-col gap-12 py-8  mx-[5%] sm:mx-[10%] md:mx-[10%] lg:mx-[18%]'> 
        <div className='flex flex-col md:flex-row justify-center gap-6 hero-stats-load '>
          <div className='flex flex-col gap-2'>
             <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 truncate ' + urbanist.className} >Little About</p>
             <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 truncate ' + urbanist.className}>Our Story</h2>
             <p className={'text-gray-400 text-sm md:text-base font-light mt-8 md:mt-4 line-clamp-14 ' + inter.className}> 
              At Nightfall Web, our journey began with a single goal: to turn creative ideas into powerful digital experiences. As a passionate web solutions startup,
              we’re not just building websites — we’re building our future. Founded by a team eager to grow and gain hands-on experience, Nightfall Web is driven by curiosity, 
              innovation, and a deep desire to help businesses shine online. Whether it’s custom websites, UI/UX design, or hosting and maintenance, we approach each project
              as an opportunity to learn, collaborate, and make an impact. We may be at the start of our journey, but our dedication is unwavering. Every line of code, every pixel, 
              and every solution is crafted with care, backed by our commitment to quality and a hunger to grow. Let’s build something great — together.
              </p>
          </div>
          <div className='relative'>
            <Image
             src='/our-story-pic.jpg'
             alt='Our Story photo'
             className='object-cover min-w-[250px] max-h-[500px] md:min-w-[350px] md:max-h-[450px] '
             width={800} 
             height={600} 
             />
          </div>
        </div>
        <Reveal > 
        <div className="flex justify-evenly pt-8 gap-4 "> 
         <div className="flex flex-col md:flex-row-reverse justify-center gap-8 md:gap-4 lg:gap-8 pt-8 ">  
            <div className="flex-1 flex flex-col shrink">
                <p className="text-white text-lg ">A little about </p>
                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold  ">Our <span className='text-blue-500'> Goals </span> <i className="fa-solid fa-bullseye text-white animate-bounce"></i></h2>
                <p className="mt-12 text-gray-400 leading-relaxed max-w-[250px] md:max-w-[500px] text-sm sm:text-base md:text-sm lg:text-base">
                  Our goal is to empower startups and small teams with smart, beautifully designed web solutions — from custom websites to ongoing support. 
                  As we help others grow their digital presence, we’re also growing ourselves — gaining real-world experience, refining our craft,
                   and building meaningful partnerships along the way.
                </p>

                <div className="flex flex-col mt-6 space-y-2 text-white text-xs sm:text-sm md:text-base w-fit sm:w-full max-w-[250px]  md:w-[90%] lg:w-full">
                  <li className="flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-brain text-xl text-pink-400 group-hover:text-white group-hover:bg-pink-400 p-[7px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className=" line-clamp-2 flex-1 text-sm md:text-sm lg:text-base">
                      Gain real-world experience through client work.
                    </span>
                  </li>

                  <li className="flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-palette text-xl text-teal-500 group-hover:text-white group-hover:bg-teal-500 p-[7px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className=" line-clamp-2 flex-1 text-sm md:text-sm lg:text-base">
                      Create thoughtful design that solves real problems.
                    </span>
                  </li>

                  <li className="flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-handshake-simple text-xl text-yellow-500 group-hover:text-white group-hover:bg-yellow-500 p-[6px] py-[8px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className=" line-clamp-2 flex-1 text-sm md:text-sm lg:text-base">
                      Build lasting client relationships based on trust and care.
                    </span>
                  </li>

                  <li className="flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-rocket text-xl text-red-500 group-hover:text-white group-hover:bg-red-500 p-[7px] pr-[8px] pt-[8px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className=" line-clamp-2 flex-1 text-sm md:text-sm lg:text-base">
                      Help startups grow with budget-friendly tools.
                    </span>
                  </li>
                </div>

            </div>
            <Image
              src="/our-goals-pic.jpg" 
              className="max-w-[250px] md:max-w-[50%] object-cover h-auto" 
              width={800}
              height={600}
              alt="team-photo"
            />
          </div>
        </div>
        </Reveal>
        
        <Reveal animationIndex={1}> 
          <div className='flex flex-col gap-2 pt-8 '>
            <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Meet </p>
            <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 truncate ' + urbanist.className}>Our Team</h2>
            <div className='flex flex-col gap-6 mt-4'>
              <p className={'flex gap-2 text-base md:text-lg truncate' + urbanist.className}> <i className="fa-solid fa-seedling text-green-500 text-xl "></i> We design with intention, develop with care, and grow alongside the people we support. </p>
              <p className="text-gray-400 leading-relaxed max-w-[700px] text-sm md:text-base ">
                We&apos;re a small but passionate group of creatives and builders focused on delivering thoughtful web solutions. Every project is a chance to refine our craft, learn something new, and support others in growing their ideas. We&apos;re not just here to deliver — we&apos;re here to grow with you.
              </p>
              <p className='text-sm text-gray-300 mt-4'>Select team member for more info </p>
              {/* Onclick Animation -> display */}
              <div className='flex '>
                <div title='🚀 Misho — Full-Stack Developer'
                  className={`flex justify-center items-center h-20 w-20 sm:w-25 sm:h-25 md:h-30 md:w-30 lg:h-35 lg:w-35 rounded-full border-4 z-1 relative cursor-pointer
                  hover:z-100 hover:scale-105 transition-all duration-200 ` + (selectedTeamMember == "misho" ? " border-blue-500" : "border-white")} 
                  onClick={() => {
                    selectTeamMember("Misho")
                  }}
                  >
                  <Image
                  src='/avatars/Multiavatar-smalik.png'
                  width={800} 
                  height={600} 
                  alt='misho_avatar'
                  />

                </div>
                <div title='⚡ Alika — Back-End Developer'
                  className={`flex justify-center items-center h-20 w-20 sm:w-25 sm:h-25 md:h-30 md:w-30 lg:h-35 lg:w-35 rounded-full border-4 z-2 relative ml-[-15px] cursor-pointer
                  hover:z-100 hover:scale-105 duration-200 ` + (selectedTeamMember == "alika" ? " border-blue-500" : "border-white")}
                  onClick={() => {
                    selectTeamMember("Alika")
                  }}
                  >
                  <Image
                  src='/avatars/Multiavatar-Alik.png'
                  width={800} 
                  height={600} 
                  alt='alik_avatar'
                  />
                </div>
                <div title='DummyTeamMember '
                  className={`flex justify-center items-center h-20 w-20 sm:w-25 sm:h-25 md:h-30 md:w-30 lg:h-35 lg:w-35 rounded-full border-4 z-3 relative ml-[-15px] cursor-pointer
                    hover:z-100 hover:scale-105 duration-200 ` + (selectedTeamMember == "dummy" ? " border-blue-500" : "border-white")}
                  onClick={() => {
                    selectTeamMember("Dummy")
                  }}
                  >
                  <Image
                  src='/avatars/Multiavatar-an.png'
                  width={800} 
                  height={600} 
                  alt='Dummy_avatar'
                  />
                </div>
                <div className="flex justify-center items-center h-20 w-20 sm:w-25 sm:h-25 md:h-30 md:w-30 lg:h-35 lg:w-35 bg-white rounded-full border-4 border-gray-700 relative z-30 ml-[-15px] select-none">
                  <span className="dot-bounce dot1 text-5xl text-black">.</span>
                  <span className="dot-bounce dot2 text-5xl text-black">.</span>
                  <span className="dot-bounce dot3 text-5xl text-black">.</span>
                </div>
              </div>
              {/* Close Animation Instead Of instant Dismount --> another usestate that gives timeout/timeinterval for dismount(startswith false), animate shutdown on selectedTeamMember false? */}
                  {isMemberCardActive ?
                  <TeamMemberCard selectedTeamMember={selectedTeamMember} selectTeamMember={selectTeamMember} selectedMemberInfo={selectedMemberInfo} />
                    : null
                  }                 
            </div>
          </div>
          {/* Strong Sides */}
          <OurVision /> 
        </Reveal>
        <Reveal animationIndex={1} noRepeat={false}>
          <div className='flex flex-col gap-2 mt-10 -mb-16 pb-16 '>
            <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Most Asked</p>
            <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className}>Questions</h2>      
          </div>
        </Reveal>
        <ChatComponent />
      </section>
    </section>
  )
}
