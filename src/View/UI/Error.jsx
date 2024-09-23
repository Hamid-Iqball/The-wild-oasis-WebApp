import React from 'react'

function Error({color,children}) {
  return (
    <div className={`${color} pt-1`}>{children}</div>
  )
}

export default Error