import React from 'react'

function SmallButton({children,onCloseModal,disabled}) {
  return (
    <button className="border border-grey-500 py-3 px-5 text-orange-700 bg-slate-50 font-semibold rounded-md" variation='secondary' type='reset' onClick={()=>onCloseModal?.()} disabled={disabled}>{children}</button>
  )
}

export default SmallButton