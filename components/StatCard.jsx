import { Poppins, Space_Mono } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function StatCard({color}) {

  return (
    <div className=' flex flex-col gap-4 items-center px-4 py-8 min-w-[150px] totalStats '> 
      <div className='border-1 border-blue-500  bg-blue-500 px-4 py-1 rounded-lg '> </div>   
      <h2 className={'text-4xl text-blue-500 italic ' + mono.className}> 300+ </h2>
      <h3 className={'text-sm text-blue-400 ' + poppins.className} > USERS </h3>
      <h4 className={'text-xs '}> To Monitor Mood </h4>
    </div>
  )
}


