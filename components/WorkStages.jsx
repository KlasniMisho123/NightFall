import { Urbanist }  from 'next/font/google';
import React from 'react'
import BorderedTitle from './BorderedTitle';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function WorkStages() {
  return (
    <section className='flex flex-col justify-evenly gap-2 lg:gap-4 xl:gap-8 lg:flex-row '>
      <div className='flex flex-col gap-4 '>
        <div className='my-4'>
          {/* WorkStages Color */}
         <BorderedTitle text="Work Process" /> 
          <h1 className={`text-white text-xl my-4 md:text-3xl lg:text-5xl font-semibold mt-2 whitespace-nowrap ` + urbanist.className}>
            How It <span className='text-purple-500/90 font-extrabold'> Works </span> ?
          </h1>
          {/* p max-w-[500px] for now */}
          <p className="text-gray-200 max-w-[500px] text-sm md:text-base mt-4 leading-relaxed tracking-wide font-light italic ">
            From the first spark of an idea to the final deployment, 
            our process is built to turn concepts into fully realized web
            applications. Each step ensures clarity, creativity,
            and collaboration — so you’re always involved, and the end result
            exceeds expectations.
          </p>

        </div>
        {/* COL/ROWS */}
        <div className='flex flex-col my-4 text-white gap-4 '>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-600/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-purple-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Ideation and concept development for the client project </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-purple-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Initial design and prototyping phase </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-purple-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Demo release, client feedback, and iterative testing </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-moon text-xl text-purple-400/80 group-hover:bg-purple-500 transition-all transition-duration-300  group-hover:text-gray-300 rounded-full px-1.5 py-1 "></i>
            <h4> Finalized web application ready for deployment </h4> 
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center h-full gap-4 justify-start py-8 px-0 xl:px-8 md:justify-center md:gap-8 sm:flex-row sm:items-start '>

        {/* STAGE CARDS */}
        {/* FLEX 1 */}
        <div className='flex flex-col gap-4 sm:gap-8'>

          <div className='flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300
            border-2 border-transparent shadow-[0_4px_12px_rgba(250,204,21,0.4)]
            hover:border-yellow-700 group overflow-hidden'>
            <div className='relative pt-8'>
              <i className="fa-solid fa-lightbulb fa-bounce text-8xl opacity-60 text-yellow-500 absolute top-0 left-0 z-0"></i>
              <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>01. IDEA</h1> 
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-yellow-500 transition-all duration-300'>
              We begin by understanding the client's vision, exploring possibilities, 
              and generating innovative ideas that align with their goals.
            </p>
          </div>

          <div className='relative translate-y-[360px] sm:translate-y-0 flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300 
            border-2 border-transparent shadow-[0_4px_12px_rgba(168,85,247,0.4)]
            hover:border-purple-700 group overflow-hidden'>
            <div className='relative pt-8'> 
              <i className="fa-solid fa-cubes text-8xl opacity-60 text-purple-500 absolute absolute top-0 left-0 z-0"></i>
              <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>03. DEMO & TESTING</h1> 
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-purple-500 transition-all duration-300'>
               Through interactive demos and rigorous testing, we ensure functionality, 
                performance, and usability across all major platforms and devices.
            </p>
          </div>

        </div>

          {/* FLEX 2 */}
        <div className='flex flex-col gap-4 sm:gap-8 mt-8'>

        <div className='relative translate-y-[-360px] sm:translate-y-0 flex flex-col  p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300
          border-2 border-transparent shadow-[0_4px_12px_rgba(59,130,246,0.4)]
          hover:border-blue-700 group overflow-hidden'>
            <div className='relative pt-8'> 
              <i className="fa-solid fa-compass-drafting text-8xl opacity-60 text-blue-500 absolute absolute top-0 left-0 z-0"></i>
              <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>02. WEB DESIGN</h1> 
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-blue-500 transition-all duration-300'>
               We translate concepts into clean, responsive, and visually engaging 
               designs that reflect the brand’s identity and enhance user experience.
            </p>
          </div>
          
          <div className='flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300
           border-2 border-transparent shadow-[0_4px_12px_rgba(239,68,68,0.4)] 
           hover:border-red-700 group overflow-hidden group'>
            <div className='relative pt-5'> 
              <i className="fa-solid fa-bullseye text-8xl opacity-60 text-red-500 absolute absolute top-0 left-0 z-0"></i>
              <div className='flex items-center relative z-10 font-bold arrow-land '>
                <img src='arrow.png' alt='arrow' className='h-14 w-14 rotate-45 select-none '/> 
                <h1 className={'text-2xl ' + urbanist.className}> DEPLOYMENT </h1> 
              </div>
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-red-500 transition-all duration-300'>
               After final review, we launch the product smoothly, configure hosting,
              and set up maintenance tools to ensure long-term success.
            </p>
          </div>

        </div>
        
        
        {/* <div className='mt-8'></div>
        <div> </div>
        <div className='mt-8'></div> */}
      </div>
    </section>
  )
}
