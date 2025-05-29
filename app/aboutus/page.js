'use client'
import BorderedTitle from '@/components/BorderedTitle';
import MessageBox from '@/components/MessageBox';
import TeamMemberCard from '@/components/TeamMemberCard';
import { Exo_2, Inter, Poppins, Urbanist } from 'next/font/google';
import React, { useState } from 'react'


const exo2 = Exo_2({subsets: ["latin"],weight: ["300", "700"]});
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function Aboutus() {
const [selectedTeamMember, setSelectedTeamMember] = useState('')


function selectTeamMember(teamMember) {
  if(teamMember == selectedTeamMember ) {
    setSelectedTeamMember("")
  } else {
    setSelectedTeamMember(teamMember)
  }
}

  return (
    <section className=' min-h-[100vh] bg-nightfall bg-white text-white'>
      {/* Different Bg? Style? about us? */}
      <div className='relative py-8 bg-transparent px-[20%]'>
        <img src="aboutus-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"/>
      {/* <BorderedTitle text="About Us" color="blue-500" posAngle={false} /> */}
        <div className='relative inset-0 z-10  flex flex-col mx-16 min-h-[250px] text-white items-center justify-center gap-4'>
          <h2 className={'text-5xl font-light ' + exo2.className} > About Us </h2>
          <p className='text-gray-400 text-center max-w-[500px] ' > 🌒 We’re more than a design agency — we’re your digital partner. From UX strategy to clean code, Nightfall helps brands transform ideas into powerful online experiences. </p>
        </div>
      </div>
      <section className='flex flex-col gap-12 py-8 mx-[20%] '> 
        <div className='flex justify-center gap-6'>
          <div className='flex flex-col gap-2'>
             <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Little About</p>
             <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className}>Our Story</h2>
             <p className={'text-gray-400 font-light mt-4' + inter.className}> 
              At Nightfall Web, our journey began with a single goal: to turn creative ideas into powerful digital experiences. As a passionate web solutions startup,
              we’re not just building websites — we’re building our future. Founded by a team eager to grow and gain hands-on experience, Nightfall Web is driven by curiosity, 
              innovation, and a deep desire to help businesses shine online. Whether it’s custom websites, UI/UX design, or hosting and maintenance, we approach each project
              as an opportunity to learn, collaborate, and make an impact. We may be at the start of our journey, but our dedication is unwavering. Every line of code, every pixel, 
              and every solution is crafted with care, backed by our commitment to quality and a hunger to grow. Let’s build something great — together.
              </p>
          </div>
          <div>
            <img src='https://i.pinimg.com/736x/ed/c6/2f/edc62fccbbbdee334e00dda45966d963.jpg' alt='Our Story photo' className='object-cover min-w-[400px] max-h-[400px] ' />
          </div>
        </div>
        {/* <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Meet </p>
        <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className}>Our Team</h2> */}
        <div className="flex justify-evenly pt-8 mx-4 gap-4"> 
         <div className="flex flex-row-reverse  justify-center gap-8 pt-8 ">  
            <div className="flex flex-col ">
                <p className="text-white ">A little about </p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold  ">Our <span className='text-blue-500'> Goals </span> <i className="fa-solid fa-bullseye text-white animate-bounce"></i></h2>
              
                <p className="mt-12 text-gray-400 leading-relaxed max-w-[500px] text-sm  md:text-base">
                  Our goal is to empower startups and small teams with smart, beautifully designed web solutions — from custom websites to ongoing support. 
                  As we help others grow their digital presence, we’re also growing ourselves — gaining real-world experience, refining our craft,
                   and building meaningful partnerships along the way.
                </p>
              {/* top-bg isnot even? */}
                <ul className="list-inside mt-6 space-y-2 text-base md:text-base text-white ">
                  <li className="goal-list flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-brain text-xl text-pink-400 group-hover:text-white group-hover:bg-pink-400 p-[7px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className="truncate">Gain real-world experience through client work.</span>
                  </li>
                   <li className="goal-list flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-palette text-xl text-teal-500 group-hover:text-white group-hover:bg-teal-500 p-[7px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className="truncate">Create thoughtful, user-centered design that solves real problems.</span>
                  </li>
                   <li className="goal-list flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-handshake-simple text-xl text-yellow-500 group-hover:text-white group-hover:bg-yellow-500 p-[6px] py-[8px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className="truncate">Build lasting client relationships based on trust and care.</span>
                  </li>
                   <li className="goal-list flex gap-3 items-center p-2 border-2 border-transparent rounded-lg bg-gray-800 group shadow-sm hover:shadow-xl hover:bg-gray-600 transition-all">
                    <i className="fa-solid fa-rocket text-xl text-red-500 group-hover:text-white group-hover:bg-red-500 p-[7px] pr-[8px] pt-[8px] rounded-full transition-colors duration-300 flex items-center justify-center"></i>
                    <span className="truncate">Help startups grow with budget-friendly tools.</span>
                  </li>
                </ul>
            </div>
            <img src="https://i.pinimg.com/736x/b3/b3/eb/b3b3eb81e2cca6f50c42a63cdea1afeb.jpg" className="w-[40%] object-cover" alt="team-photo" />
          </div>
        </div>


        <div className='flex flex-col gap-2 pt-8 '>
          <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Meet </p>
          <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className}>Our Team</h2>
          <div className='flex flex-col gap-6 mt-4'>
            <p className={'flex gap-2 text-base md:text-lg truncate' + urbanist.className}> <i className="fa-solid fa-seedling text-green-500 text-xl "></i> We design with intention, develop with care, and grow alongside the people we support. </p>
            <p className="text-gray-400 leading-relaxed max-w-[700px] text-sm md:text-base ">
              We're a small but passionate group of creatives and builders focused on delivering thoughtful web solutions. Every project is a chance to refine our craft, learn something new, and support others in growing their ideas. We're not just here to deliver — we're here to grow with you.
            </p>
            <p className='text-sm text-gray-300 mt-4'>Select team member for more info</p>
            {/* Onclick Animation -> display */}
            <div className='flex '>
               <div title='🚀 Misho — Full-Stack Developer'
                className={`flex justify-center items-center h-35 w-35 rounded-full border-4 z-1 relative cursor-pointer
                hover:z-100 hover:scale-105 transition-all transition-duration-300 ` + (selectedTeamMember == "misho" ? " border-blue-500" : "border-white")} 
                onClick={() => {
                  selectTeamMember("misho")
                }}
                >
                <img src='avatars/Multiavatar-smalik.png'  alt='misho_avatar'/>
               </div>
               <div title='⚡ Alika — Back-End Developer'
                className={`flex justify-center items-center h-35 w-35 rounded-full border-4 z-2 relative ml-[-15px] cursor-pointer
                hover:z-100 hover:scale-105 transition-duration-300 ` + (selectedTeamMember == "alika" ? " border-blue-500" : "border-white")}
                onClick={() => {
                  selectTeamMember("alika")
                }}
                >
                <img src='avatars/Multiavatar-Alik.png'  alt='alik_avatar'/>
               </div>
               <div title='DummyTeamMember '
                className={`flex justify-center items-center h-35 w-35  rounded-full border-4 z-3 relative ml-[-15px] cursor-pointer
                hover:z-100 hover:scale-105 transition-duration-300 ` + (selectedTeamMember == "dummy" ? " border-blue-500" : "border-white")}
                onClick={() => {
                  selectTeamMember("dummy")
                }}
                >
                <img src='avatars/Multiavatar-an.png'  alt='Dummy_avatar'/>
               </div>
               <div className="flex justify-center items-center h-35 w-35 bg-white rounded-full border-4 border-gray-700 relative z-30 ml-[-15px] select-none">
                <span className="dot-bounce dot1 text-5xl text-black">.</span>
                <span className="dot-bounce dot2 text-5xl text-black">.</span>
                <span className="dot-bounce dot3 text-5xl text-black">.</span>
              </div>
            </div>
              {/* Slidedown Like Animation */}
                {selectedTeamMember ?
                 <TeamMemberCard selectedTeamMember={selectedTeamMember} selectTeamMember={selectTeamMember()} />
                  : null
                }
          </div>
        </div>

        {/* Strong Sides */}
        {/* Our Vision */}
      </section>

        <div className='flex flex-col min-w-[600px] max-w-[700px] justify-self-center py-12 gap-4'> 
            {/* ONCLICK SHOW MORE... ANIMATIONS */}
          <MessageBox response={true} text="Hey! Who are you guys?" />
          <MessageBox text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
          <MessageBox response={true} text="Like what kind of solutions?" />
          <MessageBox text="Custom websites, UI/UX design, hosting, deployment - you name it." />
          <MessageBox response={true} text="Do you stick around after launch?" />
          <MessageBox text="Yes - and we also offer ongoing support packages to keep everything running smoothly." />
        </div>

    </section>
  )
}
