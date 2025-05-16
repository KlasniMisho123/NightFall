import React from 'react'
import ProjectCard from './ProjectCard'
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectLayout() {
  return (
    <section className='my-12 flex justify-center gap-8 w-full text-white'>
        <div className='flex flex-col '>
             {/* Demo Project Card 1 */}
            <div className='bg-transparent flex flex-col gap-4'>
               {/* Year */}
                <div className={'text-white text-4xl font-bold ' + urbanist.className } > 2024 </div>
               {/* Titile, Href -> dynamic page? */}
                <div> MoodCheck </div>
               {/* Project Desc */}
                <p> <span className={'text-indigo-500 text-lg font-bold ' + urbanist.className }> MoodCheck </span>  is a personal mood tracking application that allows you to rate your day using a 5-point scale, add a short description or reflection, 
                    and save your entries securely to a Firebase server tied to your personal account. The app provides a simple and intuitive interface for logging daily moods,
                    helping you stay mindful of your emotional well-being over time. In addition to mood logging, MoodCheck includes extra features such as mood statistics to 
                    help you visualize patterns or changes in your emotional state, as well as a section for light-hearted jokes to brighten your day.
                    Whether you're tracking for personal insight or simply want a fun way to reflect on your feelings, MoodCheck offers a thoughtful and user-friendly experience.
                </p>

               {/* Flex,  Flex-col(Client, Client Name), (Time Duration, Time) (Service, Service)*/}
                <div className='flex justify-center '>
                    <div className='flex flex-col gap-4'>
                        <div>1</div>
                        <div>2</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>1</div>
                        <div>2</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>1</div>
                        <div>2</div>
                    </div>
                </div>
                {/* Project Img */}
                <img src='Moodcheck.png' alt="Project Image" className='object-cover rounded-2xl' />
            </div>
        </div>
        {/* Demo Project Card 2 */}
        <div className='mt-6'>
            <ProjectCard />
        </div>
    </section>
  )
}
