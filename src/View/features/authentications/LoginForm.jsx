import React from 'react'
import FormItem from '../../UI/FormItem'

function LoginForm() {
  return (
    <div className='bg-white text-orange-950 text-lg p-4 rounded w-2/6'>
        <form className='flex flex-col gap-3' >
        
        <div className='flex flex-col justify-start items-start gap-1'> 
            <label className='font-semibold'>Email Address</label>
            <input type="email" className='p-1 px-3 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none w-full' />
        </div>

        <div className='flex flex-col gap-1 justify-start items-start '>
            <label className='font-semibold' > Password</label>
            <input type="passowrd" className='p-1 px-3 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none w-full ' />
        </div>

        <button className='bg-orange-800 text-white hover:bg-orange-900 transition-colors duration-300 p-1.5 px-3 rounded-md mt-3 font-semibold ease-in-out'> Login</button>
        </form>
    </div>
  )
}

export default LoginForm