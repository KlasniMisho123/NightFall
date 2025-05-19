import BorderedTitle from '@/components/BorderedTitle';
import MessageBox from '@/components/MessageBox';
import React from 'react'

export default function Aboutus() {
  return (
    <section className='py-10 px-[20%] min-h-[100vh] bg-nightfall'>
      {/* <BorderedTitle text="About Us" color="purple-500" posAngle/> */}
      <div className='flex flex-col mx-16 max-w-[700px] gap-4'>
        {/* ONCLICK SHOW MORE... ANIMATIONS */}
        <MessageBox response={true} text="Hey! Who are you guys?" />
        <MessageBox text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
        <MessageBox response={true} text="Like what kind of solutions?" />
        <MessageBox text="Custom websites, UI/UX design, hosting, deployment - you name it." />
        <MessageBox response={true} text="Do you stick around after launch?" />
        <MessageBox text="Yes - and we also offer ongoing support packages to keep everything running smoothly." />
      </div>

    </section>
  )
}
