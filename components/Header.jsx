'use client'
import React, { useEffect, useState } from 'react'
import { Exo_2 } from 'next/font/google';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function Header() {
  const [shouldRenderNav, setShouldRenderNav] = useState(false)

  const {handleSelectedNavSection, setIsSideNavBarActive, setSelectedNavSection, isSideNavBarActive, selectedNavSection} = useAuth();

  function toggleSideNavBar() {
    setIsSideNavBarActive(!isSideNavBarActive)
  }

  useEffect(()=>{
    const path = window.location.pathname;
    const filteredPath = path.replace(/\//g, "")
    filteredPath? setSelectedNavSection(filteredPath) : setSelectedNavSection("home")
  },[])
  
  // if sidebar is not rendered, it will dismount from dom, but also allows to get open/close animation
  useEffect(()=> {
    if (isSideNavBarActive) {
      setShouldRenderNav(true); 
    } else {
      const timeout = setTimeout(() => setShouldRenderNav(false), 500) 
      return () => clearTimeout(timeout)
    }
  },[isSideNavBarActive])

  return (
    <div className='relative flex items-center justify-between bg-[#1F293] px-4 pt-2 pb-3 z-50 border-b-1 border-gray-600 '>
      {/* bg-[#1F293] // bg-gray-600 */}
      <Link  className='flex gap-2 items-center font-bold text-blue-400  moonLogoAnimation cursor-pointer'
      href='/'
      onClick={() => {
        handleSelectedNavSection('home')
      }}
      >
        <img  src='./moonlogo.png' alt='NightFall Home' className='max-h-12 max-w-12 shadow-lg shadow-sky-500/50 rounded-full moonImg'/>
        <span className={' ' + exo2.className}> NightFall </span>
      </Link>
      <nav className={'flex whitespace-nowrap gap-2 w-0 invisible md:gap-4 lg:gap-4 lg:ml-[-10%] sm:visible sm:w-auto ' + exo2.className}>
        <Link className={`flex gap-1 items-center px-1  py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium ` + (selectedNavSection === "home"? " navactive" : "")}
        href='/'
        onClick={() => {handleSelectedNavSection('home')}}
        >
        <i className="fa-solid fa-house"></i>
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </Link>

        <Link className={`flex gap-1 items-center px-1  py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium ` + (selectedNavSection === "projects"? " navactive" : "")}
        href='/projects'
        onClick={() => {handleSelectedNavSection('projects')}}
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </Link>

        <Link className={`flex gap-1 items-center px-1  py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium ` + (selectedNavSection === "aboutus"? " navactive" : "")}
        href='/aboutus'
        onClick={() => {handleSelectedNavSection('aboutus')}}
        >
          About us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </Link>

        <Link className={`flex gap-1 items-center px-1  py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium rocket-flies ` + (selectedNavSection === "support"? " navactive" : "")}
        href='/support'
        onClick={() => {handleSelectedNavSection('support')}}
        >
          Contact us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          <i className="fa-solid fa-rocket text-red-400 text-lg mt-1"></i> 
        </Link>
      </nav>
      <div
        className={
          `flex cursor-pointer ` +
          // to test sidenavbar
          (isSideNavBarActive ? "visible" : "sm:invisible")
        }
        onClick={toggleSideNavBar}
      >
        {isSideNavBarActive ? (
          <i className="fa-solid fa-xmark text-lg transition-all duration-300 text-red-500 relative z-5 hover:text-red-400 hover:scale-105 "></i>
        ) : (
          <i className="fa-solid fa-bars text-lg transition-all duration-200 text-gray-300 relative z-5 hover:text-white hover:scale-105"></i>
        )}
      </div>
        
        {/* IT SKIPS OPEN ANIMATION? */}
      {/* {shouldRenderNav && ( */}
          <nav
          className={
            'absolute w-full top-[10vh] left-0 z-50 bg-gray-900 text-white transition-all duration-500 ease-in-out overflow-hidden md:top-[10vh] lg:top-[9vh] ' +
            exo2.className +
            (isSideNavBarActive ? ' max-h-[500px]' : ' max-h-0')
          }
          >
            <div className="flex flex-col p-6 pb-12 gap-6">
              <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
                href='/'
                onClick={() => {handleSelectedNavSection('home')}}>
                <i className="fa-solid fa-moon text-sky-400"></i>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              
              <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
                href='/projects'
                onClick={() => {handleSelectedNavSection('projects')}}>
                <i className="fa-solid fa-star text-yellow-300 group-hover:animate-pulse"></i> 
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              
              <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
                href='/aboutus'
                onClick={() => {handleSelectedNavSection('aboutus')}}>
                <i className="fa-solid fa-user-astronaut text-orange-300"></i>
                About us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              
              <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4 "
                href='/support'
                onClick={() => {handleSelectedNavSection('support')}}>
                <i className="fa-solid fa-rocket text-red-400 text-lg compassAnimation mt-1"></i>
                Contact us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
            </div>
        </nav>
        {/* )} */}
    </div>
  )
  
}
