import React from 'react'
import { FaCalendarCheck, FaRegCalendarCheck } from 'react-icons/fa'
import { HiOutlineChartBar, HiOutlineShoppingBag } from 'react-icons/hi2'
import { PiMoneyLight } from 'react-icons/pi'

function DashboardLayout() {



  return (
    <section>

        <div className='grid grid-cols-4 gap-6 mt-8'>

            <div className= 'dark:border dark:border-customGray-500 bg-customGray-50 dark:bg-Dark-100 rounded-md p-3 flex justify-start items-center gap-4'>
            <div className=' p-3 bg-[#E0F2FE] dark:bg-[#075985] dark:text-white text-[#075985] rounded-full flex justify-center items-center'><HiOutlineShoppingBag size={36}/></div>
            <div className='flex flex-col gap-1'> 
                <h3 className='text-normal font-semibold'>Bookings</h3>
                <p className='text-2xl font-semibold'>635</p>
            </div>
            </div>

            <div className=' dark:border dark:border-customGray-500 bg-customGray-50 dark:bg-Dark-100 rounded-md p-3 flex justify-start items-center gap-4'>
            <div className=' p-3 bg-[#DCFCE7] dark:bg-green-600 rounded-full flex justify-center items-center dark:text-white text-[#16a34a]'><PiMoneyLight size={36}/></div>
            <div className='flex flex-col gap-1'> 
                <h3 className='text-normal font-semibold'>Bookings</h3>
                <p className='text-2xl font-semibold'>635</p>
            </div>
            </div>

            <div className=' dark:border dark:border-customGray-500 bg-customGray-50 dark:bg-Dark-100 rounded-md p-3 flex justify-start items-center gap-4'>
            <div className=' p-3 bg-[#E0E7FF] dark:bg-[#3730A3] rounded-full flex justify-center text-[#3730A3] dark:text-white items-center'><FaRegCalendarCheck size={34} /></div>
            <div className='flex flex-col gap-1'> 
                <h3 className='text-normal font-semibold'>Bookings</h3>
                <p className='text-2xl font-semibold'>635</p>
            </div>
            </div>
     
            <div className=" dark:border dark:border-customGray-500 bg-customGray-50 dark:bg-Dark-100 rounded-md p-3 flex justify-start items-center gap-4">
            <div className="p-3 bg-[#FEF9C3] dark:bg-[#673C0B] rounded-full flex justify-center items-center dark:text-white text-[#673C0B]">
                <HiOutlineChartBar size={34} />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 dark:text-white text-normal font-semibold">Bookings</h3>
                <p className="text-gray-900 dark:text-white text-2xl font-semibold">635</p>
            </div>
            </div>


     

       
    


        </div>
    </section>
  )
}

export default DashboardLayout