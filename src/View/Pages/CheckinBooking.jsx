// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useMoveBack } from '../../ViewModal/useMoveBack'
import { useBooking } from '../../ViewModal/Hooks/BookingHooks/useBooking'
import Spinner from '../UI/Spinner'
import BookingDataBox from '../features/Bookings/BookingDataBox'
import { formatCurrency } from '../../Modal/Utils/helper'
import { useCheckIn } from '../../ViewModal/Hooks/BookingHooks/useCheckIn'
import { useSettings } from '../../ViewModal/Hooks/SettingsHooks/useSetting'


function CheckinBooking() {
    const [confirmedPaid , setConfirmedPaid] = useState(false);
    const [addBreakfast  ,setAddBreakfast] = useState(false)
    const {isLoading ,booking } =useBooking();
    const moveBack =useMoveBack();
    const {checkin , isCheckingIn} = useCheckIn()
    const {settings, isLoading:isLoadingSettings} =  useSettings()

    const {
        id: bookingId = '',
        status = '',
        guests = { fullName: '' },
        isPaid = false,
        totalPrice,
        numNights,
        numGuests,
        hasBreakfast,
        
    } = booking || {}; // Fallback to an empty object if booking is undefined

    useEffect(() => {
        setConfirmedPaid(isPaid); // No need for nullish coalescing here since default is already provided
    }, [isPaid]);
    
    
    
    
    if(isLoading || isLoadingSettings) {
      return <Spinner/>
    }
    const optionalBreakfastPrice = settings.breakfastPrice * numNights *numGuests
    
    //Here it is what we are posting data to supabase(backend)
    function handleCheckIn (){ 
      if (!confirmedPaid) return;

      if(addBreakfast){
        checkin({bookingId, breakfast:{
          hasBreakfast:true,
          extrasPrice:optionalBreakfastPrice,
          totalPrice : totalPrice+optionalBreakfastPrice,
        }})

      }else {
        checkin({bookingId, breakfast:{}})
      }
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

      {!hasBreakfast &&  <div className='flex justify-start items-center gap-2 bg-white rounded-md p-2 px-4'>
      <input type="checkbox" 
      checked={addBreakfast}
      onChange={()=>{
        setAddBreakfast((add)=>!add);
        setConfirmedPaid(false);
      }}
        className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
      <label htmlFor="" className='font-semibold '>Want to add breakfast for {formatCurrency(optionalBreakfastPrice)} ? </label>
      </div>}


      <div className='flex justify-start items-center gap-2 bg-white rounded-md p-2 px-4'>
      <input type="checkbox" 
      checked={confirmedPaid} 
      onChange={()=>setConfirmedPaid((confirmed)=>!confirmed)}
      disabled={confirmedPaid}
      className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
      <label htmlFor="" className='font-semibold '>I confirm that {guests.fullName} has paid the total amount of {hasBreakfast ? formatCurrency(totalPrice): `${formatCurrency(totalPrice+optionalBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)}) ` } </label>
      </div>

    
      <div className='flex justify-end gap-2 items-center'>
      <button className='py-2 px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out' disabled={!confirmedPaid} onClick={handleCheckIn} >Check in booking # {bookingId}</button>

      <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200  hover:duration-300 hover:ease-in-out' onClick={moveBack}>Back</button>
      </div>
</div>
  )
}

export default CheckinBooking