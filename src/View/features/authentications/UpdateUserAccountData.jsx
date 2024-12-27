import React, { useState } from 'react'
import FormItem from "../../UI/FormItem"
import { useUser } from '../../../ViewModal/Hooks/AuthenticationsHooks/useUser'
import { useUpdateUser } from '../../../ViewModal/Hooks/AuthenticationsHooks/useUpdateUser'
function UpdateUserAccountData() {
const {
  user:{
    email,
    user_metadata:{fullName:currenFullName}
  }
} =   useUser()
  const [fullName, setFullName]= useState(currenFullName)
  const [avatar,setAvatar]= useState(null)
  const {updateUser,isUpdating} = useUpdateUser()

  console.log(fullName)
  function hanndleSubmit(e){
  e.preventDefault()
  if(!fullName) return
     updateUser({fullName,avatar })
  }

  return (
    <div className='flex flex-col gap-3'>
    <h2 className="text-[#5d5f63] text-xl font-[500]">Update user data</h2>
    <form 
    onSubmit={hanndleSubmit}
    className='bg-white p-4  rounded-md'>


    <FormItem label='Email' >
    <input type="email" id='email' 
    value={email}
    disabled
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none' />
    </FormItem>


    <FormItem label='Full Name' >
    <input type="text" id='fullName'
    value={fullName}
    onChange={(e)=>setFullName(e.target.value)} 
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </FormItem>


    <FormItem label='Avatar' >
    <input type="file" id='avatar' 
    onChange={(e)=>setAvatar(e.target.files[0])}
    className='p-1.5 file:bg-orange-700 file:text-slate-50 file:py-2 file:px-4 file:border-none file:rounded-md file:mr-4 hover:file:cursor-pointer' />
    </FormItem>

  

    <div className='flex justify-end gap-2 items-center mt-4'>
    <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200  hover:duration-300 hover:ease-in-out' type='reset' >Cancel</button>

    <button className='py-[10px] px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out' disabled={isUpdating}>Update account</button>
    </div>
</form>

    </div>
  )
}

export default UpdateUserAccountData;