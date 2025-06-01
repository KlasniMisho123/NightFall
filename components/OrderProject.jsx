import React from 'react'
import OurVision from './OurVision'

export default function OrderProject() {
  return (
   <div className="flex flex-col md:flex-row justify-between items-center my-8 p-6 rounded-lg shadow-sm">
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="text-xl font-semibold text-gray-800">
          Want to create a website for your Business, Startup, or idea?
        </h4>
        <h5 className="text-md text-gray-500">Let us know — we’ll handle the rest.</h5>
      </div>

    {/* <div className="w-60 h-40 bg-white rounded-xl shadow-md border hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer flex flex-col justify-between p-4">
      <div className="text-2xl">🛠️</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          Website Development
        </h3>
        <p className="text-sm text-gray-500">
          Custom-coded solutions tailored to your vision.
        </p>
      </div>
      <span className="text-sm text-blue-500 font-medium">
        Learn more →
      </span>
      
    </div> */}
    <div className="self-center ">
        <div 
        className="mt-10 relative p-6 rounded-xl shadow-xl max-w-xl mx-auto border border-white/30 text-gray-800 bg-cover bg-center bg-no-repeat backdrop-blur-md
        hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer "
        style={{ backgroundImage: `url('zoe-kravitz-vision.jpg')` }}
        >
            <div className="absolute inset-0 bg-white/70 rounded-xl z-0"></div>

            <div className="relative z-10 text-center">
                <div className="inline-block bg-white text-blue-500 px-4 py-1 rounded-full text-xs shadow-md uppercase tracking-wider font-semibold mb-4">
                <i className="fa-solid fa-plus text-blue-500 mr-1 "></i>Create
                </div>
                <h4 className="text-2xl font-semibold mb-2 text-blue-500">Our Vision <i className="fa-solid fa-eye"></i></h4>
                <p className="text-sm leading-relaxed">
                To grow through meaningful work — designing smart, user-focused experiences that make a real impact.
                </p>
            </div>
        </div>
      </div>
  </div>

  <button className="self-start mt-6 md:mt-0 flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-md hover:bg-blue-200 text-blue-600 font-medium transition">
    <i className="fa-solid fa-plus text-blue-500"></i>
    Create Now
  </button>
</div>


  )
}
