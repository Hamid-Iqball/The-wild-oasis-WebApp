import React from 'react'

function SortBy({options}) {
  return (
 
        <select className='outline-none active:border-[#C2410C]'>
     { options.map((option)=>  <option value={option.value} key={option.value} >
            {option.label}
    </option>)}
    </select>
  
  )
}

export default SortBy