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
        p-3 sm:p-3 md:p-4 lg:p-5 text-white rounded-full transition-all duration-300 ease-in-out
        ${response ? 'ml-5 sm:ml-10 md:ml-30 lg:ml-40 self-end response-message' : 'self-start'}
        ${clickIndex !== null 
          ? 'cursor-pointer border-2 border-blue-500 bg-transparent hover:bg-blue-400/40 shadow-none' 
          : 'bg-blue-400/80 shadow-md'}
        ${selectedMessage?.includes(clickIndex) 
          ? '!bg-blue-400/30  ' 
          : ''}
      `}
      onClick={clickIndex !== null ? handleClick : undefined}
    >
      <p className="text-xs md:text-sm  max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-2 leading-snug break-words text-elipsis line-clamp-4 ">
  {text}
</p>

    </div>
  )
}
