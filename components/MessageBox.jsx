import React from 'react'

export default function MessageBox(props) {
    const {start, text} = props
  return (
    <div className='bg-blue-500 text-white p-4 rounded-full self-start '> 
        <p> {text} </p>
    </div>
  )
}
