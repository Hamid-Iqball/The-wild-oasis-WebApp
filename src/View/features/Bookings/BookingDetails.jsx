import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useMoveBack } from '../../../ViewModal/useMoveBack'


function BookingDetails() {

    const moveBack = useMoveBack()
    const getStatus = {
        unconfirmed:'text-blue-600 bg-blue-200',
        'checked-out': 'text-gray-600 bg-gray-200',
        'checked-in' :'text-green-600 bg-green-100'
      }

  return (
    <div className='p-3 '>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex justify-between items-center gap-4'>
            <h1 className='text-3xl text-orange-800 font-[500]'>Booking #X</h1>
            <span className='text-green-700 bg-green-200 text-sm font-semibold px-1 rounded-lg'>Checked In</span>
            </div>
            <button className='flex justify-between items-center gap-1 text-orange-800' onClick={moveBack}> <FaArrowLeft/> Back </button>
        </div>



    <div className='flex justify-end gap-2 items-center mt-4'>
        {/* <button className='py-2 px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out'>Delete Booking</button> */}
        <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200 hover:duration-300 hover:ease-in-out' onClick={moveBack}>Back</button>
    </div>
    </div>
  )
}

export default BookingDetails