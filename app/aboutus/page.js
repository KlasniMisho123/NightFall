import BorderedTitle from '@/components/BorderedTitle';
import MessageBox from '@/components/MessageBox';
import { Exo_2, Inter, Poppins, Urbanist } from 'next/font/google';
import React from 'react'


const exo2 = Exo_2({subsets: ["latin"],weight: ["300", "700"]});
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function Aboutus() {
  return (
    <section className=' min-h-[100vh] bg-nightfall bg-white text-white'>
      {/* Different Bg? Style? about us? */}
      <div className='relative py-8 bg-transparent px-[20%]'>
        <img src="aboutus-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"/>
      {/* <BorderedTitle text="About Us" color="blue-500" posAngle={false} /> */}
        <div className='relative inset-0 z-10  flex flex-col mx-16 min-h-[250px] text-white items-center justify-center gap-4'>
          <h2 className={'text-5xl font-light ' + exo2.className} > About Us </h2>
          <p className='text-gray-400 text-center max-w-[500px] ' > 🌒 We’re more than a design agency — we’re your digital partner. From UX strategy to clean code, Nightfall helps brands transform ideas into powerful online experiences. </p>
        </div>
      </div>
      <section className='flex flex-col gap-12 py-8 mx-[20%] '> 
        <div className='flex justify-center gap-6'>
          <div className='flex flex-col gap-2'>
             <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Little About</p>
             <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className}>Our Story</h2>
             <p className={'text-gray-400 font-light mt-4' + inter.className}> 
              At Nightfall Web, our journey began with a single goal: to turn creative ideas into powerful digital experiences. As a passionate web solutions startup,
              we’re not just building websites — we’re building our future. Founded by a team eager to grow and gain hands-on experience, Nightfall Web is driven by curiosity, 
              innovation, and a deep desire to help businesses shine online. Whether it’s custom websites, UI/UX design, or hosting and maintenance, we approach each project
              as an opportunity to learn, collaborate, and make an impact. We may be at the start of our journey, but our dedication is unwavering. Every line of code, every pixel, 
              and every solution is crafted with care, backed by our commitment to quality and a hunger to grow. Let’s build something great — together.
              </p>
          </div>
          <div>
            <img src='https://i.pinimg.com/736x/ed/c6/2f/edc62fccbbbdee334e00dda45966d963.jpg' alt='Our Story photo' className='object-cover min-w-[400px] max-h-[400px] ' />
          </div>
        </div>
        {/* <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Meet </p>
        <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className}>Our Team</h2> */}
        <div className="flex justify-evenly pt-8 mx-4 gap-4"> 
         <div className="flex flex-row-reverse  justify-center gap-8 pt-8 ">  
            <div className="flex flex-col ">
                <p className="text-white ">A little about </p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold  ">Our <span className='text-blue-500'> Goals </span> <i className="fa-solid fa-bullseye text-white animate-bounce"></i></h2>
              
                <p className="mt-12 text-gray-400 leading-relaxed max-w-[500px] text-sm  md:text-base">
                  Our goal is to empower people with accurate, visually engaging weather insights that help them plan their days with confidence. 
                  Whether it's preparing for a sunny adventure or staying safe during storms, we aim to make weather updates more than just numbers — 
                  we make them personal, practical, and beautiful.
                </p>
              
                <ul className="list-inside mt-6 space-y-2 text-base md:text-lg text-white ">
                  <li className="goal-list flex gap-4 items-center p-2  border-2 border-transparent rounded-lg truncate bg-gray-800 group shadow-sm hover:shadow-xl "> <i className="fa-solid fa-bullseye text-xl transition-all transition-duration-300 text-white group-hover:text-red-500 "></i> 
                    Deliver real-time, easy-to-understand weather forecasts
                    </li>
                  <li className="goal-list flex gap-4 items-center"> <i className="fa-solid fa-bullseye text-xl transition-all transition-duration-300 text-white hover:text-red-500 "></i> 
                    Encourage outdoor activity and preparedness through friendly forecasts
                    </li>
                  <li className="goal-list flex gap-4 items-center"> <i className="fa-solid fa-bullseye text-xl transition-all transition-duration-300 text-white hover:text-red-500 "></i> 
                    Blend technology and design for an intuitive user experience
                  </li>

                </ul>
            </div>
            <img src="https://i.pinimg.com/736x/b3/b3/eb/b3b3eb81e2cca6f50c42a63cdea1afeb.jpg" className="w-[40%] object-cover" alt="team-photo" />
          </div>
        </div>


        <div className='flex flex-col gap-2'>
          <p className={'font-bold text-pink-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className} >Meet </p>
          <h2 className={'text-4xl font-bold text-blue-500 font-bold rounded-r-full border-2 w-fit p-1 pl-2 pr-4 ' + urbanist.className}>Our Team</h2>
          <div>
            <div>Team</div>
          </div>
        </div>

        {/* Strong Sides */}
        {/* Our Vision */}
      </section>

        <div className='flex flex-col min-w-[600px] max-w-[700px] justify-self-center py-12 gap-4'> 
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
