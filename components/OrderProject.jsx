import React from 'react'

export default function OrderProject() {
  return (
   <div className="flex flex-col md:flex-row justify-between gap-8 items-center my-12 p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-lg">
  {/* LEFT: Title + Subtitle + Visual */}
  <div className="flex-1 flex flex-col gap-4 max-w-md text-center md:text-left">
    <div>
      <h2 className="text-3xl font-bold text-gray-800 leading-tight">
        Let’s Build Your <span className="text-blue-500">Website</span>
      </h2>
      <p className="text-md text-gray-600 mt-2">
        Whether for business, a startup, or something new — we’ll bring your vision online.
      </p>
    </div>

    {/* Visual element (image or icon) */}
    <div className="mt-6">
      <img
        src="your-illustration.png"
        alt="Visual web concept"
        className="w-40 md:w-56 mx-auto md:mx-0"
      />
    </div>
  </div>

  {/* RIGHT: Offer card */}
  <div className="flex-1 flex flex-col items-center gap-4">
    <div
      className="relative w-full max-w-sm rounded-xl shadow-xl border border-white/30 bg-cover bg-center bg-no-repeat p-6 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
      style={{ backgroundImage: `url('zoe-kravitz-vision.jpg')` }}
    >
      <div className="absolute inset-0 bg-white/70 rounded-xl z-0"></div>

      <div className="relative z-10 text-center">
        <div className="inline-block bg-white text-blue-500 px-4 py-1 rounded-full text-xs shadow-md uppercase tracking-wider font-semibold mb-4">
          <i className="fa-solid fa-plus mr-1"></i>
          Create
        </div>
        <h4 className="text-2xl font-semibold mb-2 text-blue-500">
          Our Vision <i className="fa-solid fa-eye"></i>
        </h4>
        <p className="text-sm leading-relaxed text-gray-700">
          To grow through meaningful work — designing smart, user-focused
          experiences that make a real impact.
        </p>
      </div>
    </div>

    <button className="mt-4 flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-md hover:bg-blue-200 text-blue-600 font-medium transition cursor-pointer">
      <i className="fa-solid fa-plus text-blue-500"></i>
      Create Now
    </button>
  </div>
</div>

  )
}
