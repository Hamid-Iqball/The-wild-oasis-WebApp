import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SortBy from './SortBy'


// We are using these operations of Filtering,Sorting and the value we are going to store in the URL. Because if we store the value in a useState then we will have to make the operation component the child of that component where we are using this operation component which will surely affect reuseability.
function FiltersAndSortingOperations({filterField,filteringOptions , sortingOptions }) { 
const [searchParams , setSearchParams] =useSearchParams()

    // Storing the value in URL with the help of useSearchParams hook. 
    const handleClick = (value)=>{
     searchParams.set(filterField,value || 'all');
    if(searchParams.get('page')) searchParams.set('page',1); //Fixed a very potential bug,
     setSearchParams(searchParams);
    }

    
  return (

    <div className='flex items-center gap-4'>

      <div className='border-gray-50 bg-white shadow-sm rounded-md p-1 flex gap-1'>
      { filteringOptions.map((option,index)=>
       <button
       className={`${
        searchParams.get(filterField) === option.value
          ? 'bg-[#C2410C] text-white'
          : 'bg-white text-gray-700'
         } border-0 hover:bg-[#C2410C]  focus:bg-[#C2410C] active:bg-[#C2410C] px-2 py-1 rounded-md text-[14px] transition-all duration-300 ease-in-out`}
          onClick={() => handleClick(option.value)}
          key={index}>
        {option.label}
        </button>
      )}
        </div>


      <div className= 'bg-white shadow-sm rounded-md flex gap-1 text-[14px] border-grey-2 active:border-[#C2410C]'>
        <SortBy options={sortingOptions}></SortBy>
      </div>
    </div>
  )
}


export default FiltersAndSortingOperations

