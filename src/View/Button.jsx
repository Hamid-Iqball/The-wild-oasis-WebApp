import React from 'react'

function Button({handleChange, children}) {
  return (
    <button className="border border-grey-500 py-2 px-4 text-slate-50 bg-orange-700 font-semibold rounded-md min-w-full" onClick={handleChange}>{children}</button>
  )
}

export default Button