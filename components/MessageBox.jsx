import React from 'react'

export default function MessageBox(props) {
    const {text, response} = props
  return (
    <div className={`bg-blue-500 text-white p-4 rounded-full ` + (response? "self-start" : "self-end")}> 
        <p className='text-sm max-w-[450px]'> {text} </p>
    </div>
  )
}
