import React from 'react'

export default function MessageBox(props) {
    const {text, response, clickIndex=null, selectMessage} = props

    const handleClick = () => {
    if (clickIndex !== null) {
      selectMessage(clickIndex);
    }
  };

  return (
    <div 
    className={`bg-blue-400/80 text-white p-4 rounded-full shadow-md transition-all transition-duration-300  ${
    response ? 'self-end response-message ' : 'self-start start-message '
    } ${clickIndex !== null ? 'cursor-pointer hover:bg-blue-400 shadow-none' : ''}`}
    onClick={clickIndex !== null ? handleClick : undefined}>
        <p className='text-sm max-w-[450px]'> {text} </p>
    </div>
  )
}
