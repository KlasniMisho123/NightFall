import React from 'react'
import Loading from './Loading'

export default function Hero() {
  return (
    <div className='h-[100vh] px-12 py-4 bg-[#A7C6DA] '>
      <div className='flex justify-between my-4'>
        <div className=''> 
          {/* HERO CARD */}
          {/* ROCKET -!? FLIES AND LEAVES MOTTO? */}
          <span className='border-4 rounded-lg px-4 py-2 inline-block border-blue-500 text-blue-500 font-bold'> Motto </span> 
          <h1></h1>
          <p> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            The passage is attributed to an unknown typesetter in the 15th century who is thought:
          </p>
          <div>
            <button>Contact Us</button>
            <button>About Us</button>
          </div>
          <section>
            Stat DIV?
          </section>
        </div>
        <div> Hero </div>
        {/* <div> ANIMATION</div> */}
      </div>
        <section> OUR SERVICES </section>
    </div>
  )
}
