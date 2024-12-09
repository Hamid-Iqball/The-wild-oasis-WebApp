// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useMoveBack } from '../../ViewModal/useMoveBack'
import { useBooking } from '../../ViewModal/Hooks/BookingHooks/useBooking'
import Spinner from '../UI/Spinner'
import BookingDataBox from '../features/Bookings/BookingDataBox'


function CheckinBooking() {
    const [confirmedPaid , setConfirmedPaid] = useState(false);
    const {isLoading ,booking } =useBooking();
    const moveBack =useMoveBack();

    const {
        id: bookingId = '',
        status = '',
        guests = { fullName: '' },
        isPaid = false,
    } = booking || {}; // Fallback to an empty object if booking is undefined

    useEffect(() => {
        setConfirmedPaid(isPaid); // No need for nullish coalescing here since default is already provided
    }, [isPaid]);




    if(isLoading) {
        return <Spinner/>
    }

  return (

    <div className='p-3 grid grid-cols-1  gap-6'>
    <div className='flex justify-between items-center gap-4'>
    <div className='flex justify-between items-center gap-4'>
    <h1 className='text-3xl text-orange-800 font-[500]'>Check in Booking #{bookingId}</h1>
    </div>
    <button className='flex justify-between items-center gap-1 text-orange-800 font-semibold' onClick={moveBack}> <FaArrowLeft/> Back </button>
    </div>

    <div>
    <BookingDataBox booking={booking} status={status} />
    </div>

    <div className='flex justify-start items-center gap-2 bg-white rounded-md p-2 px-4'>
    <input type="checkbox" 
    checked={confirmedPaid} 
    onChange={()=>setConfirmedPaid((confirmed)=>!confirmed)}
    disabled={confirmedPaid}
     className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
    <label htmlFor="" className='font-semibold text-[#5d5f63]'>I confirm that {guests.fullName} has paid the total amount </label>
    </div>
    
    <div className='flex justify-end gap-2 items-center'>
    <button className='py-2 px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out' disabled={!confirmedPaid} >Check in booking # {bookingId}</button>

    <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200  hover:duration-300 hover:ease-in-out' onClick={moveBack}>Back</button>
    </div>
</div>
  )
}

export default CheckinBooking