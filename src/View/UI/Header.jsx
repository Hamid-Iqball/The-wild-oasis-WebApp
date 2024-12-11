import React from 'react';
import Logout from '../features/authentications/Logout';

function Header() {
  return (
    <div className="grid grid-cols-2 items-center h-16  px-4 ">
      <h1 className='text-xl'>HEADER</h1>
      <div className="justify-self-end">
        <Logout />
      </div>
    </div>
  );
}

export default Header;
