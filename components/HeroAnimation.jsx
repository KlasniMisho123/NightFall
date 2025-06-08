'use client'
import React, { useEffect, useState } from 'react'

export default function HeroAnimation() {
 const [animate, setAnimate] = useState(true);

 useEffect(() => {

    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100)
    }, 17000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='min-w-0 sm:min-w-[20%] md:min-w-[25%] lg:min-w-[40%] text-white main-hero-load flex items-center overflow-hidden md:self-start md:min-w-[350px] md:min-h-[600px] lg:h-[100vh] max-w-[450px] '>
      <div className={'absolute w-full min-h-[600px] min-w-[450px] md:min-w-[350px] md:min-h-[800px] ' + (animate? ' z-1 ' : ' z-3 ')}>
        <img
         src="https://i.pinimg.com/736x/1b/c5/3e/1bc53e53aa055c0247e30714a874adb5.jpg" 
         className='max-h-[800px] w-full object-cover '
         alt="Astronaut on the Moon"
        />
      </div>
      <div className='relative z-2 '>
        <img
         src="HeroAnimationAssets/astronaut-rocket.png" 
         className={'h-32 w-32 object-cover rounded-full hidden-before-animation ' + (animate? ' astronaut-flight ' : '') }
         alt="Astronaut on the Moon"
        />
        <img
         src="HeroAnimationAssets/astronaut-pizza-rocket.png" 
         className={'h-32 w-32 object-cover rounded-full ' + (animate? ' astronaut-with-pizza' : '') }
         alt="Astronaut on the Moon"
        />
        <img
         src="HeroAnimationAssets/animation-moon.png" 
         className={'h-46 w-46 object-cover rounded-full ' + (animate? ' animated-moon ' : '') }
         alt="Astronaut on the Moon"
        />
        <img
         src="HeroAnimationAssets/astronaut-star.png" 
         className={'h-46 w-46 object-cover rounded-full ' + (animate? ' astronaut-star ' : '') }
         alt="Astronaut on the Moon"
        />
      </div>
    </section>
  )
}
