import React from 'react'

export default function HeroAnimation() {
  return (
    <section className='min-w-0 sm:min-w-[20%] md:min-w-[25%] text-white main-hero-load flex items-center'>
          <div className='flex flex-col items-center p-8 hero-fade-in'>
            <div className='flex justify-center gap-2'>
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
            />
          </div>
        </section>
  )
}
