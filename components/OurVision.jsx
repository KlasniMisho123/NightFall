import React from 'react'

export default function OurVision() {
  return (
    <div className="pt-12 self-start ">
        <div 
        className="mt-10 relative p-6 rounded-xl shadow-xl max-w-xl mx-auto border border-white/30 text-gray-800 bg-cover bg-center bg-no-repeat backdrop-blur-md"
        style={{ backgroundImage: `url('zoe-kravitz-vision.jpg')` }}
        >
            <div className="absolute inset-0 bg-white/70 rounded-xl z-0"></div>

            <div className="relative z-10 text-center">
                <div className="inline-block bg-white text-blue-500 px-4 py-1 rounded-full text-xs shadow-md uppercase tracking-wider font-semibold mb-4">
                Vision
                </div>
                <h4 className="text-2xl font-semibold mb-2 text-blue-500">Our Vision <i className="fa-solid fa-eye"></i></h4>
                <p className="text-sm leading-relaxed">
                To grow through meaningful work — designing smart, user-focused experiences that make a real impact.
                </p>
            </div>
        </div>
        </div>
  )
}
