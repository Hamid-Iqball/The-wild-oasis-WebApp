
import { format, isToday } from 'date-fns';
import React from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'
import { CiCircleCheck, CiDollar } from 'react-icons/ci'

import { HiOutlineHomeModern } from 'react-icons/hi2'
import { formatCurrency, formatDistanceFromNow } from '../../../Modal/Utils/helper';

function BookingDataBox({booking,status}) {
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
  unconfirmed:'text-blue-700 bg-blue-100',
  'checked-out': 'text-gray-600 bg-gray-200',
  'checked-in' :'text-green-700 bg-green-200'
}
 
  return (
    <div className='bg-white rounded-md'>

    <header className='flex bg-customOrange-700 text-customOrange-100 p-4 justify-between flex-wrap gap-3 px-5 rounded-t-md'>
        <div className='flex justify-between items-center gap-3'>
        <span><HiOutlineHomeModern size={36}/></span>
        <h1 className='font-semibold text-2xl'>{numNights} nights in cabin {cabinName}</h1> </div>
        <div><p className='text-xl font-semibold'>{format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}</p> </div>
    </header>

    <section className='flex flex-col p-4 gap-3 px-6'>

        <div className='flex justify-start items-center gap-3 text-lg'>
        <p>{countryFlag ? <img src={countryFlag} alt={`Flag of ${country}`}  className='h-3 ml-1 '/>:''}</p>
         <p className='font-semibold text-lg text-customGray-800'>{guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}</p> <span>&bull;</span>
         <p className='text-customGray-600 text-lg'>{email}</p> <span>&bull;</span>
         <p className='text-customGray-600 '>National ID {nationalID}</p>
        </div>



     { observations &&  <div className='flex justify-start items-center gap-3 text-lg'>
        <span> <BiMessageAltDetail color='#c2410c' size={20}/></span>
        <h2 className='font-semibold text-customGray-800'>Observations</h2>
        <p className=''>{observations}</p>
        </div>}


        <div className='flex justify-start items-center gap-3 text-lg'>
        <span><CiCircleCheck size={20}/></span>
        <h2 className='font-semibold text-lg  text-customGray-800'>Breakfast included ?</h2>
        <p className={hasBreakfast? `text-green-600 font-semibold`: 'text-red-600 font-semibold'}>{hasBreakfast? 'YES' : 'NO'}</p>
        </div>


        <div className={` ${getStatus[status]} flex items-center justify-between p-3 px-4 text-customOrange-800 text-xl rounded`} >
        <div className='flex justify-between items-center gap-3'>
        <CiDollar size={28}/>
        <h2>Total Price</h2>
        <span>{formatCurrency(totalPrice) } {hasBreakfast &&  ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`} </span>
        </div>
        <div><p className='font-semibold'>{isPaid?'PAID': 'Will Pay at the property'}</p></div>
        </div>


        <div className='place-self-end mr-2'>
        <span className='text-sm  text-customGray-500'>Booked, {format(new Date(created_at), 'EEE, MMM dd , yyyy, p')}</span>
      </div>


    </section>

        
    </div>
  )
}

export default BookingDataBox