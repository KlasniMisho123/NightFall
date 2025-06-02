import BorderedTitle from '@/components/BorderedTitle';
import OrderProject from '@/components/OrderProject';
import ProjectLayout from '@/components/ProjectLayout';
import StatCard from '@/components/StatCard';
import { Inter, Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export default function Projects() {
  return (
    <div className="transition-all transition-duration-300 bg-nightfall">
      <div className='w-full py-2 px-4 md:px-14 lg:px-28 '
      style={{
        backgroundImage: "url('projects-bg.avif')",
      }}>        
        <section className='my-10 mx-[20%] hero-stats-load '>
          <BorderedTitle text="Our Projects" color="blue-500" angle={5}/>
          <div className='text-white my-6'>
            <h1 className={`text-white text-4xl my-4 md:text-6xl lg:text-7xl font-bold mt-2 whitespace-nowrap text-center leading-tight ` + urbanist.className} >Sharing Our Experience <br/> <span className='text-blue-500/80 '> With You  </span></h1>
            <p className={"text-gray-400 text-sm max-w-md  mt-3 leading-relaxed lg:max-w-2xl md:text-base text-center " + inter.className} >Interested in what we&apos;ve worked on and how we&apos;ve contributed? Take a look at our past projects and see what we&apos;ve been up to.</p>
          </div>
        </section>
      </div>
      <div className='px-4 md:px-14 lg:px-28 '>
        <section className={'flex overflow-x-auto whitespace-nowrap bg-white mt-24 mb-4 flex justify-between py-4 px-2 rounded-lg  md:px-4 lg:px-8 hero-stats-load '} >
            {/* RESPONSIVE */}
            <StatCard stat={300 + "+"} title={`USERS`} titleDec={`To Monitor Mood`} cardColor={`blue`}/>
            <StatCard stat={200} title={`Total Users`} titleDec={`For a Healthier Lifed`} cardColor={`purple`}/>
            <StatCard stat={100} title={`Mood Commits`} titleDec={`Connecting with Your Emotions`} cardColor={`red`}/>
            <StatCard stat={450} title={`Reaction`} titleDec={`Connecting with Your Emotions`} cardColor={`green`}/>
        </section> 
        <OrderProject/>
        <ProjectLayout />
      </div>
    </div>
  )
}
