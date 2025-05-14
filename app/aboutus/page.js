import MessageBox from '@/components/MessageBox';
import React from 'react'

export default function Aboutus() {
  return (
     <div className='flex flex-col mx-12 gap-4'>
          <MessageBox text="Hey there! Welcome to our Projects page. 🎉" />
          <MessageBox response={true} text="Hi! What kind of projects do you work on?" />
          <MessageBox text="We build modern, user-focused applications—from creative web apps to powerful backend tools." />
          <MessageBox response={true} text="That sounds awesome. Are these live projects or just concepts?" />
          <MessageBox text="Most are live and actively maintained! We love turning ideas into real, usable solutions." />
          <MessageBox response={true} text="Can I explore them here?" />
          <MessageBox text="Absolutely! Scroll down to check them out, and feel free to click into any one to learn more." />
        </div>
  )
}
