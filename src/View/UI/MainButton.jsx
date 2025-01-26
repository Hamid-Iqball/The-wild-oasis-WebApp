import React from 'react'

function Button({handleChange,isLoading ,children}) {
  return (
    <button className="border border-grey-500 py-3 px-5 text-customGray-50 bg-customOrange-700 font-semibold rounded-md " onClick={handleChange} disabled={isLoading}>{children}</button>
  )
}

export default Button