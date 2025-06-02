import React from 'react'
import Image from 'next/image';

export default function ServiceCard(props) {
    const {desc, title, imgSrc, cardParagraph} = props
  return (
            <div className="flex flex-col bg-white text-black gap-8 p-4 rounded cursor-pointer
                transition-all transition-duration-300 transition-ease-in-out hover:scale-110 flip-card max-w-[400px] min-h-[400px] ">
                <p className='rotate-y-180  p-4 '>{desc}</p>
                <div className="flex justify-center">
                    <Image
                        src={imgSrc}
                        alt="Wallpaper"
                        width={800}
                        height={500}
                        loading="lazy"
                        className="w-full h-[200px] object-cover rounded-md"
                    />
                </div>
                <div className="flex flex-col items-center font-bold lg:items-start ">
                    <h3 className="text-lg text-gray-600 text-center lg:text-start lg:text-2xl ">{title}</h3>
                    <div className="flex justify-center my-4 w-full services-item-card-three ">
                        <h3 className="text-base sm:text-xl">{cardParagraph}</h3>
                    </div>
                </div>
            </div>
  )
}
