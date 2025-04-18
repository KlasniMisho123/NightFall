'use client'
import React, { useState } from 'react'
import { Exo_2 } from 'next/font/google';
import Link from 'next/link';

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function Header() {
  const [isSideNavBarActive, setIsSideNavBarActive] = useState(false)


  function toggleSideNavBar() {
    setIsSideNavBarActive(!isSideNavBarActive)
  }

  return (
    <div className='flex items-center justify-between bg-gray-600 px-4 pt-2 pb-3'>
      <Link  className='flex gap-2 items-center font-bold text-blue-400  moonLogoAnimation cursor-pointer'
      href='/'
      >
        <img  src='./moonlogo.png' alt='NightFall Home' className='max-h-12 max-w-12 shadow-lg shadow-sky-500/50 rounded-full moonImg'/>
        <span className={' ' + exo2.className}> NightFall </span>
      </Link>
      <nav className='flex whitespace-nowrap gap-2 w-0 invisible md:gap-4 lg:gap-4 lg:ml-[-10%] sm:visible sm:w-auto'>
        <Link className="flex gap-1 items-center px-1  py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium"
        href='/'
        >
        <i className="fa-solid fa-house"></i>
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </Link>

        <Link className="flex gap-1 items-center px-1  py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium"
        href='/projects'
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </Link>

        <Link className="flex gap-1 items-center px-1  py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium"
        href='/aboutus'
        >
          About us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </Link>

        <Link className="flex gap-1 items-center px-1 py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium"
        href='/support'
        >
          Contact us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          <i className="fa-solid fa-rocket text-red-400  text-lg compassAnimation mt-1"></i> 
          {/* onhover Rocker flies up */}
        </Link>
      </nav>
      <div
        className={
          `flex cursor-pointer ` +
          (isSideNavBarActive ? "visible" : "")
          // (isSideNavBarActive ? "visible" : "sm:invisible")
        }
        onClick={toggleSideNavBar}
      >
        {isSideNavBarActive ? (
          <i className="fa-solid fa-xmark text-lg transition-all duration-300 text-red-500 relative z-5 hover:text-red-400 hover:scale-105 "></i>
        ) : (
          <i className="fa-solid fa-bars text-lg transition-all duration-200 text-gray-300 relative z-5 hover:text-white hover:scale-105"></i>
        )}
      </div>
        {/* <nav
          className={
            'flex flex-col absolute bg-gray-900 w-full top-[9vh] left-0 z-50 text-white p-6 pb-12 gap-6 ' +
            'transition-all duration-500 ease-in-out overflow-hidden ' +
            (isSideNavBarActive ? 'max-h-[500px]' : 'max-h-0')
          }
        > */}
        <nav className={'flex flex-col absolute bg-gray-900 w-full top-[9vh] left-0 z-50 text-white p-6 pb-12 gap-6 transition-all transition-duration-500 ease-in-out' + (isSideNavBarActive ? "max-h-auto opacity-100" : "max-h-0 opacity-0")}> 
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-moon text-sky-400"></i>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
          
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/projects'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-star text-yellow-300 group-hover:animate-pulse"></i> 
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
          
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/aboutus'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-user-astronaut text-orange-300"></i>
            About us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
          
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/support'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-rocket text-red-400 text-lg compassAnimation mt-1"></i>
            Contact us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
        </nav>

        {isSideNavBarActive?
        (
          <nav className='flex flex-col absolute w-full bg-gray-900 top-[9vh] left-0 z-50 text-white p-6 pb-12 gap-6 '  > 
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-moon text-sky-400"></i>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
          
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/projects'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-star text-yellow-300 group-hover:animate-pulse"></i> 
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
          
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/aboutus'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-user-astronaut text-orange-300"></i>
            About us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
          
          <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
            href='/support'
            onClick={() => {setIsSideNavBarActive(false)}}>
            <i className="fa-solid fa-rocket text-red-400 text-lg compassAnimation mt-1"></i>
            Contact us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
          </Link>
        </nav>
        ):("")
       }
    </div>
  )
}
