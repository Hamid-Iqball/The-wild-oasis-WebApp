import React from 'react'
import FormItem from '../../UI/FormItem'

function UpdatePassword() {
  return (
    <div className='flex flex-col gap-3'>
    <h2 className="text-[#5d5f63] text-xl font-[500]">Update Password</h2>
    <form action="" 
    className='bg-white p-4  rounded-md'>

    <FormItem label='New Password (min 8 characters)' >
    <input type="password" id='password' 
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none' />
    </FormItem>


    <FormItem label='Confirm password' >
    <input type="password" id='password' 
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </FormItem>


    <div className='flex justify-end gap-2 items-center mt-4'>
    <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200  hover:duration-300 hover:ease-in-out' type='reset' >Cancel</button>

    <button className='py-[10px] px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out' >Update Password</button>
    </div>
</form>

    </div>
  )
}

export default UpdatePassword