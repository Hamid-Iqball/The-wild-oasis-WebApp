import React from 'react'

function SmallButton({children,onCloseModal,disabled}) {
  return (
    <button className="border border-grey-500 py-2 px-3 text-customOrange-700 bg-customGray-50 font-semibold rounded-md" variation='secondary' type='reset' onClick={()=>onCloseModal?.()} disabled={disabled}>{children}</button>
  )
}

export default SmallButton