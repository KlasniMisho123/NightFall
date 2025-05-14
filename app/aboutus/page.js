import MessageBox from '@/components/MessageBox';
import React from 'react'

export default function Aboutus() {
  return (
    <section className='my-10 mx-[20%] min-h-[100vh]'>
      <div className='flex flex-col mx-12 gap-4'>
        {/* ONCLICK SHOW MORE... ANIMATIONS */}
        <MessageBox text="Hey there! Want to know who we are?" />
        <MessageBox response={true} text="Sure, hit me with it." />
        <MessageBox text="We're a small team building thoughtful, creative digital tools." />
        <MessageBox response={true} text="Nice. What's your focus?" />
        <MessageBox text="Simple—design with purpose, and code with care. 🚀" />
      </div>

    </section>
  )
}
