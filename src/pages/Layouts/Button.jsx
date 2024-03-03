import React from 'react'

function Button(props) {
  return (
    <div>
      <button className='relative px-5 py-3 overflow-hidden font-bold rounded-full group'>
      
      {/* <button className='relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group'> */}
      <span className='w-32 h-32 rotate-45 translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]'>Hello Boss</span>
        
        {/* <span className='w-32 h-32 absolute left-0 top-0 bg-white opacity-[3%]'>Hello Boss</span> */}
        <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-brightRed opacity-100 group-hover:-translate-x-8'></span>
        <span className='relative w-full text-left text-white transition-colors duration-1000 ease-in-out'>
            {props.title}
        </span>
        <span className='absolute inset-0 border-2 border-white rounded-full'></span>
      </button>
    </div>
  )
}

export default Button
