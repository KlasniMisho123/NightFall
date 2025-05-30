import React from 'react'

export default function MessageBox(props) {
    const {text, response} = props
  return (
    <div className={`bg-blue-400/80 text-white p-4 rounded-full shadow-md ` + (response? "self-end" : "self-start")}> 
        <p className='text-sm max-w-[450px]'> {text} </p>
    </div>
  )
}
