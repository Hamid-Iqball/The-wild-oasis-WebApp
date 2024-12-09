/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Bookings from '../../Pages/Bookings'
import { format, isToday } from 'date-fns'
import { formatCurrency, formatDistanceFromNow } from '../../../Modal/Utils/helper'
import { HiDotsVertical } from 'react-icons/hi'
import { Button, Dropdown } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {Provider} from "../../UI/provider"
import { ChakraProvider, MenuCheckboxItem, MenuContent, MenuItem, MenuItemGroup, MenuRadioItem, MenuRadioItemGroup, MenuRoot, MenuSeparator, MenuTrigger, MenuTriggerItem } from '@chakra-ui/react'
import { FaEye, FaTrash } from 'react-icons/fa'
import { FaTentArrowsDown } from 'react-icons/fa6'
import {  useNavigate } from 'react-router-dom'

// import "bootstrap/dist/css/bootstrap.min.css";
function BookingsRow({booking}) {
  
 const  navigate  = useNavigate()
const {
id:bookingId,
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
    unconfirmed:'text-blue-600 bg-blue-100',
    'checked-out': 'text-gray-600 bg-gray-100',
    'checked-in' :'text-green-600 bg-green-100'
  }



  // console.log(booking)
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
        
        <div className={`${getStatus[status]} rounded-full px-2 py-1 text-xs  font-[600]`}>{status.toUpperCase()}</div>
        <div>{formatCurrency(totalPrice)}</div>
        <div className='relative flex justify-end items-end'>


        <Dropdown >
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='dropdown-btn btn-sm' style={{
          backgroundColor:'#FFF',
          // color:'#9a3412',
          color:'#212529',
          border:'1px solid #212529',
          borderRadius:'5px'

        }}>
              Action
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item > <button className='flex justify-start items-center gap-3' onClick={()=>{navigate(`/bookings/${bookingId}`);}}>
                 <FaEye style={{color:'#9a3412'}}/> See Details</button></Dropdown.Item>
             {status==='unconfirmed' && <Dropdown.Item> <button className='flex justify-start items-center gap-3' onClick={()=>navigate(`/checkin/${bookingId}`)} ><FaTentArrowsDown style={{color:'#047857'}}/>Check In</button></Dropdown.Item>}
              <Dropdown.Item><button className='flex justify-start items-center gap-3'> <FaTrash style={{color:'red'}}/>  Delete</button> </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default BookingsRow