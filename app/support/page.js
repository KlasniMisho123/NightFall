import StatCard from '@/components/StatCard'
import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Support() {
  // Socials Element
  // Visual

  return (
    <div className='bg-nightfall min-h-[100vh] text-white'>

       <section className='flex flex-col gap-4 bg-white mt-12 md:mt-18 lg:mt-24 mb-4 rounded-lg overflow-x-auto whitespace-nowrap py-6 px-2 md:px-4 lg:px-8 hero-stats-load '>
          <div
            className={
              "self-center text-2xl font-semibold tracking-wide rounded-full p-2 px-4 border-2 border-blue-500 text-blue-500 " +
              urbanist.className
            }>
            NightFall In Numbers
          </div>

          <div className={'flex flex-col sm:flex-row md:grid md:md:grid-cols-2 lg:flex-row justify-between '} >
              <StatCard stat={1 + "+"} title={`Years of Experience`} titleDec="Working With You" cardColor={"blue"} delay={0} />
              <StatCard stat={10 + "+"} title={`Completed Projects`} titleDec="From Start to Finish" cardColor={"purple"} delay={0.5} />
              <StatCard stat={4 + "+"} title={`Ideas in Progress`} titleDec={`Always Innovating`} cardColor={`red`} delay={1}/>
              <StatCard stat={50 + "+"} title={`Feedback Received`} titleDec={`From Happy Clients`} cardColor={`green`} delay={1.5}/>
          </div> 
        </section>

    </div>
  )
}
