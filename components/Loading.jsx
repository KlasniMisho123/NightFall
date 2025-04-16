import React from 'react'

export default function Loading() {
  return (
    <div className='flex h-[100vh] bg-blue-300 items-center justify-center gap-2 '>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-0"></div>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-1"></div>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-2"></div>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-3"></div>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-4"></div>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-5"></div>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-6"></div>
        <div className="h-12 w-12 bg-yellow-500 rounded-full animation-delay-7"></div>
    </div>
  )
}
