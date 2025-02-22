import React from 'react'
import SmallButton from './SmallButton'

function ConfrmDelete({disabaled , onConfirm, onCloseModal}) {
  return (
    <div className=' p-1 '>
        <div className='p-2 text-start pb-4'>
            <h1 className='text-customOrange-700 dark:text-customOrange-600 my-2 text-3xl font-semibold'>Delete Cabin</h1>
            <p className='text-[#6D7481] text-lg dark:text-customGray-100'>Are you sure you want to delete this cabins permanently? This action cannot be undone.</p>
        </div>
        <div className='flex justify-end items-center gap-3'>
            <SmallButton disabaled={disabaled} onCloseModal={onCloseModal}>Cancel</SmallButton>
            <button className="border border-grey-500 dark:border-none py-2 px-3 text-white bg-customOrange-700 dark:bg-customOrange-600 font-semibold rounded-md " onClick={onConfirm}>Delete</button>
        </div>
    </div>
  )
}

export default ConfrmDelete