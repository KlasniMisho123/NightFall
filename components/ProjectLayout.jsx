import React from 'react'
import ProjectCard from './ProjectCard'


export default function ProjectLayout() {
  return (
    <section className="my-12 flex justify-center gap-8 w-full text-white">
        <div className='flex flex-1 flex-col gap-16 '>
             {/*  year, title, webLink, projectDesc, projectSpanColor, client, time, service, imgSrc */}
            <ProjectCard year={2024} projectName="MoodCheck" title=" - Track your mood and see how you feel over time" webLink="https://mood-check.vercel.app/" projectSpanColor="indigo-500" client="Developeing Skills"
            time="10 Days" service="Web Page Development" imgSrc="MoodCheck.png"
            projectDesc="is a personal mood tracking application that allows you to rate your day using a 5-point scale, add a short description or reflection, 
            and save your entries securely to a Firebase server tied to your personal account. The app provides a simple and intuitive interface for logging daily moods,
            helping you stay mindful of your emotional well-being over time. In addition to mood logging, MoodCheck includes extra features such as mood statistics to 
            help you visualize patterns or changes in your emotional state, as well as a section for light-hearted jokes to brighten your day.
            Whether you're tracking for personal insight or simply want a fun way to reflect on your feelings, MoodCheck offers a thoughtful and user-friendly experience." />
            <ProjectCard year={2024} projectName="MoodCheck" title=" - Track your mood and see how you feel over time" webLink="https://mood-check.vercel.app/" projectSpanColor="indigo-500" client="Developeing Skills"
            time="10 Days" service="Web Page Development" imgSrc="MoodCheck.png"
            
            projectDesc="is a personal mood tracking application that allows you to rate your day using a 5-point scale, add a short description or reflection, 
            and save your entries securely to a Firebase server tied to your personal account. The app provides a simple and intuitive interface for logging daily moods,
            helping you stay mindful of your emotional well-being over time. In addition to mood logging, MoodCheck includes extra features such as mood statistics to 
            help you visualize patterns or changes in your emotional state, as well as a section for light-hearted jokes to brighten your day.
            Whether you're tracking for personal insight or simply want a fun way to reflect on your feelings, MoodCheck offers a thoughtful and user-friendly experience." />
            
        </div>
        <div className='mt-16 flex flex-1 flex-col gap-16 '>
            <ProjectCard year={2024} projectName="EspressoMeter" title=" Coffee Tracking for Cofee Fiends" webLink="https://espresso-meter.vercel.app/" projectSpanColor="indigo-500" client="Developeing Skills"
            time="2 Weeks" service="Web Page Development" imgSrc="EspressoMeter.png"
            
            projectDesc="Expressometer is a web application designed to help users monitor and understand their coffee consumption habits in a detailed and engaging way. 
            With this app, users can log each cup of coffee they drink by entering the time of consumption, coffee type, and cost. Expressometer then calculates real-time
            caffeine levels and keeps track of total daily intake, allowing users to visualize how their caffeine consumption fluctuates throughout the day. In addition to tracking
            caffeine, the app highlights top-consumed coffee types, estimates daily spending, and provides useful insights to promote more mindful consumption. 
            Whether you're a casual drinker or a coffee enthusiast, Expressometer offers a clear, data-driven picture of your coffee habits." />
            <ProjectCard year={2024} projectName="EspressoMeter" title=" Coffee Tracking for Cofee Fiends" webLink="https://espresso-meter.vercel.app/" projectSpanColor="indigo-500" client="Developeing Skills"
            time="2 Weeks" service="Web Page Development" imgSrc="EspressoMeter.png"
            
            projectDesc="Expressometer is a web application designed to help users monitor and understand their coffee consumption habits in a detailed and engaging way. 
            With this app, users can log each cup of coffee they drink by entering the time of consumption, coffee type, and cost. Expressometer then calculates real-time
            caffeine levels and keeps track of total daily intake, allowing users to visualize how their caffeine consumption fluctuates throughout the day. In addition to tracking
            caffeine, the app highlights top-consumed coffee types, estimates daily spending, and provides useful insights to promote more mindful consumption. 
            Whether you're a casual drinker or a coffee enthusiast, Expressometer offers a clear, data-driven picture of your coffee habits." />

        </div>
    </section>
  )
}
