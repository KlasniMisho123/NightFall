import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between bg-gray-600 px-4 py-2 '>
      <div>
        <img  src='./moonlogo.png' alt='NightFall Home' className='h-12 w-12 shadow-lg shadow-sky-500/50 rounded-full'/>
      </div>
      <nav>NAVBAR</nav>
      <div></div>
    </div>
  )
}
