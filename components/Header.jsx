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
          <i className="fa-regular fa-compass text-gray-300 text-lg compassAnimation mt-1 "></i>
        </Link>
      </nav>
        <div className='flex visible sm:invisible'
          onClick={toggleSideNavBar}>
          {isSideNavBarActive?
           (<i className={`fa-solid fa-xmark text-lg transition-all transition-duration-300 text-red-500 relative z-2` + (isSideNavBarActive? "" : " invisible")}></i>):
           (<i className={`fa-solid fa-bars text-lg transition-all transition-duration-300 text-gray-300 relative z-2` + (isSideNavBarActive? " invisible" : "")}></i>)
          }
        </div>
        {isSideNavBarActive?
        (
          <nav className='flex flex-col absolute w-full bg-gray-900 top-[10vh] left-0 z-50 text-white p-6 pb-12 gap-6 '> 
            <Link className="flex gap-2 items-center  text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b-2 border-white p-4 "
              href='/'
              onClick={() => {
                setIsSideNavBarActive(false)
              }}
              >
              <i className="fa-solid fa-house text-white "></i>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
           
            <Link className="flex gap-2 items-center  text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b-2 border-white p-4 "
              href='/projects'
              onClick={() => {
                setIsSideNavBarActive(false)
              }}
              >
              <i className="fa-solid fa-diagram-project text-white "></i> 
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
           
            <Link className="flex gap-2 items-center  text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b-2 border-white p-4 "
              href='/aboutus'
              onClick={() => {
                setIsSideNavBarActive(false)
              }}
              >
              <i className="fa-solid fa-address-card text-white"></i>
              About us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
            <Link className="flex gap-2 items-center  text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b-2 border-white p-4 "
              href='/support'
              onClick={() => {
                setIsSideNavBarActive(false)
              }}
              >
              <i className="fa-regular fa-compass text-red-500 text-lg compassAnimation mt-1 "></i>
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          </nav>
        ):
        ("")
       }
    </div>
  )
}
