import { Poppins, Space_Mono } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function StatCard(props) {
  const {cardColor, stat, title, titleDec } = props;

  return (
    <div className='flex flex-col gap-4 items-center px-1 py-4 min-w-[100px] totalStatsOne md:px-2 lg:px-4 '>
      <div className='border-1 border-blue-500  bg-blue-500 px-4 py-1 rounded-lg '> </div>   
      <h2 className={'text-4xl text-blue-500 italic ' + mono.className}> {stat} </h2>
      <h3 className={'text-sm text-blue-500 ' + poppins.className} > {title}: {cardColor}</h3>
      <h4 className={'text-xs '}> {titleDec} </h4>
   </div>
  )
}


