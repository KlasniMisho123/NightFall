import React from 'react'

export default function WorkStages() {
  return (
    <section className='flex justify-center gap-8 bg-green-100'>
      <div className='flex flex-col gap-4 bg-blue-100'>
        <div className='my-4'>
          <span> Work Process </span>
          <h2> How It <span> Works ?</span></h2>
          <p>lorem inpsum</p>
        </div>
        <div className='my-4'>
          <div>req1</div>
          <div>req2</div>
          <div>req3</div>
          <div>req4</div>
        </div>
      </div>
      <div className='bg-red-100 h-full'>
        {/* STAGE CARDS */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>
  )
}
