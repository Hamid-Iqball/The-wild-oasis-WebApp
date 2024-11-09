import React from 'react'

function Select({options , value ,onChange}) {

  return (
    <select value={value} onChange={onChange} className='outline-none active:border-[#C2410C] cursor-pointer p-2 rounded-md' >
    { options.map((option)=>( <option value={option.value} key={option.value} className='cursor-pointer' >
           {option.label}
   </option>))}
   </select>
 
  )
}

export default Select