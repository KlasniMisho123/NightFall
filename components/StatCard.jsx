import React from 'react'

export default function StatCard({color}) {
  return (
        <div className='flex flex-col gap-2 items-center '> 
          <p className='text-red-500'> border-{color}</p>
          <div className={` border-6 rounded w-12 ` + 'border-'+(color) }></div>
          <div className={`font-bold text-4xl text-${color}`}>100+</div>
          <div className={`font-bold text-lg text-${color}`}>Years Of Service</div>
          <div className=''> To Monitor Mood </div>
        </div>
  )
}


