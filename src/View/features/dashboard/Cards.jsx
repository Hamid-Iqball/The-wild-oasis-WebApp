import React from 'react'
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from 'react-icons/hi2'
import {formatCurrency} from "../../../Modal/Utils/helper"

function Cards({bookings , confirmedStays, numDays,cabinsCount}) {

    //1
    const numBookings = bookings?.length

    //2 Sales
    const sales = bookings.reduce((acc,cur)=>acc+cur.totalPrice , 0)

    //3 Check -in
    const checkins = confirmedStays.length 

    //4 Occupancy rate
    const occRate = confirmedStays.reduce((acc,cur)=>acc+cur.numNights , 0)/( numDays*cabinsCount)
  
  return (
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-8'>
    
                <div className='dark:border border dark:border-customGray-700 bg-customGray-50 dark:bg-Dark-100 rounded-lg p-3 flex justify-start items-center gap-4 hover:shadow-xl cursor-pointer'>
                <div className='p-2 md:p-3 bg-[#E0F2FE] dark:bg-[#075985] dark:text-white text-[#075985] rounded-full flex justify-center items-center'><HiOutlineBriefcase size={30} className="w-6 h-6 md:w-8 md:h-8" /></div>
                <div className='flex flex-col gap-1'> 
                    <h3 className='text-sm md:text-normal font-semibold'>BOOKINGS</h3>
                    <p className='text-xl md:text-2xl font-semibold'>{numBookings}</p>
                </div>
                </div>
    
                <div className='dark:border border dark:border-customGray-700 bg-customGray-50 dark:bg-Dark-100 rounded-lg p-3 flex justify-start items-center gap-4 hover:shadow-xl cursor-pointer  '>
                <div className='p-2 md:p-3 bg-[#DCFCE7] dark:bg-green-600 rounded-full flex justify-center items-center dark:text-white text-[#16a34a]'><HiOutlineBanknotes size={30} className="w-6 h-6 md:w-8 md:h-8" /></div>
                <div className='flex flex-col gap-1'> 
                    <h3 className='text-sm md:text-normal font-semibold'>SALES</h3>
                    <p className='text-xl md:text-2xl font-semibold'>{formatCurrency(sales)}</p>
                </div>
                </div>
    
                <div className='dark:border border dark:border-customGray-700 bg-customGray-50 dark:bg-Dark-100 rounded-lg p-3 flex justify-start items-center gap-4 hover:shadow-xl cursor-pointer'>
                <div className='p-2 md:p-3 bg-[#E0E7FF] dark:bg-[#3730A3] rounded-full flex justify-center text-[#3730A3] dark:text-white items-center'><HiOutlineCalendarDays size={30} className="w-6 h-6 md:w-8 md:h-8" /></div>
                <div className='flex flex-col gap-1'> 
                    <h3 className='text-sm md:text-normal font-semibold'>CHECK INS</h3>
                    <p className='text-xl md:text-2xl font-semibold'>{checkins}</p>
                </div>
                </div>
         
                <div className="dark:border border dark:border-customGray-700 bg-customGray-50 dark:bg-Dark-100 rounded-lg p-3 flex justify-start items-center gap-4 hover:shadow-xl cursor-pointer">
                <div className="p-2 md:p-3 bg-[#FEF9C3] dark:bg-[#673C0B] rounded-full flex justify-center items-center dark:text-white text-[#673C0B]">
                    <HiOutlineChartBar size={30} className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 dark:text-white text-sm md:text-normal font-semibold">Occupancy rate</h3>
                    <p className="text-gray-900 dark:text-white text-xl md:text-2xl font-semibold">{Math.round(occRate*100)}%</p>
                </div>
                </div>
            </div>
  )
}

export default Cards