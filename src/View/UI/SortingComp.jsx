import React from 'react'
import SortBy from './SortBy'

function SortingComp({sortingOptions}) {
  return (
        <div className= ' shadow-sm rounded-md flex gap-1 text-[14px] border-grey-2 active:border-customOrange-700'>
            <SortBy options={sortingOptions}></SortBy>
          </div>
  )
}

export default SortingComp