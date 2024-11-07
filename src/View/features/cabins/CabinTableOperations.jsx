import React from 'react'
import { useSearchParams } from 'react-router-dom'

// We are using these operations of Filtering,Sorting and the value we are going to store in the URL. Because if we store the value in a useState then we will have to make the operation component the child of that component where we are using this operation component which will surely affect reuseability.
function CabinTableOperations({filterField,options}) { 
const [searchParam , setSearchParams] =useSearchParams()

    // Storing the value in URL with the help of useSearchParams hook. 
    const handleClick = (value)=>{
        searchParam.set(filterField,value)
        setSearchParams(searchParam)
    }

    
  return (

    <div className='flex items-center gap-4'>

      <div className='border-gray-50 bg-white shadow-sm rounded-md p-1 flex gap-1'>

      { options.map((option,index)=> <button
          className='bg-white border-0 hover:bg-[#C2410C] focus:bg-[#C2410C] active:bg-[#C2410C] px-2 py-1 rounded-md text-[14px] transition-all duration-300 ease-in-out hover:text-white focus:text-white'
          onClick={() => handleClick(option.value)}
          key={index}
        >
        {option.label}
        </button>)}

     

        </div>
    </div>
  )
}

export default CabinTableOperations

