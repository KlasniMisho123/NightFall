import BorderedTitle from '@/components/BorderedTitle';
import MessageBox from '@/components/MessageBox';
import React from 'react'

export default function Aboutus() {
  return (
    <section className=' min-h-[100vh] bg-nightfall bg-white '>
      {/* Different Bg? Style? about us? */}
      <div className='relative py-8 bg-transparent px-[20%]'>
        <img src="https://xtratheme.com/corporate/wp-content/uploads/sites/57/2018/07/header-banner.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"/>
      {/* <BorderedTitle text="About Us" color="blue-500" posAngle={false} /> */}
        <div className='relative inset-0 z-10  flex flex-col mx-16 min-h-[250px] max-w-[700px] gap-4 text-white items-center justify-center gap-8'>
          {/* ONCLICK SHOW MORE... ANIMATIONS */}
          {/* <MessageBox response={true} text="Hey! Who are you guys?" />
          <MessageBox text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
          <MessageBox response={true} text="Like what kind of solutions?" />
          <MessageBox text="Custom websites, UI/UX design, hosting, deployment - you name it." />
          <MessageBox response={true} text="Do you stick around after launch?" />
          <MessageBox text="Yes - and we also offer ongoing support packages to keep everything running smoothly." /> */}
          <h2 className=''> About Us </h2>
          <p> Desc </p>
        </div>
      </div>

    </section>
  )
}
