/* eslint-disable no-unused-vars */
import React from 'react'
import Bookings from '../../Pages/Bookings'
import { format, isToday } from 'date-fns'
import { formatCurrency, formatDistanceFromNow } from '../../../Modal/Utils/helper'
import { HiDotsVertical } from 'react-icons/hi'
import { Dropdown } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'

function BookingsRow({booking}) {
  const {
id:bookinId,
created_at,
startDate,
endDate,
numNights,
numGuests,
totalPrice,
status,
guests:{fullName:guestName ,email},
cabins:{name:cabinName}
  } = booking

  const getStatus = {
    unconfirmed:'text-blue-700 bg-blue-100',
    'checked out': 'text-gray-700 bg-gray-100',
    'checked in' :'text-green-700 bg-green-100'
  }



  console.log(booking)
  return (
    <div className='grid grid-cols-[0.8fr,2fr,3fr,1.4fr,1fr,1fr] place-items-center justify-items-start gap-8 text-sm  bg-white border-b-[1px] border-[#DDDDDD] rounded-xm p-2'>
        <div>{cabinName}</div>
        <div className='flex flex-col items-start justify-start gap-1'>
          <span>
          {guestName}
          </span>
          <span className='text-xs text-gray-500'>
            {email}
          </span>
          </div>

      <div className='flex flex-col items-start justify-start gap-1'>
        <span>{isToday(new Date(startDate))?'Today' : formatDistanceFromNow(startDate)}
          &rarr; {numNights} night stay
        </span>
        <span className='text-xs text-gray-500'>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;
          {format(new Date(endDate), "MMM ddd yyyy")}
        </span>
        </div>
        
        <div className={`${getStatus[status]} rounded-full px-2 py-1 text-xs font-[500]`}>{status.toUpperCase()}</div>
        <div>{formatCurrency(totalPrice)}</div>
        <div className='flex justify-end items-end'> 
         <Dropdown>
          <Dropdown.Toggle>
            <BsThreeDotsVertical/>
          </Dropdown.Toggle>
          <Dropdown.Menu className='flex justify-between items-center flex-col gap-2' >
            <Dropdown.Item>
              See Details
            </Dropdown.Item>
            <Dropdown.Item>
             Check in
            </Dropdown.Item>
            <Dropdown.Item>
              Delete booking
            </Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
           </div>
    </div>
  )
}

export default BookingsRow