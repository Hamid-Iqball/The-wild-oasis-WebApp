import React from 'react'
import { HiXMark } from 'react-icons/hi2'

function Modal({children,onClose}) {
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-50 bg-slate-50 bg-opacity-20 backdrop-blur transition duration-1000'>

    <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white py-4 px-4 transition ease-in-out duration-[0.5s] rounded-lg shadow-md shadow-neutral-500 w-2/3 border  '>
    <div>
<button className='absolute top-2 right-3 border text-3xl hover:bg-slate-200 rounded-md text-orange-900' onClick={onClose}><HiXMark/></button>
    {children}
    </div>
    </div>
    </div>
  )
}

export default Modal