import React from 'react'
import Cards from './Cards'

import Spinner from "../../UI/Spinner"
import { useRecentBookings } from '../../../ViewModal/Hooks/DashboardHooks/useRecentBookings'
import { useRecentStays } from '../../../ViewModal/Hooks/DashboardHooks/useRecentStays'


function DashboardLayout() {
const   { bookings , isLoading} = useRecentBookings()
const  {stays, isLoading:isStaying,confirmedStays} = useRecentStays()

if(isLoading || isStaying){
  return <Spinner/>
}

console.log(bookings)

  return (
    <section className='flex flex-col gap-8'>
        <Cards/>
        <div className='grid grid-cols-2 gap-8 '>

            <div className=' bg-customGray-50 border-customGray-900 dark:border dark:border-customGray-700 dark:bg-Dark-100 rounded-md p-4' >
                <h2 className='text-xl font-bold border-b dark:border-customGray-700 pb-4'>Today</h2>
                <div className='flex justify-between items-center py-3 border-b dark:border-customGray-700'>
                    <span className='dark:bg-[#075985] dark:text-[#E0F2FE]  bg-[#d0e8f8] text-[#075985] p-1 px-3  flex justify-center items-center text-sm font-semibold rounded-full'>Departing</span>
                   
                    <h2 className='flex gap-2 justify-start items-center font-semibold'>  <span>⛳</span>Jonas Schmedttmann</h2>
                    <span className='font-semibold'>5 nights</span>
                    <button className='bg-customOrange-900 text-customOrange-50 text-sm font-semibold rounded-md py-1 px-2'>CHECK OUT</button>
                </div>
            
            </div>

            <div>

            </div>
        </div>
    </section>
  )
}

export default DashboardLayout