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

// import "bootstrap/dist/css/bootstrap.min.css";
function BookingsRow({booking}) {
  const [isDropdownOpen,setIsDropdownOpen] = useState(null)
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
    unconfirmed:'text-blue-600 bg-blue-100',
    'checked-out': 'text-gray-600 bg-gray-100',
    'checked-in' :'text-green-600 bg-green-100'
  }

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleChnage = ()=>{
    console.log('Byeeeeeeeee')
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
        <Provider>
        <MenuRoot>
         <MenuTrigger as={Button}>
        <BsThreeDotsVertical/>
      </MenuTrigger>

      <MenuContent>
        <MenuItem>Regular Item</MenuItem>
        <MenuRadioItemGroup defaultValue="1">
          <MenuRadioItem value="1" onClick={()=>console.log('Heyyyyyy')}>Radio Item 1</MenuRadioItem>
          <MenuRadioItem value="2" onClick={handleChnage}>Radio Item 2</MenuRadioItem>
        </MenuRadioItemGroup>
        <MenuSeparator />
      </MenuContent>
      
    </MenuRoot>
        </Provider>
       
      </div>
    </div>
  )
}

export default BookingsRow