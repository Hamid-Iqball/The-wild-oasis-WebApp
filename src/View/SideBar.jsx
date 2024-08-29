import React from 'react'
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div className='flex flex-col justify-start items-center gap-[6rem]  bg-white col-span-1 row-span-full border-r-[1px] border-[#F3F4F6]   py-[3.6rem] ' >
<div className='pt-4'>
   <img src="/logo-light.png" alt="logo" className='h-[11rem] '  />
</div>
<div>
    <nav className='text-4xl text-[#5d5f63] '>
        <ul className='flex flex-col gap-6'>
            <li > 
                <NavLink to='/dashboard' className='flex justify-start gap-8 py-4 px-8 hover:bg-slate-200 hover:text-orange-300  active:bg-slate-200 active:text-orange-300'>
                <span ><HiOutlineHome size={28} /> </span>
                Home</NavLink>
            </li>
            <li >
                <NavLink to='/bookings' className='flex justify-start gap-8 py-4 px-8'> 
                    <HiOutlineCalendarDays size={28}/>
              <span> 
              Booking
                </span></NavLink>
            </li>
            <li   >
                <NavLink to='/cabins' className="flex justify-start gap-8 py-4 px-8 hover:bg-slate-200" > 
                <HiOutlineHomeModern size={28}/>
                <span>
                Cabins
                </span>
               </NavLink>
            </li>
            <li >
                <NavLink to='/users' className='flex justify-start gap-8 py-4 px-8' >
                <HiOutlineUsers size={28}/>
                <span>Users</span></NavLink>
            </li>
            <li >
                <NavLink to='/settings' className='flex justify-start gap-8 py-4 px-8' >
                <HiOutlineCog6Tooth size={28}/>
                <span>Settings</span>
                </NavLink>
            </li>
        </ul>
    </nav>
</div>
    </div>
  )
}

export default SideBar