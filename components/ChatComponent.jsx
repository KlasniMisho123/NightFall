import React from 'react'
import MessageBox from './MessageBox'

export default function ChatComponent() {
  return (
    <div className='flex flex-col min-w-[600px] max-w-[700px] justify-self-center py-12 gap-4'> 
            {/* ONCLICK SHOW MORE... ANIMATIONS */}
        <MessageBox response={true} text="Hey! Who are you guys?" />
        <MessageBox text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
        <MessageBox response={true} text="Like what kind of solutions?" />
        <MessageBox text="Custom websites, UI/UX design, hosting, deployment - you name it." />
        <MessageBox response={true} text="Do you stick around after launch?" />
        <MessageBox text="Yes - and we also offer ongoing support packages to keep everything running smoothly." />
    </div>
  )
}
