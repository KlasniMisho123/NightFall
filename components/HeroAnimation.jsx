import React from 'react'
import Image from 'next/image';

export default function HeroAnimation() {
  return (
    <section className='min-w-0 sm:min-w-[20%] md:min-w-[25%] lg:min-w-[40%] text-white main-hero-load flex items-center overflow-hidden'>
      <div className='absolute z-1 w-full '>
        <img
         src="https://i.pinimg.com/736x/1b/c5/3e/1bc53e53aa055c0247e30714a874adb5.jpg" 
         className='max-h-[800px] w-full object-cover '
         alt="Astronaut on the Moon"
        />
      </div>
      <div className='z-2'>
        <img
         src="HeroAnimationAssets/astronaut-rocket.png" 
         className='h-32 w-32 object-cover rounded-full astronaut-flight '
         alt="Astronaut on the Moon"
        />
        <img
         src="HeroAnimationAssets/astronaut-pizza-rocket.png" 
         className='h-32 w-32 object-cover rounded-full '
         alt="Astronaut on the Moon"
        />
      </div>
    </section>

    // <section className='min-w-0 sm:min-w-[20%] md:min-w-[25%] text-white main-hero-load flex items-center'>
    //   <div className='flex flex-col items-center p-8'>
      /* <div className='flex justify-center gap-2'>
          <img
            src='sun.png'
            alt='Sun icon'
            className='h-24 w-24 object-cover spin-slow'
          />
          <img
            src='moonlogo.png'
            alt='Moon logo'
            className='h-24 w-24 object-cover fade-delay'
          />
        </div>
        <img
          src='Mountains.png'
          alt='Mountain landscape'
          className='mt-4 object-cover rise-up'
        /> */
    //   </div>
    // </section>
    
  )
}
