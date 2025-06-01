import React from 'react'

export default function MessageBox(props) {
    const {text, response, clickIndex=null, selectMessage, selectedMessage} = props

    const handleClick = () => {
    if (clickIndex !== null) {
      selectMessage(clickIndex);
    }
  };

  return (
    <div 
    className={`bg-blue-400/80 text-white p-5  rounded-full shadow-md transition-all duration-300
     ${response ? ' self-end response-message ' : ' self-start '}
     ${clickIndex !== null ? ' cursor-pointer hover:bg-blue-400 shadow-none bg-transparent border-blue-500 border-2 ' : ''}
     ${selectedMessage?.includes(clickIndex)? "bg-blue-400/80 " : " "}
     `}
    onClick={clickIndex !== null ? handleClick : undefined}>
        <p className='text-sm max-w-[500px] mx-2'> {text} {selectedMessage} </p>
    </div>
  )
}
