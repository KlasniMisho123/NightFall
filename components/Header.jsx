import React from 'react'
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-gray-600 px-4 pt-2 pb-3'>
      <div className='flex gap-2 items-center font-bold text-blue-400  moonLogoAnimation'>
        <img  src='./moonlogo.png' alt='NightFall Home' className='max-h-12 max-w-12 shadow-lg shadow-sky-500/50 rounded-full moonImg'/>
        <span className={' ' + exo2.className}> NightFall </span>
      </div>
      <nav className='flex whitespace-nowrap gap-2 md:gap-4 lg:gap-4 lg:ml-[-10%]'>
        <div className="flex gap-1 items-center px-3 py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium">
        <i className="fa-solid fa-house text-black"></i>
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </div>

        <div className="flex gap-1 items-center px-3 py-1 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium">
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </div>

        <div className="px-3 py-2 text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium">
          About us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </div>

        <div className="px-3 py-2 text-blue-400 hover:text-blue-400/90 relative group cursor-pointer font-medium">
          <i className="fa-solid fa-compass"></i>
          Contact us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </div>
      </nav>
      <div></div>
    </div>
  )
}
