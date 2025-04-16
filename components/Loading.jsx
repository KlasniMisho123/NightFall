import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col h-[100vh] bg-blue-300 items-center justify-center'>
      <div className="flex gap-2 items-center loading-div-one">
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-0"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-1"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-2"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-3"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-4"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-5"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-6"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full firstDiv-animation-delay-7"></div>
      </div>

      <div className="flex gap-1 items-center loading-div-two">
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-0"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-1"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-2"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-3"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-4"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-5"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-6"></div>
        <div className="h-8 w-8 bg-yellow-500 rounded-full secondDiv-animation-delay-7"></div>
      </div>

    </div>
  )
}
