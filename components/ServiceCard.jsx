import React from 'react'

export default function ServiceCard() {
  return (
            <div className="flex flex-col bg-white text-black gap-8 p-4 rounded cursor-pointer
                transition-all transition-duration-300 transition-ease-in-out hover:scale-105 flip-card">
                <p className='rotate-y-180  p-4 '>Stand out with a custom-built website tailored to your brand's identity and goals.
                    From design to deployment, we craft unique digital experiences that leave a lasting impression.</p>
                <div className="flex justify-center">
                    <img src="websitesWallpaper.jpg" loading="lazy" className="h-[200px] w-full " alt="" />
                </div>
                <div className="flex flex-col items-center font-bold lg:items-start ">
                    <h3 className="text-lg text-gray-600 text-center lg:text-start text-2xl lg:text-2xl ">Custom Websites</h3>
                    <div className="flex justify-between  my-4 w-full services-item-card-three">
                        <h3 className="text-xl">Bespoke designs built for your brand.</h3>
                    </div>
                </div>
                {/* HOVER ANIMATION, Card flip */}
            </div>
  )
}
