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
        {/* <p className='text-red-500'> selectedMessage: {selectedMessage} </p>
        <p className='text-red-500'> selectedMessageActive: {selectedMessageActive} </p> */}
        
        <MessageBox text="Hey! What is Nightfall?" />
        <MessageBox response={true} text={ 
          <>
            NightfallWeb is a junior digital studio. We offer a range of{' '}
            <span className=" font-bold text-base bg-purple-500 px-2 pb-1 rounded-full ">services</span> to help individuals and small businesses bring their ideas online.
            Focused on gaining real-world experience, we deliver modern, tailored solutions from design to deployment.
          </>
    }
        />
        <MessageBox text="What Services?" />
        <MessageBox response={true} text="
          Custom websites built with clean, scalable code
          User-first UI/UX design that makes your product shine
          Hosting & deployment with seamless handoff or managed delivery
          Ongoing support — optional, but always available if needed"
        />
        <div className='start-message self-start ' >
          <MessageBox text="Hey! What is Nightfall?" clickIndex={1} selectMessage={selectMessage} />
        </div>
        {selectedMessageActive.includes(1)? 
          <div className={"self-end " + (selectedMessage.includes(1)? " " : " slide-message ")}>
            <MessageBox response={true} text="Hey! We’re a fresh team offering smart web solutions built around your needs." />
          </div>
        : null}
        <div className='start-message self-start '>
          <MessageBox text="Like what kind of solutions?" clickIndex={2} selectMessage={selectMessage} />
        </div>
        {selectedMessageActive.includes(2)? 
          <div className={"self-end " + (selectedMessage.includes(2)? " " : " slide-message ")}>
            <MessageBox response={true} text="Custom websites, UI/UX design, hosting, deployment - you name it." />
          </div>
        : null}
        <div className='start-message self-start '>
          <MessageBox text="Do you stick around after launch?" clickIndex={3} selectMessage={selectMessage} />
        </div>
        {selectedMessageActive.includes(3)? 
          <div className={"self-end " + (selectedMessage.includes(3)? " " : " slide-message ")}>
            <MessageBox response={true} text="Yes - and we also offer ongoing support packages to keep everything running smoothly." />
          </div>
        : null}
        
    </div>
  )
}
