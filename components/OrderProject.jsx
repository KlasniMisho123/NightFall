import React from 'react'

export default function OrderProject() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 items-center my-16 p-8 rounded-3xl shadow-lg bg-blue-50/90 backdrop-blur-xl border border-gray-200 max-h-[600px]">
      {/* LEFT: Headline, Subtitle, Visual */}
      <div className="flex-shrink-0 flex flex-col gap-6 text-center md:text-left max-w-lg">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Launch Your <span className="text-blue-600">Website</span> with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From bold landing pages to full-scale platforms — we design, build, and deliver high-performing websites that stand out.
          </p>
        </div>

        <div className="self-center ">
            <div 
            className="mt-4 relative p-6 rounded-xl shadow-xl max-w-xl mx-auto border border-white/30 text-gray-800 bg-cover bg-center bg-no-repeat backdrop-blur-md
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


        <button className="self-center flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400/80 transition font-semibold shadow-md cursor-pointer ">
          <i className="fa-solid fa-rocket text-white"></i>
          Get Started Now
        </button>
      </div>


      <div className="flex-shrink-0 flex px-2">
        
        <img
          src="zoe-kravitz-vision.jpg"
          alt="Creative concept"
          className="max-h-[450px] rounded-2xl shadow-xl object-cover -rotate-5 relative z-1 transition-all duration-300 hover:rotate-0 cursor-pointer"
        />

        <img
          src="zoe-kravitz-vision.jpg"
          alt="Creative concept"
          className="max-h-[450px] rounded-2xl shadow-xl object-cover -rotate-5 relative z-1 transition-all duration-300 hover:rotate-0 cursor-pointer"
        />
      </div>
    </div>
  )
}
