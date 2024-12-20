import React from 'react'
import { useUser } from '../../ViewModal/Hooks/AuthenticationsHooks/useUser'
function Avatar() {

const {user} = useUser()
const {fullName , avatar} = user.user_metadata;

  return (
    <div className='flex justify-center items-center gap-[6px] mr-2'>
        <img src={avatar || 'default-user.jpg'} alt={`Avatar of ${fullName}`} className='w-10'/>
        <p className='font-semibold text-orange-800 text-sm'>{fullName}</p>
    </div>
  )
}

export default Avatar