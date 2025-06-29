import React from 'react'
import ProjectCard from './ProjectCard'


export default function ProjectLayout() {
  return (
    <section className="py-6 flex flex-col lg:flex-row justify-center gap-8 w-full text-white">
        <div className='flex flex-1 flex-col px-2 gap-2 lg:gap-8 '>
            <ProjectCard animationIndex={1} year={2024} projectName="MoodCheck" title=" Track your mood and see how you feel over time" webLink="https://mood-check.vercel.app/" projectSecondaryColor="indigo" client="Developeing Skills"
            time="10 Days" service="Web Page Development" imgSrc="Moodcheck.png"
            projectDesc="is a personal mood tracking application that allows you to rate your day using a 5-point scale, add a short description or reflection, 
            and save your entries securely to a Firebase server tied to your personal account. The app provides a simple and intuitive interface for logging daily moods,
            helping you stay mindful of your emotional well-being over time. In addition to mood logging, MoodCheck includes extra features such as mood statistics to 
            help you visualize patterns or changes in your emotional state, as well as a section for light-hearted jokes to brighten your day.
            Whether you're tracking for personal insight or simply want a fun way to reflect on your feelings, MoodCheck offers a thoughtful and user-friendly experience." />

            <ProjectCard animationIndex={3} year={2024} projectName="NightFall Web" title=" Digitize Your Idea" webLink="https://night-fall.vercel.app/" projectSecondaryColor="blue" client="Developeing Skills"
            time="2 Weeks" service="Web Page Development" imgSrc="nightfall-project-demo.PNG"
            projectDesc="Nightfall Webworks is a modern web solutions company dedicated to helping businesses of all sizes establish a strong, professional online presence. 
              We specialize in designing and developing custom websites, web apps, and digital tools that are both visually compelling and technically sound.
              Whether you're a startup looking to build your first digital product, or an established business ready to modernize your web platform, our goal is to deliver clean code,
              intuitive design, and scalable performance.Inspired by the calm and clarity that comes with nightfall, we approach every project with focus, creativity,
              and precision—building solutions that not only look great, but work flawlessly across devices and platforms.
              At Nightfall Webworks, we don’t just build websites—we create experiences that empower your brand and engage your audience." />
        </div>

        <div className='mt-16 flex flex-1 flex-col px-2 gap-2 lg:gap-8  '>
            <ProjectCard animationIndex={2} year={2024} projectName="EspressoMeter" title=" Coffee Tracking for Cofee Fiends" webLink="https://espresso-meter.vercel.app/" projectSecondaryColor="pink" client="Developeing Skills"
            time="2 Weeks" service="Web Page Development" imgSrc="EspressoMeter.png"
            projectDesc="Expressometer is a web application designed to help users monitor and understand their coffee consumption habits in a detailed and engaging way. 
            With this app, users can log each cup of coffee they drink by entering the time of consumption, coffee type, and cost. Expressometer then calculates real-time
            caffeine levels and keeps track of total daily intake, allowing users to visualize how their caffeine consumption fluctuates throughout the day. In addition to tracking
            caffeine, the app highlights top-consumed coffee types, estimates daily spending, and provides useful insights to promote more mindful consumption. 
            Whether you're a casual drinker or a coffee enthusiast, Expressometer offers a clear, data-driven picture of your coffee habits." />

            <ProjectCard animationIndex={4} year={2025} projectName="AllDesign" title=" Purposeful work for real people and bold ideas" webLink="" projectSecondaryColor="red" client="Developeing Skills"
            time="2 Weeks" service="Web Page Development" imgSrc="all-design.png"
            projectDesc="Comming Soon" />
        </div>
    </section>
  )
}
