import React from 'react'
import { Urbanist } from 'next/font/google';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectCard() {
  return (
    <div className='bg-transparent flex flex-col gap-4'>
      <div className={'text-white text-4xl font-bold ' + urbanist.className } > 2024 </div>
        {/* Year */}
        {/* Titile, Href -> dynamic page? */}
        {/* Other Animation */}
        <Link
        className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug transition-all duration-300 hover:underline decoration-blue-500 max-w-[650px] truncate"
        href={'https://mood-check.vercel.app/'}
        >
            <span className={'text-indigo-500 font-bold ' + urbanist.className }> MoodCheck </span> - Track your mood and see how you feel over time
        </Link>
        {/* Project Desc */}
        <p className="my-4 line-clamp-5">
            <span className={'text-indigo-500 text-lg font-bold ' + urbanist.className }> MoodCheck </span> 
            is a personal mood tracking application that allows you to rate your day using a 5-point scale, add a short description or reflection, 
            and save your entries securely to a Firebase server tied to your personal account. The app provides a simple and intuitive interface for logging daily moods,
            helping you stay mindful of your emotional well-being over time. In addition to mood logging, MoodCheck includes extra features such as mood statistics to 
            help you visualize patterns or changes in your emotional state, as well as a section for light-hearted jokes to brighten your day.
            Whether you're tracking for personal insight or simply want a fun way to reflect on your feelings, MoodCheck offers a thoughtful and user-friendly experience.
        </p>

        {/* Flex,  Flex-col(Client, Client Name), (Time Duration, Time) (Service, Service)*/}
        <div className='flex justify-between '>
            <div className='flex flex-col gap-1'>
                <div>Client</div>
                <div className='text-gray-500'>Developeing Skills</div>
            </div>
            <div className='flex flex-col gap-1'>
                <div>Time Duration</div>
                <div className='text-gray-500'>10 Days</div>
            </div>
            <div className='flex flex-col gap-1'>
                <div>Service</div>
                <div className='text-gray-500'>Web Page Development</div>
            </div>
        </div>
        {/* Project Img */}
        <Link
        className=' rounded-2xl max-w-full max-h-[300px] overflow-hidden transition-all transition-duration-300 hover:scale-103'
        href={'https://mood-check.vercel.app/'}
        >
            <img src='Moodcheck.png' alt="Project Image" className='object-cover' />
        </Link>
    </div>
  )
}
