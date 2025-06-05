'use client'
import React, { useState } from 'react'
import MessageBox from './MessageBox'
import { Urbanist } from 'next/font/google'
import Reveal from './utils/Reveal';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

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
    <div className='flex flex-col min-w-[600px] max-w-[700px] justify-self-center py-12 pb-[200px] gap-4'>
      <Reveal animationIndex={1}>
        <MessageBox text="Hey! What is Nightfall?" />
      </Reveal> 
      <Reveal animationIndex={2} >
        <MessageBox response={true} text={ 
          <>
            NightfallWeb is a junior digital studio. We offer a range of{' '}
            <span className=" font-semibold text-base bg-purple-500 px-2 pb-1 rounded-full ">services</span> to help individuals and small businesses bring their ideas online.
            Focused on gaining real-world experience, we deliver modern, tailored solutions from design to deployment.
          </>
        }
        />
      </Reveal>
        
        <Reveal animationIndex={1} > 
          <MessageBox text="What Services?" />
        </Reveal>

        <Reveal animationIndex={2}>
          <MessageBox response={true} text={
            <>
                We offer few core services:
                <br />🛠️ <strong>Custom Websites</strong> – Built to fit your brand and goals.
                <br />🎨 <strong>UI/UX Design</strong> – Clean, user-focused interfaces.
                
            </>}
          />
        </Reveal>

        <Reveal animationIndex={2}>
          <MessageBox  response={true} text={
            <>   
              We also offer:
              <br />🚀 <strong>Deployment & Hosting</strong> – We take your site live, start to finish.
              <br />🧩 <strong>Ongoing Support</strong> – Optional help after launch. 
            </>}
            />
        </Reveal>
        
        <Reveal animationIndex={1} > 
          <div className='start-message self-start ' >
            <MessageBox text="Who is Nightfall for?" selectedMessage={selectedMessage} clickIndex={1} selectMessage={selectMessage} />
          </div>
        </Reveal>
        {selectedMessageActive.includes(1)? 
          <div className={"self-end " + (selectedMessage.includes(1)? " " : " slide-message ")}>
            <MessageBox response={true} text="We work best with individuals, early-stage startups, and small teams who value clarity, 
            collaboration, and thoughtful design — especially those just starting out." />
          </div>
        : null}
        <Reveal animationIndex={1} > 
          <div className='start-message self-start '>
            <MessageBox text="Are your services beginner-friendly?" selectedMessage={selectedMessage} clickIndex={2} selectMessage={selectMessage} />
          </div>
        </Reveal>
        {selectedMessageActive.includes(2)? 
          <div className={"self-end " + (selectedMessage.includes(2)? " " : " slide-message ")}>
            <MessageBox response={true}  text="Yes! We keep things clear and collaborative. Whether you're launching your first site or refining an idea,
             we walk you through each step — no jargon, no pressure." />
          </div>
        : null}
        <Reveal animationIndex={1} > 
          <div className='start-message self-start '>
            <MessageBox text="Why choose a junior studio like Nightfall?" selectedMessage={selectedMessage} clickIndex={3} selectMessage={selectMessage} />
          </div>
        </Reveal>
        {selectedMessageActive.includes(3)? 
          <div className={"self-end " + (selectedMessage.includes(3)? " " : " slide-message ")}>
            <MessageBox response={true}  text="We’re hungry to build, learn, and prove ourselves — which means more care, more attention, and often a more flexible price.
             Every project matters deeply to us." />
          </div>
        : null}
        
    </div>
  )
}
