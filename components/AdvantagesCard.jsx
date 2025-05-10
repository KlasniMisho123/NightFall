import { Fugaz_One } from 'next/font/google';
import React from 'react'


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function AdvantagesCard(props) {
    const {icon, title } = props
  return (
    <div className='flex flex-col gap-8 rounded-lg border border-gray-300 bg-blue-400/80 p-2 items-center justify-center w-[150px] h-[200px] advantageCardAction '>
        <div className={`text-4xl text-gray-100 `}>{icon}</div>
        <h1 className={'text-gray-100  ' + fugaz.className}> {title} </h1>
    </div>
  )
}