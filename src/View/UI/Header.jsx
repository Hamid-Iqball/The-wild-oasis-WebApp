import React from 'react';
import Logout from '../features/authentications/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import ThemeButton from './ThemeButton';

function Header() {
const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 items-center h-16  px-4 mr-6 dark:bg-Dark-100">
      <div className="justify-self-end">
        <div className='flex justify-between items-center gap-2'>
          <Avatar/>
          <ThemeButton/>
          <button className='p-1 hover:bg-customGray-200 active:bg-customGray-200 hover:rounded-md' onClick={()=>navigate("/account")}>
          <HiOutlineUser size='24' className='text-customOrange-800 dark:text-customOrange-400' />
          </button>
        <Logout />
        </div>
      </div>
    </div>
  );
}

export default Header;
 