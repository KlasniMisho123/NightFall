'use client'
import React, { useState } from 'react'
import MessageBox from './MessageBox'

export default function ChatComponent() {
    const [selectedMessage, setSelectedMessage] = useState([])

    function selectMessage(messageIndex) {
      if(selectedMessage.includes(messageIndex)) {
        setSelectedMessage(selectedMessage.filter(index => index !== messageIndex));
      } else {
        setSelectedMessage([...selectedMessage,messageIndex])
      }
    }

  return (
    <div className='flex flex-col min-w-[600px] max-w-[700px] justify-self-center py-12 gap-4'> 
        {/* ONCLICK SHOW MORE... ANIMATIONS */}
        <p className='text-red-500'> selectedMessage: {selectedMessage} </p>
        <MessageBox text="Hey! What is Nightfall?" clickIndex={1} selectMessage={selectMessage} />
        {selectedMessage.includes(1)? 
          <MessageBox response={true} text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
        : null}
        <MessageBox text="Like what kind of solutions?" clickIndex={2} selectMessage={selectMessage} />
        {selectedMessage.includes(2)? 
          <MessageBox response={true} text="Custom websites, UI/UX design, hosting, deployment - you name it." />
        : null}
        <MessageBox text="Do you stick around after launch?" clickIndex={3} selectMessage={selectMessage} />
        {selectedMessage.includes(3)? 
          <MessageBox response={true} text="Yes - and we also offer ongoing support packages to keep everything running smoothly." />
        : null}
        
    </div>
  )
}
