import React from 'react'
import Error from '../UI/Error'

function FormItem({label, error, children}) {
  return (
    <div className='grid grid-cols-3 gap-8 max-w-full my-2 mx-4  border-b border-slate-200 px-3 py-1.5  '>
    {label && <label htmlFor={children.props.id} className='text-normal font-[500] text-[#3F4858]'>{label}</label>}
    {children}
    {error && <Error color={`text-red-500`}>{error}</Error>}
  </div>
  )
}

export default FormItem