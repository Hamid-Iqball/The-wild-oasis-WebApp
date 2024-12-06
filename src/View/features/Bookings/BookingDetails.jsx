import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useMoveBack } from '../../../ViewModal/useMoveBack'
import { useBooking } from '../../../ViewModal/Hooks/BookingHooks/useBooking'
import Spinner from '../../UI/Spinner'
import BookingDataBox from './BookingDataBox'
import { useNavigate } from 'react-router-dom'


function BookingDetails() {

    const {isLoading , booking , error} = useBooking()
    const moveBack = useMoveBack()
    const navigate =   useNavigate()
    
    if(isLoading){
        return <Spinner/>
    }
    
    const {status,id:bookingId} = booking

 
    const getStatus = {
        unconfirmed:'text-blue-600 bg-blue-200',
        'checked-out': 'text-gray-600 bg-gray-200',
        'checked-in' :'text-green-600 bg-green-200'
      }

  return (
    <div className='p-3 grid grid-cols-1  gap-6'>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex justify-between items-center gap-4'>
            <h1 className='text-3xl text-orange-800 font-[500]'>Booking #{bookingId}</h1>
            <span className={`${getStatus[status]}  text-[12px] font-semibold px-1  rounded-lg`} >{status.toUpperCase()}</span>
            </div>
            <button className='flex justify-between items-center gap-1 text-orange-800 font-semibold' onClick={moveBack}> <FaArrowLeft/> Back </button>
        </div>

        <div >
            <BookingDataBox booking={booking} status={status} />
        </div>

    <div className='flex justify-end gap-2 items-center'>
        <button className='py-2 px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out' onClick={()=>navigate(`/checkin/${bookingId}`)}>Check in</button>
        <button className='py-2 px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out'>Delete Booking</button>
        <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200  hover:duration-300 hover:ease-in-out' onClick={moveBack}>Back</button>
    </div>
    </div>
  )
}

export default BookingDetails