'use client'
import React, { useEffect, useState } from 'react'
import MessageBox from './MessageBox'

export default function ChatComponent() {
    const [selectedMessage, setSelectedMessage] = useState([])
    const [selectedMessageActive, setSelectedMessageActive] = useState([])

    function selectMessage(messageIndex) {
      if(selectedMessage.includes(messageIndex)) {
        const updated = selectedMessage.filter(index => index !== messageIndex);
        setSelectedMessage(updated);
        setTimeout(() => {
          setSelectedMessageActive(updated);
        }, 1000 )
      } else {
        const updated = [...selectedMessage,messageIndex];
        setSelectedMessage(updated)
        setSelectedMessageActive(updated)
      }
    }

  return (
    <div className='flex flex-col min-w-[600px] max-w-[700px] justify-self-center py-12 gap-4'> 
        {/* ONCLICK SHOW MORE... ANIMATIONS */}
        {/* Most Asked Question, also asked? that can be activated. several default one on start */}
        <p className='text-red-500'> selectedMessage: {selectedMessage} </p>
        <p className='text-red-500'> selectedMessageActive: {selectedMessageActive} </p>
        <MessageBox text="Hey! What is Nightfall?" clickIndex={1} selectMessage={selectMessage} />
        {selectedMessageActive.includes(1)? 
          <div className={(selectedMessage.includes(1)? " " : " slide-message")}>
            <MessageBox response={true} text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
          </div>
        : null}
        <MessageBox text="Like what kind of solutions?" clickIndex={2} selectMessage={selectMessage} />
        {selectedMessageActive.includes(2)? 
          <MessageBox response={true} text="Custom websites, UI/UX design, hosting, deployment - you name it." />
        : null}
        <MessageBox text="Do you stick around after launch?" clickIndex={3} selectMessage={selectMessage} />
        {selectedMessageActive.includes(3)? 
          <MessageBox response={true} text="Yes - and we also offer ongoing support packages to keep everything running smoothly." />
        : null}
        
    </div>
  )
}
