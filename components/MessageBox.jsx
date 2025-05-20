import React from 'react'

export default function MessageBox(props) {
    const {text, response} = props
  return (
    <div className={`bg-blue-400/80 text-white p-4 rounded-full ` + (response? "self-start" : "self-end")}> 
    {/* Response/ Start Convo Animations (response Scales?from bot-left-> top-right) (startConvo slides/grows left -> right) */}
    {/* bg-[#94B4C1] -grayish */}
    {/* orange-500 */}
    {/* blue-500/400 */}
        <p className='text-sm max-w-[450px]'> {text} </p>
    </div>
  )
}
