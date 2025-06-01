import React from 'react'

export default function OrderProject() {
  return (


    <div className="flex flex-col md:flex-row justify-between gap-10 items-center my-16 p-8 rounded-3xl shadow-lg bg-white/70 backdrop-blur-xl border border-gray-200">
      {/* LEFT: Headline, Subtitle, Visual */}
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left max-w-lg">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Launch Your <span className="text-blue-600">Website</span> with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From bold landing pages to full-scale platforms — we design, build, and deliver high-performing websites that stand out.
          </p>
        </div>

        <img
          src="zoe-kravitz-vision.jpg"
          alt="Creative concept"
          className="w-48 md:w-64 rounded-xl shadow-md mx-auto md:mx-0"
        />
      </div>

      {/* RIGHT: Premium Card Offer */}
      <div className="flex-1 flex flex-col items-center gap-6">
        <div
          className="relative p-8 rounded-2xl shadow-2xl border border-blue-100 bg-gradient-to-br from-white via-white/80 to-blue-50 max-w-md w-full text-center backdrop-blur-md hover:shadow-blue-200 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-white/50 rounded-2xl z-0 backdrop-blur-sm"></div>

          <div className="relative z-10">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 shadow-sm">
              Web Design Package
            </div>
            <h4 className="text-2xl font-bold mb-2 text-blue-600">
              Everything You Need to Get Online
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              ✔️ Custom Design<br />
              ✔️ Mobile-First Approach<br />
              ✔️ SEO-Ready<br />
              ✔️ Launch Support
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md">
          <i className="fa-solid fa-rocket text-white"></i>
          Get Started Now
        </button>
      </div>
    </div>


  )
}
