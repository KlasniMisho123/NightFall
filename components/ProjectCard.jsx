import React from 'react'
import { Exo_2, Urbanist } from 'next/font/google';
import Link from 'next/link';
import { colorClassMap } from '@/utils';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function ProjectCard(props) {
    const { year, projectName, title, webLink, projectDesc, projectSecondaryColor, client, time, service, imgSrc } = props

    const classes = colorClassMap[projectSecondaryColor] || {
        border: 'hover:border-white',
        text: 'text-white',
        decoration: 'decoration-white',
    }


  return (
    <div className={`bg-transparent flex flex-col gap-4 rounded-2xl p-4 border-2 border-transparent transition-all duration-300 ${classes.border}`}>
        <Link
        className={`text-xl md:text-2xl font-semibold text-white mb-4 leading-snug 0 max-w-[650px] truncate`}
        href={webLink}
        >
            <span className={`${classes.text} font-bold  px-2 rounded-r-full border-2 mr-1 ` + urbanist.className }> {projectName} </span> -
            <span className={`transition-all duration-300 hover:underline ${classes.decoration}`}> {title} </span> 
        </Link>
        <p className={"my-4 line-clamp-5 text-gray-400 " + exo2.className}>
            <span className={`${classes.text} ${classes.border} text-lg font-bold ` + urbanist.className }> {projectName} </span> 
            {projectDesc}
        </p>

        <div className={'text-white text-4xl font-bold ' + urbanist.className }>{year}</div>
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
