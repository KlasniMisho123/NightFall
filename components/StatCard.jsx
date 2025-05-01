import { Poppins, Space_Mono } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export default function StatCard(props) {
  const {cardColor, stat, title, titleDec } = props;
// Dinamicly Apply Color ?
  const colorMap = {
    "blue-500": "bg-blue-500 border-blue-500 text-blue-500",
    "purple-500": "bg-purple-500 border-purple-500 text-purple-500",
    "red-500": "bg-red-500 border-red-500 text-red-500",
    "green-500": "bg-green-500 border-green-500 text-green-500"
  };

  const colorClasses = colorMap[cardColor] || "";

  return (
    <div className="flex flex-col gap-4 items-center px-1 py-4 min-w-[100px] totalStatsOne md:px-2 lg:px-4">
      <div className={`px-4 py-1 rounded-lg ${colorClasses.split(" ").find(cls => cls.startsWith("bg-"))} ${colorClasses.split(" ").find(cls => cls.startsWith("border-"))}`}></div>
      <h2 className={`text-4xl italic ${mono.className} ${colorClasses.split(" ").find(cls => cls.startsWith("text-"))}`}>{stat}</h2>
      <h3 className={`text-sm ${poppins.className} ${colorClasses.split(" ").find(cls => cls.startsWith("text-"))}`}>{title}</h3>
      <h4 className="text-xs">{titleDec}</h4>
    </div>
  );
}


