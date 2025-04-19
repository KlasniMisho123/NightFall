import { Exo_2 } from 'next/font/google';
import React from 'react'

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function Footer() {
  return (
    <footer className={'flex flex-col py-6 px-4 bg-gray-600 rounded-t gap-2 ' + exo2.className}>
      <div>1</div>
      <span className="h-0.5 bg-white o w-full opacity-100 transition-all duration-300"></span>
      <div className='text-center text-gray-100'>© Copyright 2025, All Rights Reserved by Nightfall Webworks</div>
    </footer>
  )
}
