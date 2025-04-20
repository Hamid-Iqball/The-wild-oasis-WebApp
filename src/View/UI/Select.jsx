import React from 'react'

function Select({options, value, onChange}) {
  return (
    <select 
      value={value} 
      onChange={onChange} 
      className='w-full outline-none dark:bg-Dark-100 dark:border border-customGray-700 active:border-customOrange-700 cursor-pointer p-1.5 sm:p-2 rounded-md text-xs sm:text-sm'
    >
      {options.map((option) => (
        <option value={option.value} key={option.value} className='cursor-pointer'>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select