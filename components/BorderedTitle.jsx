import React from 'react'
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function BorderedTitle(props) {
  const { text, color = 'purple-500', posAngle} = props;

  const borderColorClass = `border-${color}/80`;
  const textColorClass = `text-${color}/90`;

  return (
    <span
      className={`border-4 rounded-lg px-4 py-2 my-4 inline-block font-bold text-sm md:text-base ${borderColorClass} ${textColorClass} ${urbanist.className} ` + (posAngle ? "rotate-[5deg] " : "rotate-[-5deg] ")}
    >
      {text}
    </span>
  );
}

