import React from 'react'
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'


function SideBar() {
  return (
    <div className='flex flex-col justify-start items-center gap-12  bg-white col-span-1 row-span-full border-r-[1px] border-[#F3F4F6]  py-8 overflow-hidden' >
<div className='pt-4'>
   <img src="/logo-light.png" alt="logo" className='h-[8rem] '  />
</div>
<div>
    <nav className='text-[1rem] font-[500] text-[#5d5f63] '>
        <ul className='flex flex-col gap-4 mr-4'>
            <li className='hover:bg-slate-100 rounded-md hover:text-orange-800'> 
                <NavLink to='/dashboard' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-3 px-6 bg-slate-100 rounded-md text-orange-800 text-[1.1rem]' :'flex justify-start gap-4 py-3 text-[1.1rem] px-6'
              }>
                <span ><HiOutlineHome size={28} /> </span>
                Home</NavLink>
            </li>
            <li className='hover:bg-slate-100 rounded-md hover:text-orange-800'>
                <NavLink to='/bookings' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-3 px-6 bg-slate-100 rounded-md text-orange-800 text-[1.1rem]':'flex justify-start gap-4 py-3 px-6 text-[1.1rem]'
              }> 
                    <HiOutlineCalendarDays size={28}/>
              <span> 
              Bookings
                </span></NavLink>
            </li>
            <li className='hover:bg-slate-100 rounded-md hover:text-orange-800' >
                <NavLink to='/cabins' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-3 px-6 bg-slate-100 rounded-md text-orange-800 text-[1.1rem]' :'flex justify-start gap-4 py-3 px-6 text-[1.1rem]'
              } > 
                <HiOutlineHomeModern size={28}/>
                <span>
                Cabins
                </span>
               </NavLink>
            </li>
            <li className='hover:bg-slate-100 rounded-md hover:text-orange-800' >
                <NavLink to='/users' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-3 px-6 bg-slate-100 rounded-md text-orange-800 text-[1.1rem]' :'flex justify-start gap-4 py-3 px-6 text-[1.1rem]'
              } >
                <HiOutlineUsers size={28}/>
                <span>Users</span></NavLink>
            </li>
            <li className='hover:bg-slate-100 rounded-md hover:text-orange-800'>
                <NavLink to='/settings'className={({isActive})=>
                   isActive ? 'flex justify-start gap-4 py-3 px-6 bg-slate-100 rounded-md text-orange-800 text-[1.1rem]' :'flex justify-start gap-4 py-3 px-6 text-[1.1rem]'
              }>
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