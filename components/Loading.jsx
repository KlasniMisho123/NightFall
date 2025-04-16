import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col h-[100vh]  items-center justify-center'>
      <div className="flex justify-center items-center text-red-500 text-5xl font-bold absolute top-12">
        Work In Process 
        <i className="fa-solid fa-hammer ml-4">
          <span className="forge-animation"></span>
        </i>
      </div>

      <div className="flex gap-2 items-center loading-div-two">
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-0"></div>
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-1"></div>
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-2"></div>
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-3"></div>
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-4"></div>
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-5"></div>
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-6"></div>
        <div className="h-8 w-8 bg-red-500 rounded-full secondDiv-animation-delay-7"></div>
      </div>
      <div className="flex gap-2 items-center loading-div-one">
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-0"></div>
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-1"></div>
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-2"></div>
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-3"></div>
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-4"></div>
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-5"></div>
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-6"></div>
        <div className="h-8 w-8 bg-blue-500 rounded-full firstDiv-animation-delay-7"></div>
      </div>
    </div>
  )
}
