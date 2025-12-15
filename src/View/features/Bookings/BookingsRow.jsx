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
import { CiInboxOut } from 'react-icons/ci'
import { IoArrowRedoCircleOutline, IoArrowUndoCircleOutline } from 'react-icons/io5'
import { HiArrowUpOnSquare } from 'react-icons/hi2'
import { useCheckOut } from '../../../ViewModal/Hooks/BookingHooks/useCheckOut'
import Modal from "../../UI/Modal"
import ConfrmDelete from '../../UI/ConfrmDelete'
import { useDeleteBooking } from '../../../ViewModal/Hooks/BookingHooks/useDeleteBooking'


// import "bootstrap/dist/css/bootstrap.min.css";
function BookingsRow({booking}) {
  
 const  navigate  = useNavigate()
 const {checkOut , isCheckingOut} = useCheckOut()
 const {deleteBookingFn , isDeleteingBooking} = useDeleteBooking()

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


  console.log("testttt",booking)
  const getStatus = {
    unconfirmed:'text-customBlue-dark bg-customBlue-light  dark:text-customBlue-light dark:bg-customBlue-dark ',
    'checked-out': 'text-customGray-600 bg-customGray-100  dark:text-customGray-100 dark:bg-customGray-600',
    'checked-in' :'text-customGreen-dark bg-customGreen-100 dark:text-customGreen-100 dark:bg-customGreen-dark'
  }


  return (
    <div className='grid grid-cols-[0.8fr,2fr,3fr,1.4fr,1fr,1fr] place-items-center justify-items-start gap-8 text-sm  dark:bg-Dark-100 dark:border-customGray-700 border-b-[1px] rounded-xm p-2 text-customGray-700 dark:text-customGray-50'>
        <div>{cabinName}</div>

      <div className='flex flex-col items-start justify-start gap-1'>
      <span>{guestName}</span>
      <span className='text-xs text-customGray-400'>{email} </span>
      </div>

      <div className='flex flex-col items-start justify-start gap-1'>
      <span>{isToday(new Date(startDate))?'Today' : formatDistanceFromNow(startDate)}
        &rarr; {numNights} night stay
      </span>
      <span className='text-xs text-customGray-400'>
        {format(new Date(startDate), "MMM dd yyyy")} &mdash;
        {format(new Date(endDate), "MMM dd yyyy")}
      </span>
      </div>
        
      <div className={`${getStatus[status]} rounded-full px-2 py-1 text-xs  font-[600]`}>{status.toUpperCase()}</div>
      <div>{formatCurrency(totalPrice)}</div>
      <div className='relative flex justify-end items-end'>

    <Modal>
        <Dropdown >
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='dropdown-btn btn-sm' style={{
          backgroundColor:'#FFF',
          color:'#212529',
          border:'1px solid #212529',
          borderRadius:'5px'
        }}>
          Action
        </Dropdown.Toggle>
        
            <Dropdown.Menu>
              <Dropdown.Item > <button className='flex justify-start items-center gap-3' onClick={()=>{navigate(`/bookings/${bookingId}`);}}>
                 
              <FaEye style={{color:'#9a3412'}}/> See Details</button></Dropdown.Item>

             {status==='unconfirmed' && <Dropdown.Item> <button className='flex justify-start items-center gap-3' onClick={()=>navigate(`/checkin/${bookingId}`)} > <IoArrowRedoCircleOutline style={{color:'#047857'}} />Check In</button></Dropdown.Item>}

             {status==='checked-in' && <Dropdown.Item>
              <button className='flex justify-start items-center gap-3' onClick={()=>checkOut(bookingId)} disabled={isCheckingOut}>
             <HiArrowUpOnSquare style={{color:'#134e4a'}}  /> Check Out
              </button>
              </Dropdown.Item>}

     <Modal.Open opens='delete'>
          <Dropdown.Item><button className='flex justify-start items-center gap-3'> <FaTrash style={{color:'red'}}/>  Delete</button> </Dropdown.Item>
     </Modal.Open>

     </Dropdown.Menu>
      </Dropdown>

      <Modal.Window name='delete'>
        <ConfrmDelete onConfirm={()=>deleteBookingFn(bookingId)} disabaled={isDeleteingBooking}/>
      </Modal.Window>

    </Modal>
      </div>
    </div>
  )
}

export default BookingsRow