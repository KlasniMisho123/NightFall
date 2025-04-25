import React from 'react'

export default function StatCard(props) {
  const { color } = props

  return (
        <div className='flex flex-col gap-2 items-center '> 
          <div className={`border-6 rounded w-12 border-${color}`}></div>
          <div className={`font-bold text-4xl text-${color}`}>100+</div>
          <div className={`font-bold text-lg text-${color}/50`}>Years Of Service</div>
          <div className=''> To Monitor Mood </div>
        </div>
  )
}


