import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
export default function WorkStages() {
  return (
    <section className='flex justify-evenly gap-8 '>
      <div className='flex flex-col gap-4 '>
        <div className='my-4'>
          {/* WorkStages Color */}
          <span className={'border-4 rounded-lg px-4 py-2 my-4 inline-block border-purple-500/80 text-purple-500/90 font-bold rotate-[5deg] text-sm md:text-base ' + urbanist.className }>
            Work Stages
          </span> 
          <h1 className={`text-white text-xl my-4 md:text-2xl lg:text-4xl font-semibold mt-2 whitespace-nowrap ` + urbanist.className}>
            How It <span className='text-purple-500/90 font-extrabold'> Works </span> ?
          </h1>
          {/* p max-w-[500px] for now */}
          <p className='max-w-[500px]'>
            lorem inpsumlorem inpsumlorem inpsumlorem inpsumlorem inpsumlorem
             inpsumlorem inpsumlorem inpsumlorem inpsumlorem inpsumlorem 
            inpsumlorem inpsumlorem inpsumlorem inpsumlorem inpsumlorem inpsum</p>
        </div>
        <div className='my-4'>
          <div>Ideation and concept development for the client project</div>
          <div>Initial design and prototyping phase </div>
          <div>Demo release, client feedback, and iterative testing</div>
          <div>Finalized web application ready for deployment</div>
        </div>
      </div>
      <div className='grid grid-cols-2 bg-red-100 h-full'>
        {/* STAGE CARDS */}
        <div>01. IDEA </div>
        <div className='mt-8'>02. UI/UX DESIGN</div>
        <div>03.DEMO & TESTING </div>
        <div className='mt-8'>04.DEPLOYMENT</div>
      </div>
    </section>
  )
}
