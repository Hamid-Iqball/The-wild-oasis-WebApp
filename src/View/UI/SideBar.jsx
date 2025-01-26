import React from 'react'
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import Uploader from '../../Modal/data/Uploader'


function SideBar() {
  return (
    <div className=' overflow-hidden h-full flex flex-col justify-start items-center gap-12  bg-white col-span-1 row-span-full
     border-r-[1px] border-customGray-50  py-4 ' >
    <div className='pt-4'>
      <img src="/logo-light.png" alt="logo" className='h-[7rem] '  />
    </div>
    <div>
    <nav className='text-[1rem] font-[500] text-customGray-800 '>
        <ul className='flex flex-col gap-2 ml-2 mr-3'>
            <li className='hover:bg-customGray-100 rounded-md hover:text-customOrange-800'> 
                <NavLink to='/dashboard' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-2 px-4 bg-customGray-100 rounded-md text-customOrange-800 text-[1em]' :'flex justify-start gap-4 py-2 text-[1rem] px-4'
              }>
                <span ><HiOutlineHome size={28} /> </span>
                Home</NavLink>
            </li>

            <li className='hover:bg-customGray-100 rounded-md hover:text-orange-800'>
                <NavLink to='/bookings' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-2 px-4 bg-customGray-100 rounded-md text-customOrange-800 text-[1rem]':'flex justify-start gap-4 py-2 px-4 text-[1rem]'
              }> 
                    <HiOutlineCalendarDays size={28}/>
              <span> 
              Bookings
                </span></NavLink>
            </li>

            <li className='hover:bg-customGray-100 rounded-md hover:text-customOrange-800' >
                <NavLink to='/cabins' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-2 px-4 bg-customGray-100 rounded-md text-customOrange-800 text-[1rem]' :'flex justify-start gap-4 py-2 px-4 text-[1rem]'
              } > 
                <HiOutlineHomeModern size={28}/>
                <span>
                Cabins
                </span>
               </NavLink>
            </li>

            <li className='hover:bg-customGray-100 rounded-md hover:text-customOrange-800' >
                <NavLink to='/users' className={({isActive})=>
                  isActive ? 'flex justify-start gap-4 py-2 px-4 bg-customGray-100 rounded-md text-customOrange-800 text-[1rem]' :'flex justify-start gap-4 py-2 px-4 text-[1rem]'
              } >
                <HiOutlineUsers size={28}/>
                <span>Users</span></NavLink>
            </li>

            <li className='hover:bg-customGray-100 rounded-md hover:text-customOrange-800'>
                <NavLink to='/settings'className={({isActive})=>
                   isActive ? 'flex justify-start gap-4 py-2 px-4 bg-slate-100 rounded-md text-orange-800 text-[1rem]' :'flex justify-start gap-4 py-2 px-4 text-[1rem]'
              }>
                <HiOutlineCog6Tooth size={28}/>
                <span>Settings</span>
                </NavLink>
            </li>
        </ul>
    </nav>

    <Uploader/>
</div>
    </div>
  )
}

export default SideBar