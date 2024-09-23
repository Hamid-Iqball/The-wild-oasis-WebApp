import React from 'react'

function Modal({children}) {
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-50 bg-slate-50 bg-opacity-20 backdrop-blur'>

    <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white py-4 px-4 transition-al ease-in-out rounded-lg shadow-md shadow-neutral-500 w-2/3 '>{children}</div>
    </div>
  )
}

export default Modal