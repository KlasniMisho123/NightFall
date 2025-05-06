import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
export default function WorkStages() {
  return (
    <section className='flex justify-evenly gap-8 '>
      <div className='flex flex-col gap-4 '>
        <div className='my-4'>
          {/* WorkStages Color */}
          <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-purple-500/80 text-purple-500/90 font-bold rotate-[10deg] text-sm md:text-base ' + urbanist.className }>
            Work Process
          </span> 
          <h1 className={`text-white text-xl my-4 md:text-2xl lg:text-4xl font-semibold mt-2 whitespace-nowrap ` + urbanist.className}>
            How It <span className='text-purple-500/90 font-extrabold'> Works </span> ?
          </h1>
          {/* p max-w-[500px] for now */}
          <p className='max-w-[500px] text-gray-200'>
            From the first spark of an idea to the final deployment, 
            our process is built to turn concepts into fully realized web
            applications. Each step ensures clarity, creativity,
            and collaboration—so you’re always involved, and the end result
            exceeds expectations.
          </p>

        </div>
        {/* COL/ROWS */}
        <div className='flex flex-col my-4 text-white gap-4 '>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-600/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-blue-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Ideation and concept development for the client project </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-blue-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Initial design and prototyping phase </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-blue-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Demo release, client feedback, and iterative testing </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-blue-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Finalized web application ready for deployment </h4> 
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 h-full'>
        {/* STAGE CARDS */}
        {/* STAGE CARD BG- Roman numbers/icons/imgs */}
        <div className='flex flex-col p-4 bg-white gap-2 min-h-[300px] rounded-xs '>
          <div className='relative'> 
            <i className="fa-solid fa-lightbulb hover:fa-bounce text-8xl opacity-40 text-yellow-400 absolute absolute top-0 left-0 z-0"></i>
            <h1 className='relative z-10 m-10 mt-14 font-bold text-2xl'>01. IDEA</h1> 
          </div>
          <p> Ideation and concept development </p>
        </div>
        <div className='mt-8'>02. UI/UX DESIGN</div>
        <div>03.DEMO & TESTING </div>
        <div className='mt-8'>04.DEPLOYMENT</div>
      </div>
    </section>
  )
}
