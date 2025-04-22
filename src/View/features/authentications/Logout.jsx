import React from 'react'
import { HiMiniArrowRightStartOnRectangle } from 'react-icons/hi2'
import { useLogout } from '../../../ViewModal/Hooks/AuthenticationsHooks/useLogout'
import SpinnerMini from '../../UI/SpinnerMini'

function Logout() {
  const{logOut, isLoginOut} =  useLogout()
  return (
    <button onClick={logOut} disabled={isLoginOut} className='p-1 hover:bg-customGray-200 active:bg-customGray-200 hover:rounded-md'>
      { !isLoginOut? <HiMiniArrowRightStartOnRectangle  size='24' className=' text-customOrange-800 dark:text-customOrange-400'/> : <div className=' '>
        <SpinnerMini color='#9a3412'/>
      </div> }
    </button>
  )
}

export default Logout