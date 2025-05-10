import React from 'react'
import AdvantagesCard from './AdvantagesCard'
import { Fugaz_One } from 'next/font/google';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const advantageCardArray = [
  {
    title: "Private",
    icon: <i className="fa-solid fa-shield-halved"></i>,
    color: ""
  }, 
  {
    title: "Simple",
    icon: <i className="fa-solid fa-egg"></i>,
    color: ""
  },
  {
    title: "Targeted",
    icon: <i className="fa-solid fa-bullseye"></i>,
    color: ""
  },
  {
    title: "Insightful",
    icon: <i className="fa-solid fa-lightbulb"></i>,
    color: ""
  },
  {
    title: "Engaging",
    icon: <i className="fa-brands fa-sketch"></i>,
    color: ""
  }, 
  {
    title: " User Friendly ",
    icon: <i className="fa-solid fa-users"></i>,
    color: ""
  }, 
]

export default function OurAdvantages() {
  return (
    <div className='py-8 border border-gray-200 flex flex-col justify-center items-center gap-4 min-w-[430px] overflow-hidden '>
        <h1 className={'text-center text-lg lg:text-2xl textGradient text-white ' + fugaz.className}> Our Advantages </h1>
        <div className='flex flex-row py-4 overflow-hidden px-8 '> 
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