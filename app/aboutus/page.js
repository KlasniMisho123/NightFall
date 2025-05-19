import BorderedTitle from '@/components/BorderedTitle';
import MessageBox from '@/components/MessageBox';
import React from 'react'

export default function Aboutus() {
  return (
    <section className='my-10 mx-[20%] min-h-[100vh]'>
      <BorderedTitle text="About Us" color="purple-500" posAngle/>
      <div className='flex mx-16 max-w-[700px]  gap-8 justify-center '>
        {/* ONCLICK SHOW MORE... ANIMATIONS */}
        <div className='flex flex-col gap-4'>
          <MessageBox text="Hey there! Want to know who we are?" />
          <MessageBox response={true} text="Sure, hit me with it." />
          <MessageBox text="We're a small team building thoughtful, creative digital tools." />
          <MessageBox response={true} text="Nice. What's your focus?" />
          <MessageBox text="Simple—design with purpose, and code with care. 🚀" />
        </div>
      </div>

    </section>
  )
}
