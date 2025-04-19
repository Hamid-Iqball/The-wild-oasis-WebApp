import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

function Filter({filterField,filteringOptions}) {
    const [searchParams , setSearchParams] =useSearchParams()
    
    // Set the first option as default on component mount
    useEffect(() => {
        if (!searchParams.get(filterField) && filteringOptions.length > 0) {
            searchParams.set(filterField, filteringOptions[0].value);
            setSearchParams(searchParams);
        }
    }, [filterField, filteringOptions, searchParams, setSearchParams]);
    
    // Storing the value in URL with the help of useSearchParams hook. 
    const handleClick = (value)=>{
        searchParams.set(filterField,value || 'all');
       if(searchParams.get('page')) searchParams.set('page',1); //Fixed a very potential bug,
        setSearchParams(searchParams);
       }
  return (
    <div className="border-gray-50 dark:bg-Dark-100 dark:border dark:border-customGray-700 shadow-sm rounded-md p-1 flex flex-wrap gap-1">
    {filteringOptions.map((option, index) => (
      <button
        key={index}
        className={`${
          searchParams.get(filterField) === option.value
            ? 'bg-customOrange-700 text-white'
            : ' text-gray-700 dark:bg-Dark-100 dark:text-gray-200'
        } border-0 hover:text-white hover:bg-customOrange-700 focus:bg-customOrange-700 active:hover:bg-customOrange-700 px-2 py-1 rounded-md text-xs sm:text-[14px] transition-all duration-300 ease-in-out`}
        onClick={() => handleClick(option.value)}
      >
        {option.label}
      </button>
    ))}
  </div>
  )
}

export default Filter