import React from 'react'
import AdvantagesCard from './AdvantagesCard'
import { Fugaz_One } from 'next/font/google';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const advantageCardArray = [
  {
    title: "Secure",
    icon: <i className="fa-solid fa-shield-halved"></i>,
    color: "text-blue-600"
  },
  {
    title: "Clean",
    icon: <i className="fa-solid fa-egg"></i>,
    color: "text-gray-600"
  },
  {
    title: "Custom",
    icon: <i className="fa-solid fa-bullseye"></i>,
    color: "text-red-500"
  },
  {
    title: "Creative",
    icon: <i className="fa-solid fa-lightbulb"></i>,
    color: "text-yellow-500"
  },
  {
    title: "Bold",
    icon: <i className="fa-brands fa-sketch"></i>,
    color: "text-indigo-500"
  },
  {
    title: "Trusted",
    icon: <i className="fa-solid fa-users"></i>,
    color: "text-green-600"
  },
  {
    title: "Fast",
    icon: <i className="fa-solid fa-bolt"></i>,
    color: "text-orange-500"
  },
  {
    title: "Modern",
    icon: <i className="fa-solid fa-display"></i>,
    color: "text-cyan-500"
  },
  {
    title: "Responsive",
    icon: <i className="fa-solid fa-mobile-screen-button"></i>,
    color: "text-purple-600"
  },
  {
    title: "SEO",
    icon: <i className="fa-solid fa-chart-line"></i>,
    color: "text-emerald-500"
  }
];



export default function OurAdvantages() {
  return (
    <div className='py-8 border border-gray-200 flex flex-col justify-center items-center gap-4 min-w-[430px] overflow-hidden '>
        <h1 className={'text-center text-lg lg:text-2xl textGradient text-white ' + fugaz.className}> Our Advantages </h1>
        <div className='flex flex-row py-4 overflow-hidden '> 
        {advantageCardArray.map((card, index) => ( 
            <div className='flex-shrink-0 w-1/3' key={index}> 
                <AdvantagesCard
                    title={card.title}
                    icon={card.icon}
                />
            </div>
        ))}
        </div>
    </div>
  )
}