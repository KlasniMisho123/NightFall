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
      <section className='flex flex-col gap-8 py-8 mx-[20%] '> 
        <div className='flex justify-center gap-4'>
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
            <img src='b.jpg' alt='Our Story photo' className='object-cover min-h-[300px]' />
          </div>
        </div>

        <div>
          <div>Our Team</div>
        </div>

        <div>
          <div>Our Goals</div>
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
