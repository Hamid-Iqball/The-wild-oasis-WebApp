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
    const [confirmedPaid, setConfirmedPaid] = useState(false);
    const [addBreakfast, setAddBreakfast] = useState(false)
    const {isLoading, booking} = useBooking();
    const moveBack = useMoveBack();
    const {checkin, isCheckingIn} = useCheckIn()
    const {settings, isLoading: isLoadingSettings} = useSettings()

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
    const optionalBreakfastPrice = settings.breakfastPrice * numNights * numGuests
    
    //Here it is what we are posting data to supabase(backend)
    function handleCheckIn(){ 
      if (!confirmedPaid) return;

      if(addBreakfast){
        checkin({bookingId, breakfast:{
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        }})
      } else {
        checkin({bookingId, breakfast: {}})
      }
    }

  return (
    <div className='p-3 md:p-6 grid grid-cols-1 gap-4 md:gap-6 dark:bg-Dark-200 dark:text-customGray-50'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        <h1 className='text-2xl sm:text-3xl text-customOrange-800 dark:text-customOrange-400 font-[500]'>
          Check in Booking #{bookingId}
        </h1>
        <button 
          className='flex justify-between items-center gap-1 text-customOrange-800 dark:text-customOrange-500 font-semibold' 
          onClick={moveBack}
        > 
          <FaArrowLeft/> Back 
        </button>
      </div>

      <div>
        <BookingDataBox booking={booking} status={status} />
      </div>

      {!hasBreakfast && (
        <div className='flex justify-start items-center gap-2 dark:bg-Dark-100 rounded-md p-2 px-4 shadow-sm'>
          <input 
            type="checkbox" 
            id="addBreakfast"
            checked={addBreakfast}
            onChange={() => { 
              setAddBreakfast(add => !add);
              setConfirmedPaid(false);
            }}
            className="w-5 h-5 text-orange-600 border-gray-300 dark:border-gray-600 rounded focus:ring-customOrange-500 cursor-pointer" 
          />
          <label htmlFor="addBreakfast" className='font-semibold dark:text-customGray-100'>
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </label>
        </div>
      )}

      <div className='flex justify-start items-center gap-2  dark:bg-Dark-100 rounded-md p-2 px-4 shadow-sm'>
        <input 
          type="checkbox" 
          id="confirmedPaid"
          checked={confirmedPaid} 
          onChange={() => setConfirmedPaid(confirmed => !confirmed)}
          disabled={confirmedPaid}
          className="w-5 h-5 text-customOrange-600 border-gray-300 dark:border-gray-600 dark:bg-Dark-100 dark:text-customGray-100 rounded focus:ring-customOrange-500 cursor-pointer" 
        />
        <label htmlFor="confirmedPaid" className='font-semibold dark:text-customGray-100'>
          I confirm that {guests.fullName} has paid the total amount of{' '}
          {hasBreakfast 
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + optionalBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`
          }
        </label>
      </div>

    
      <div className='flex flex-col-reverse sm:flex-row sm:justify-end gap-3 sm:gap-2 items-center mt-4'>
        <button 
          className='w-full sm:w-auto py-2 px-3 text-orange-800 dark:text-orange-500 font-semibold bg-customGray-50 dark:bg-Dark-100 border dark:border-customGray-700 rounded-lg text-center hover:bg-customGray-200 dark:hover:bg-Dark-50 hover:duration-300 hover:ease-in-out' 
          onClick={moveBack}
        >
          Back
        </button>
        
        <button 
          className='w-full sm:w-auto py-2 px-3 text-white bg-customOrange-700 dark:bg-customOrange-500 rounded-md font-semibold text-center hover:bg-customOrange-800 hover:duration-300 hover:ease-in-out disabled:bg-customGray-300 disabled:text-customGray-500 dark:disabled:bg-customGray-700 dark:disabled:text-customGray-400' 
          disabled={!confirmedPaid || isCheckingIn} 
          onClick={handleCheckIn}
        >
          {isCheckingIn ? 'Processing...' : `Check in booking #${bookingId}`}
        </button>
      </div>
    </div>
  )
}

export default CheckinBooking