import React from 'react'
import Loading from './Loading'

export default function Hero() {
  return (
    <div className='h-[100vh] px-12 py-4 bg-green-200 '>
      <div className='flex justify-between my-4'>
        <div> 
          {/* HERO CARD */}
          <p> Motto </p>
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
