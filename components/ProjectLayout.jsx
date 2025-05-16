import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link';


export default function ProjectLayout() {
  return (
    <section className='my-12 flex justify-center gap-8 w-full text-white'>
        <div className='flex flex-col '>
             {/* Demo Project Card 1 */}
            <ProjectCard />
        </div>
        {/* Demo Project Card 2 */}
        <div className='mt-6'>
            <ProjectCard />
        </div>
    </section>
  )
}
