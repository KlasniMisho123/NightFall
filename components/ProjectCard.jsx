import React from 'react'
import { Exo_2, Urbanist } from 'next/font/google';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function ProjectCard(props) {
    const { year, projectName, title, webLink, projectDesc, projectSecondaryColor, client, time, service, imgSrc } = props

    const borderColor = `hover:border-${projectSecondaryColor}`
  return (
    <div className='bg-transparent flex flex-col gap-4 rounded-2xl p-4 border-2 border-transparent hover:border-indigo-500 transition-all transition-duration-300 '>
      <div className={'text-white text-4xl font-bold ' + urbanist.className }>{year}</div>
        <Link
        className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug transition-all duration-300 hover:underline decoration-blue-500 max-w-[650px] truncate"
        href={webLink}
        >
            <span className={'text-indigo-500 font-bold ' + urbanist.className }> {projectName} </span> {title}
        </Link>
        <p className={"my-4 line-clamp-5 text-gray-400 " + exo2.className}>
            <span className={'text-indigo-500 text-lg font-bold ' + urbanist.className }> {projectName} </span> 
            {projectDesc}
        </p>

        {/* Flex,  Flex-col(Client, Client Name), (Time Duration, Time) (Service, Service)*/}
        <div className={'flex justify-between ' + exo2.cl}>
            <div className='flex flex-col gap-1'>
                <div>Client</div>
                <div className='text-gray-500'>{client}</div>
            </div>
            <div className='flex flex-col gap-1'>
                <div>Time Duration</div>
                <div className='text-gray-500'>{time}</div>
            </div>
            <div className='flex flex-col gap-1'>
                <div>Service</div>
                <div className='text-gray-500'>{service}</div>
            </div>
        </div>
        {/* Project Img */}
        <Link
        className=' rounded-2xl max-w-full max-h-[300px] overflow-hidden transition-all transition-duration-300 hover:scale-103'
        href={webLink}
        >
            <img src={imgSrc} alt="Project Image" className='object-cover' />
        </Link>
    </div>
  )
}
