import React from 'react'
import { HiMiniArrowRightStartOnRectangle } from 'react-icons/hi2'
import { useLogout } from '../../../ViewModal/Hooks/AuthenticationsHooks/useLogout'
import SpinnerMini from '../../UI/SpinnerMini'

function Logout() {
  const{logOut, isLoginOut} =  useLogout()
  return (
    <button onClick={logOut} disabled={isLoginOut} className='p-1 hover:bg-slate-200 active:bg-slate-200 hover:rounded-md'>
      { !isLoginOut? <HiMiniArrowRightStartOnRectangle  size='24' color='#9a3412'/> : <div className=' '>
        <SpinnerMini color='#9a3412'/>
      </div> }
    </button>
  )
}

export default Logout