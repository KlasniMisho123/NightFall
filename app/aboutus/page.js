import BorderedTitle from '@/components/BorderedTitle';
import MessageBox from '@/components/MessageBox';
import { Exo_2 } from 'next/font/google';
import React from 'react'


const exo2 = Exo_2({subsets: ["latin"],weight: ["300", "700"]});

export default function Aboutus() {
  return (
    <section className=' min-h-[100vh] bg-nightfall bg-white '>
      {/* Different Bg? Style? about us? */}
      <div className='relative py-8 bg-transparent px-[20%]'>
        <img src="https://xtratheme.com/corporate/wp-content/uploads/sites/57/2018/07/header-banner.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"/>
      {/* <BorderedTitle text="About Us" color="blue-500" posAngle={false} /> */}
        <div className='relative inset-0 z-10  flex flex-col mx-16 min-h-[250px] text-white items-center justify-center gap-4'>
          <h2 className={'text-5xl font-light ' + exo2.className} > About Us </h2>
          <p className='text-gray-400 text-center max-w-[500px] ' > 🌒 We’re more than a design agency — we’re your digital partner. From UX strategy to clean code, Nightfall helps brands transform ideas into powerful online experiences. </p>
        </div>
      </div>

        <div className='flex flex-col max-w-[1000px] justify-self-center py-12 gap-4'> 
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
