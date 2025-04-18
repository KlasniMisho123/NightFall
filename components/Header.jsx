import React from 'react'
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-gray-600 px-4 py-2 cursor-pointer'>
      <div className='flex gap-2 items-center font-bold text-blue-400  moonLogoAnimation'>
        <img  src='./moonlogo.png' alt='NightFall Home' className='max-h-12 max-w-12 shadow-lg shadow-sky-500/50 rounded-full moonImg'/>
        <span className={' ' + exo2.className}> NightFall </span>
      </div>
      <nav className='flex whitespace-nowrap gap-2 md:gap-4 lg:gap-6'>
        <div className={navbarItem}>Home</div>
        <div className="px-3 py-2 text-indigo-400 hover:text-indigo-300 relative group cursor-pointer font-medium">
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
        </div>
        <div className="px-4 py-2 text-gray-400 hover:text-sky-400 cursor-pointer relative overflow-hidden transition-colors duration-300 font-medium">
          About us
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 to-sky-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="px-4 py-2 text-gray-300 bg-gray-900 rounded-md hover:bg-gray-800 hover:text-sky-400 hover:shadow-inner hover:shadow-sky-900/30 transition-all duration-300 font-medium">
          contact us
        </div>
      </nav>
      <div></div>
    </div>
  )
}
