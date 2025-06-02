import { Poppins, Space_Mono } from 'next/font/google';
import React, { useEffect } from 'react'
import { colorClassMap } from '@/utils';
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function StatCard(props) {
  const {cardColor, stat, title, titleDec } = props;

  const colorClasses = colorClassMap[cardColor] || "";

  useEffect(()=>{
    console.log("colorClasses: ", colorClasses)
    console.log("colorClassMap: ", colorClassMap)
  },[])

  return (
    <div className="flex flex-col gap-4 items-center px-1 py-4 min-w-[100px] md:px-2 lg:px-4">
      <div className={`px-4 py-1 rounded-lg ${colorClasses.split(" ").find(cls => cls.startsWith("bg-"))} ${colorClasses.split(" ").find(cls => cls.startsWith("border-"))}`}></div>
      {/* <div className={`px-4 py-1 rounded-lg ${colorClasses.split(" ").find(cls => cls.startsWith("bg-"))} ${colorClasses.split(" ").find(cls => cls.startsWith("border-"))}`}></div>
      <h2 className={`text-4xl italic ${mono.className} ${colorClasses.split(" ").find(cls => cls.startsWith("text-"))}`}>{stat}</h2>
      <h3 className={`text-sm ${poppins.className} ${colorClasses.split(" ").find(cls => cls.startsWith("text-"))}`}>{title}</h3>
      <h4 className="text-xs">{titleDec}</h4> */}
    </div>
  );
}


