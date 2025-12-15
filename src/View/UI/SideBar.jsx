import React from 'react'
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

import useTheme from '../../ViewModal/Hooks/ThemeHooks/useTheme'
import Uploader from '../../Modal/data/Uploader'

function SideBar() {
  const { theme, isLoading } = useTheme()
  
  // If theme is still loading, use a neutral class to prevent flicker
  if (isLoading) {
    return (
      <div className="h-full flex flex-col justify-start items-center gap-6 lg:gap-12 col-span-1 row-span-full md:py-4 md:mx-4 bg-gray-100">
        {/* Skeleton loader for logo */}
        <div className="p-2 lg:pt-4">
          <div className="h-20 lg:h-[7rem] w-32 bg-gray-200 animate-pulse rounded"></div>
        </div>
        {/* Skeleton loader for navigation */}
        <div className="w-full px-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-12 my-2 bg-gray-200 animate-pulse rounded-md"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col justify-start items-center gap-6 lg:gap-12 col-span-1 row-span-full md:py-4 md:mx-4 transition-colors ${theme !== 'dark' ? 'bg-white' : 'bg-Dark-100'}`}>
    
      <div className=' p-2 lg:pt-4'>
        <img src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} alt="logo" className='h-20 lg:h-[7rem] lg:w-auto object-contain' />
      </div>
    
      <div className='w-full'>
        <nav className='text-[1rem] font-[500] text-customGray-800 dark:text-customGray-100 dark:bg-Dark-100'>
          <ul className='flex flex-col gap-2 mx-auto w-full'>
            <li className='hover:bg-customGray-100 dark:hover:bg-Dark-200 rounded-md hover:text-customOrange-800 dark:hover:text-customGray-50 text-base'> 
              <NavLink to='/dashboard' className={({ isActive }) =>
                isActive 
                  ? 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2  lg:px-4 bg-customGray-100 dark:bg-Dark-200 rounded-md text-customOrange-800 dark:text-customGray-50 text-base' 
                  : 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 text-sm'
              }>
                <span><HiOutlineHome size={24} /></span> {/* Reduced icon size */}
                <span className="hidden lg:inline">Home</span>
              </NavLink>
            </li>

            <li className='hover:bg-customGray-100 dark:hover:bg-Dark-200 rounded-md hover:text-customOrange-800 dark:hover:text-customGray-50 text-base'>
              <NavLink to='/bookings' className={({ isActive }) =>
                isActive 
                  ? 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 bg-customGray-100 dark:bg-Dark-200 rounded-md text-customOrange-800 dark:text-customGray-50 text-base' 
                  : 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 text-sm'
              }> 
                <span><HiOutlineCalendarDays size={24}/></span> {/* Reduced icon size */}
                <span className="hidden lg:inline">Bookings</span>
              </NavLink>
            </li>

            <li className='hover:bg-customGray-100 dark:hover:bg-Dark-200 rounded-md hover:text-customOrange-800 dark:hover:text-customGray-50 text-base'>
              <NavLink to='/cabins' className={({ isActive }) =>
                isActive 
                  ? 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 bg-customGray-100 dark:bg-Dark-200 rounded-md text-customOrange-800 dark:text-customGray-50 text-base' 
                  : 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 text-sm'
              }> 
                <span><HiOutlineHomeModern size={24}/></span> {/* Reduced icon size */}
                <span className="hidden lg:inline">Cabins</span>
              </NavLink>
            </li>

            <li className='hover:bg-customGray-100 dark:hover:bg-Dark-200 rounded-md hover:text-customOrange-800 dark:hover:text-customGray-50 text-base'>
              <NavLink to='/users' className={({ isActive }) =>
                isActive 
                  ? 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 bg-customGray-100 dark:bg-Dark-200 rounded-md text-customOrange-800 dark:text-customGray-50 text-base' 
                  : 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 text-sm'
              }>
                <span><HiOutlineUsers size={24}/></span> {/* Reduced icon size */}
                <span className="hidden lg:inline">Users</span>
              </NavLink>
            </li>

            <li className='hover:bg-customGray-100 dark:hover:bg-Dark-200 rounded-md hover:text-customOrange-800 dark:hover:text-customGray-50 text-base'>
              <NavLink to='/settings' className={({ isActive }) =>
                isActive 
                  ? 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 bg-customGray-100 dark:bg-Dark-200 rounded-md text-customOrange-800 dark:text-customGray-50 text-base' 
                  : 'flex justify-center lg:justify-start items-center lg:gap-4 py-3 lg:py-2 px-2 lg:px-4 text-sm'
              }>
                <span><HiOutlineCog6Tooth size={24}/></span> {/* Reduced icon size */}
                <span className="hidden lg:inline">Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className='w-full px-2 mt-auto mb-4'>
        <Uploader />
      </div>
    </div>
  );
}

export default SideBar;
