'use client'
import React from 'react'
import { Exo_2, Urbanist } from 'next/font/google';
import Link from 'next/link';
import { colorClassMap } from '@/utils';
import Reveal from './utils/Reveal';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const exo2 = Exo_2({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectCard(props) {
  const {
    year,
    projectName,
    title,
    webLink,
    projectDesc,
    projectSecondaryColor,
    client,
    time,
    service,
    imgSrc,
    animationIndex
  } = props;

  const classes = colorClassMap[projectSecondaryColor] || {
    border: 'hover:border-white',
    text: 'text-white',
    decoration: 'decoration-white',
  };

  return (
    <Reveal animationIndex={animationIndex} noRepeat={false}>
      <div
        className={`bg-transparent flex flex-col gap-6 sm:gap-5 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-transparent transition-all duration-300 ${classes.border}`}
      >
        <Link
          href={webLink}
          className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 leading-snug max-w-full ${urbanist.className}`}
        >
          <span
            className={`${classes.text} font-bold px-2 py-1 rounded-r-full border-2 mr-1 ${urbanist.className}`}
          >
            {projectName}
          </span>
          -
          <span
            className={`ml-1 transition-all duration-300 hover:underline ${classes.decoration}`}
          >
            {title}
          </span>
        </Link>

        <p className={`my-2 sm:my-4 line-clamp-5 text-sm sm:text-base text-gray-400 ${exo2.className}`}>
          <span className={`${classes.text} text-base font-bold mr-1 ${urbanist.className}`}>
            {projectName}
          </span>
          {projectDesc}
        </p>

        <div className={`text-3xl sm:text-4xl text-white font-bold ${urbanist.className}`}>
          {year}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm ${exo2.className}`}>
          <div className="flex flex-col gap-1">
            <div className="text-white font-medium">Client</div>
            <div className="text-gray-500">{client}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-white font-medium">Time Duration</div>
            <div className="text-gray-500">{time}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-white font-medium">Service</div>
            <div className="text-gray-500">{service}</div>
          </div>
        </div>

        <Link
          href={webLink}
          className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src={imgSrc}
            alt="Project Image"
            className="object-cover w-full h-auto max-h-[250px] sm:max-h-[300px] rounded-xl"
          />
        </Link>
      </div>
    </Reveal>
  );
}
