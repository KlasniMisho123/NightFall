import React, { useEffect } from 'react'

export default function MessageBox(props) {
    const {text, response, clickIndex=null, selectMessage, selectedMessage} = props


    const handleClick = () => {
      if (clickIndex !== null) {
        selectMessage(clickIndex);
      }
    };

  return (
    <div 
      className={`
        p-5 text-white rounded-full transition-all duration-300 ease-in-out
        ${response ? 'self-end response-message' : 'self-start'}
        ${clickIndex !== null 
          ? 'cursor-pointer border-2 border-blue-500 bg-transparent hover:bg-blue-400/40 shadow-none' 
          : 'bg-blue-400/80 shadow-md'}
        ${selectedMessage?.includes(clickIndex) 
          ? '!bg-blue-400/30 ring-2 ring-blue-300' 
          : ''}
      `}
      onClick={clickIndex !== null ? handleClick : undefined}
    >
      <p className="text-sm max-w-[500px] mx-2">{text}</p>
    </div>
  )
}
