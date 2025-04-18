import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between bg-gray-600 px-4 py-2 cursor-pointer hover:moonLogoAnimation'>
      <div className='flex gap-2 items-center font-bold text-blue-400'>
        <img  src='./moonlogo.png' alt='NightFall Home' className='max-h-12 max-w-12 shadow-lg shadow-sky-500/50 rounded-full'/>
        <span> NightFall </span>
      </div>
      <nav>NAVBAR</nav>
      <div></div>
    </div>
  )
}
