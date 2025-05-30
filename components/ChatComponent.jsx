'use client'
import React, { useState } from 'react'
import MessageBox from './MessageBox'

export default function ChatComponent() {
    const [selectedMessage, setSelectedMessage] = useState(null)

    function selectMessage(messageIndex) {
      if(messageIndex == selectedMessage ) {
        setSelectedMessage(null)
      } else {
        setSelectedMessage(messageIndex)
      }
    }

  return (
    <div className='flex flex-col min-w-[600px] max-w-[700px] justify-self-center py-12 gap-4'> 
        {/* ONCLICK SHOW MORE... ANIMATIONS */}
        <MessageBox text="Hey! Who are you guys?" clickIndex={1} selectMessage={selectMessage} />
        <MessageBox response={true} text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
        <MessageBox text="Like what kind of solutions?" clickIndex={2} selectMessage={selectMessage} />
        <MessageBox response={true} text="Custom websites, UI/UX design, hosting, deployment - you name it." />
        <MessageBox text="Do you stick around after launch?" clickIndex={3} selectMessage={selectMessage} />
        <MessageBox response={true} text="Yes - and we also offer ongoing support packages to keep everything running smoothly." />
    </div>
  )
}
