import React from 'react'
import ProjectCard from './ProjectCard'


export default function ProjectLayout() {
  return (
    <section className='my-12 flex justify-center gap-8 w-full text-white'>
        <div className='flex flex-col '>
             {/*  year, title, webLink, projectDesc, projectSpanColor, client, time, service, imgSrc */}
            <ProjectCard year={2024} title="MoodCheck" webLink="https://mood-check.vercel.app/" projectSpanColor="indigo-500" client="Developeing Skills"
            time="10 Days" service="Web Page Development" imgSrc="Moodcheck.png"
            
            projectDesc="is a personal mood tracking application that allows you to rate your day using a 5-point scale, add a short description or reflection, 
            and save your entries securely to a Firebase server tied to your personal account. The app provides a simple and intuitive interface for logging daily moods,
            helping you stay mindful of your emotional well-being over time. In addition to mood logging, MoodCheck includes extra features such as mood statistics to 
            help you visualize patterns or changes in your emotional state, as well as a section for light-hearted jokes to brighten your day.
            Whether you're tracking for personal insight or simply want a fun way to reflect on your feelings, MoodCheck offers a thoughtful and user-friendly experience." />
        </div>
        <div className='mt-16'>
            <ProjectCard />
        </div>
    </section>
  )
}
