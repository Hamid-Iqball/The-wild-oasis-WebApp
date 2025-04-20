import React from 'react'
import Error from '../UI/Error'

function FormItem({label, error, children}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-full my-2 mx-4 border-b border-customGray-200 dark:border-customGray-700 px-3 py-2'>
      {label && (
        <label 
          htmlFor={children.props.id} 
          className='text-sm sm:text-base font-[500] text-customGray-600 dark:text-customGray-100'
        >
          {label}
        </label>
      )}
      {children}
      {error && <Error color="text-red-500">{error}</Error>}
    </div>
  )
}

export default FormItem
