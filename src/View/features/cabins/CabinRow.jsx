import React from 'react'

function CabinRow() {
  return (
    <div className='grid grid-cols-[0.6fr,1fr,1fr,1fr,1fr,1fr] p-3 gap-8 text-sm font-[500] bg-white'>

       <div>Cabin</div>
       <div className='pl-4'>001</div>
       <div className='text-start font-normal'>Fits Up to 4 people</div>
       <div className='text-[0.9rem]' >$400.00</div>
       <div className='text-[#52948E] pl-4'>$50.00</div>
       <div className='text-end'>dots</div>
    </div>
  )
}

export default CabinRow