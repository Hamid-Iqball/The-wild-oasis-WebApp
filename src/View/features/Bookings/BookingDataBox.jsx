
import React from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'
import { CiCircleCheck, CiDollar } from 'react-icons/ci'

import { HiOutlineHomeModern } from 'react-icons/hi2'

function BookingDataBox({booking}) {
  return (
    <div className='bg-white rounded-md'>

    <header className='flex bg-orange-800 text-orange-50 p-4 justify-between flex-wrap gap-3 px-5 rounded-t-md'>

        <div className='flex justify-between items-center gap-3'>
        <span><HiOutlineHomeModern size={36}/></span>
        <h1 className='font-semibold text-2xl'>2 nights in cabin 008</h1> </div>
        <div><p className='text-xl font-semibold'>Wed, Oct 32 2029 (In almost 5 years) — Fri, Nov 02 2029</p> </div>

    </header>

    <section className='flex flex-col p-4 gap-3 px-6'>

        <div className='flex justify-start items-start gap-3'>
        <span>⛳</span> <p className='font-semibold text-lg text-[#5d5f63]'>Hamid Iqbal</p>.<p className='text-slate-700 text-lg'>hamid.iqbal00124@gmail.com</p> . <p className='text-slate-700'>National ID uuuuuiD</p>
        </div>

        <div className='flex justify-start items-center gap-3 text-lg'>
        <span> <BiMessageAltDetail color='#c2410c' size={20}/></span>
        <h2 className='font-semibold text-[#5d5f63]'>Observations</h2>
        <p className=''>Hi my name is Hamid</p>
        </div>

        <div className='flex justify-start items-center gap-3 text-lg'>
        <span><CiCircleCheck size={20}/></span>
        <h2 className='font-semibold text-lg text-[#515661]'>Breakfast included ?</h2>
        <p>No</p>
        </div>

        <div className='flex items-center justify-between p-3 px-4 bg-amber-200 text-amber-800 text-xl rounded '>
        <div className='flex justify-between items-center gap-3'>
        <CiDollar size={28}/>
        <h2>Total Price</h2>
        <span>$800</span>
        </div>
        <div><p>Will Pay at the property</p></div>
        </div>

        <div className='place-self-end mr-2'>
        <span className='text-sm text-slate-600'>Booked, Sat Nov 02 2024, 12:13 AM</span>
        </div>


    </section>

        
    </div>
  )
}

export default BookingDataBox