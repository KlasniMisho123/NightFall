'use client'
import { Exo_2 } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function Footer() {
 const [isSideNavBarActive, setIsSideNavBarActive] = useState(false)
 const [currentDate, setCurrentDate] = useState("")

useEffect(()=>{
  let curDate = new Date()
  setCurrentDate()
},[])

  return (
    <footer className={'flex flex-col py-2 pb-4  px-4 bg-gray-600 rounded-t gap-4 ' + exo2.className}>
      <div className='flex flex-col gap-4 items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0  mx-0 sm:mx-2 md:mx-4'>
        <Link  className='flex gap-2 items-center font-bold text-blue-400  moonLogoAnimation cursor-pointer'
        href='/'
        onClick={() => {setIsSideNavBarActive(false)}}>
          <img  src='./moonlogo.png' alt='NightFall Home' className='max-h-12 max-w-12 shadow-lg shadow-sky-500/50 rounded-full moonImg'/>
          <span className={' ' + exo2.className}> NightFall </span>
        </Link>
        <div className='flex text-gray-300 items-center whitespace-none text-center gap-1 text-sm md:text-base '>
          <i className="fa-solid fa-star text-yellow-300"></i>
          <span> We Create in the Dark, So You Shine in the Light </span>
        </div>
          <div className='flex gap-2'>
           <a
              className='flex justify-center items-center cursor-pointer transition-all duration-300 bg-gray-500/50 h-8 w-8 rounded-full pt-0.5 hover:bg-orange-600'
              title='nighfallwebworks@gmail.com'
            >
              <i className="fa-solid fa-envelope text-xl text-white"></i>
            </a>
            
            <a className='flex justify-center items-center cursor-pointer transition-all transition-duration-300 bg-gray-500/50 h-8 w-8 rounded-full pt-0.5 hover:bg-blue-500'
            href='https://www.facebook.com/profile.php?id=61575481044791'
            target="_blank"
            >
              <i className="fa-brands fa-facebook-f text-xl text-white "></i>
            </a>

            <a className='flex justify-center items-center cursor-pointer transition-all transition-duration-300 bg-gray-500/50 text-white h-8 w-8 rounded-full pt-0.5
             hover:bg-gray-900'
            href='https://github.com/KlasniMisho123'
            target="_blank"
            >
              <i className="fa-brands fa-github text-xl "></i>
            </a>

          </div>
      </div>
      <span className="h-0.5 bg-blue-500 w-full opacity-100 transition-all duration-300"></span>
      <div className='text-center text-gray-300 text-xs md:text-sm'>© Copyright 2025, All Rights Reserved by Nightfall Webworks</div>
    </footer>
  )
}
