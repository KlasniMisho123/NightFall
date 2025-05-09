import React from 'react';

export default function OurAdvantages() {
  return (
    <section className="flex gap-4 border-2 border-blue-700 rounded px-2 py-4 overflow-x-auto">
      <div className="bg-green-400 h-[300px] w-[250px] rounded flex flex-col items-center justify-center text-white">
        <i className="fa-solid fa-crosshairs text-3xl mb-4"></i>
        <h3 className="text-xl font-bold">Title</h3>
      </div>
      <div className="bg-yellow-400 h-[300px] w-[250px] rounded flex items-center justify-center text-xl font-bold text-white">
        2
      </div>
      <div className="bg-red-400 h-[300px] w-[250px] rounded flex items-center justify-center text-xl font-bold text-white">
        3
      </div>
      <div className="bg-blue-400 h-[300px] w-[250px] rounded flex items-center justify-center text-xl font-bold text-white">
        4
      </div>
      <div className="bg-purple-400 h-[300px] w-[250px] rounded flex items-center justify-center text-xl font-bold text-white">
        5
      </div>
    </section>
  );
}
