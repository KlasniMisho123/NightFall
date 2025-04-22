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
      <div className='flex justify-between items-center mx-4'>
        <Link  className='flex gap-2 items-center font-bold text-blue-400  moonLogoAnimation cursor-pointer'
        href='/'
        onClick={() => {setIsSideNavBarActive(false)}}>
          <img  src='./moonlogo.png' alt='NightFall Home' className='max-h-12 max-w-12 shadow-lg shadow-sky-500/50 rounded-full moonImg'/>
          <span className={' ' + exo2.className}> NightFall </span>
        </Link>
        <div className='flex text-gray-300 items-center gap-1 '><i className="fa-solid fa-star text-yellow-300"></i> We Create in the Dark, So You Shine in the Light</div>
{/* https://www.facebook.com/profile.php?id=61575481044791 */}
          <div>
              <i className="fa-brands fa-facebook text-lg  transition-all ttransition-duration-300 text-white hover:text-blue-500"></i>
          </div>
      </div>
      <span className="h-0.5 bg-blue-500 w-full opacity-100 transition-all duration-300"></span>
      <div className='text-center text-gray-100'>© Copyright 2025, All Rights Reserved by Nightfall Webworks</div>
    </footer>
  )
}
