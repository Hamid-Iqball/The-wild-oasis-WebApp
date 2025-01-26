import React from 'react';
import Logout from '../features/authentications/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';

function Header() {
const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 items-center h-16  px-4 mr-6 ">
      <div className="justify-self-end">
        <div className='flex justify-between items-center gap-2'>
       <Avatar/>
          <button className='p-1 hover:bg-customGray-200 active:bg-customGray-200 hover:rounded-md' onClick={()=>navigate("/account")}>
          <HiOutlineUser size='24' color='#9a3412'/>
          </button>
        <Logout />
        </div>
      </div>
    </div>
  );
}

export default Header;
 