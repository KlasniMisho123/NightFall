import React from 'react'
import Image from 'next/image';

export default function HeroAnimation() {
  return (
    <div className='w-full h-full '>
      {/* <Image
        src="https://i.pinimg.com/736x/1b/c5/3e/1bc53e53aa055c0247e30714a874adb5.jpg" 
        alt="Astronaut on the Moon"
        className='w-[100%] h-[100%] object-cover '
        width={100}
        height={100} /> */}
        <img
         src="https://i.pinimg.com/736x/1b/c5/3e/1bc53e53aa055c0247e30714a874adb5.jpg" 
        />
    </div>

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
