import BorderedTitle from '@/components/BorderedTitle';
import ProjectLayout from '@/components/ProjectLayout';
import { Inter, Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export default function Projects() {
  return (
    // PURPLE/BLUE-500? (Span, Card)
    // Different Background
    // Create Project Form ??
    <div className="transition-all transition-duration-300 bg-nightfall">
      <div className='w-full py-2 px-4 md:px-14 lg:px-28 '
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/black-hexagonal-grid-line-pattern-bold-industrial-wallpaper_1017-43002.jpg?t=st=1747303225~exp=1747306825~hmac=78b5e1de77d56f51676995a8629005a3ade93e4a992d945ed48d09bfe85aabe2')",
      }}>        
        <section className='my-10 mx-[20%]'>
          <BorderedTitle text="Our Projects" color="blue-500" angle={5}/>
          {/* Light Background */}
          <div className='text-white my-6'>
            <h1 className={`text-white text-4xl my-4 md:text-6xl lg:text-7xl font-bold mt-2 whitespace-nowrap text-center leading-tight ` + urbanist.className} >Sharing Our Experience <br/> <span className='text-blue-500/80 '> With You  </span></h1>
            <p className={"text-gray-400 text-sm max-w-md  mt-3 leading-relaxed lg:max-w-2xl md:text-base text-center " + inter.className} >Interested in what we've worked on and how we've contributed? Take a look at our past projects and see what we've been up to.</p>
          </div>
          {/* Div For Projects */}
        </section>
      </div>
      <div className='px-4 md:px-14 lg:px-28 '>
        <ProjectLayout />
      </div>
    </div>
  )
}
