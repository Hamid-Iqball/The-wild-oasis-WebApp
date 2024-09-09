import React from 'react'

function Button({handleChange, children}) {
  return (
    <button className="border border-grey-500 py-3 px-5 text-slate-50 bg-orange-700 font-semibold rounded-md " onClick={handleChange}>{children}</button>
  )
}

export default Button