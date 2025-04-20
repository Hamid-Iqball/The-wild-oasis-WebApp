import { format, isToday } from 'date-fns';
import React from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'
import { CiCircleCheck, CiDollar } from 'react-icons/ci'

import { HiOutlineHomeModern } from 'react-icons/hi2'
import { formatCurrency, formatDistanceFromNow } from '../../../Modal/Utils/helper';

function BookingDataBox({booking, status}) {
const { created_at,
  startDate,
  endDate,
  numNights,
  numGuests,
  cabinPrice,
  extrasPrice,
  totalPrice,
  hasBreakfast,
  observations,
  isPaid,
  guests: {fullName: guestName, email, country, countryFlag, nationalID },
  cabins: {name: cabinName },
} = booking;

const getStatus = {
  unconfirmed: 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/40',
  'checked-out': 'text-gray-600 bg-gray-200 dark:text-gray-300 dark:bg-gray-700/50',
  'checked-in': 'text-green-700 bg-green-200 dark:text-green-300 dark:bg-green-900/40'
}
 
  return (
    <div className='bg-white dark:bg-Dark-100 rounded-md shadow-sm'>

      <header className='flex bg-customOrange-700 dark:bg-customOrange-500 text-customOrange-100 p-3 sm:p-4 justify-between flex-wrap gap-3 px-4 sm:px-5 rounded-t-md'>
        <div className='flex justify-start items-center gap-2 sm:gap-3'>
          <span><HiOutlineHomeModern size={28} className="sm:w-9 sm:h-9" /></span>
          <h1 className='font-semibold text-xl sm:text-2xl'>{numNights} nights in cabin {cabinName}</h1> 
        </div>
        <div className='w-full sm:w-auto'>
          <p className='text-base sm:text-xl font-semibold'>
            {format(new Date(startDate), "EEE, MMM dd yyyy")} 
            ({isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)}) 
            &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p> 
        </div>
      </header>

      <section className='flex flex-col p-3 sm:p-4 gap-3 px-4 sm:px-6 dark:text-customGray-100 dark:bg-Dark-100'>
        <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-3 text-base sm:text-lg'>
          <div className='flex items-center gap-2 dark:text-customGray-100 dark:bg-Dark-100 '>
            {countryFlag && <img src={countryFlag} alt={`Flag of ${country}`} className='h-3 ml-1' />}
            <p className='font-semibold text-customGray-800 dark:text-white'>
              {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
            </p>
          </div>
          <span className='hidden sm:inline'>&bull;</span>
          <p className='text-customGray-600 dark:text-customGray-300'>{email}</p>
          <span className='hidden sm:inline'>&bull;</span>
          <p className='text-customGray-600 dark:text-customGray-300'>National ID {nationalID}</p>
        </div>

        {observations && (
          <div className='flex justify-start items-center gap-2 sm:gap-3 text-base sm:text-lg'>
            <span><BiMessageAltDetail color='#c2410c' size={20} /></span>
            <h2 className='font-semibold text-customGray-800 dark:text-white'>Observations</h2>
            <p className='dark:text-customGray-200'>{observations}</p>
          </div>
        )}

        <div className='flex justify-start items-center gap-2 sm:gap-3 text-base sm:text-lg'>
          <span><CiCircleCheck size={20} /></span>
          <h2 className='font-semibold text-customGray-800 dark:text-white'>Breakfast included?</h2>
          <p className={hasBreakfast ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-red-600 dark:text-red-400 font-semibold'}>
            {hasBreakfast ? 'YES' : 'NO'}
          </p>
        </div>

        <div className={`${getStatus[status]} flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-3 px-3 sm:px-4 text-base sm:text-lg rounded`}>
          <div className='flex justify-start items-center gap-2 sm:gap-3'>
            <CiDollar size={24} className="sm:w-7 sm:h-7" />
            <h2>Total Price</h2>
            <span>
              {formatCurrency(totalPrice)} 
              {hasBreakfast && ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(extrasPrice)} breakfast)`}
            </span>
          </div>
          <div className='mt-2 sm:mt-0'>
            <p className='font-semibold'>{isPaid ? 'PAID' : 'Will Pay at the property'}</p>
          </div>
        </div>

        <div className='place-self-end mr-2'>
          <span className='text-xs sm:text-sm text-customGray-500 dark:text-customGray-400'>
            Booked, {format(new Date(created_at), 'EEE, MMM dd, yyyy, p')}
          </span>
        </div>
      </section>
    </div>
  )
}

export default BookingDataBox