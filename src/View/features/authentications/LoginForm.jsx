import React, { useState } from 'react'
import useLogin from '../../../ViewModal/Hooks/AuthenticationsHooks/useLogin'
import SpinnerMini from '../../UI/SpinnerMini'



function LoginForm() {
    const [email,setEmail] = useState("hamid@email.com")
    const [password  ,setPassword] = useState("pass123")
    const {login , isLoading} = useLogin()

    function handleSubmit (e){
        e.preventDefault() 
        if (!email || !password) return ;
        login({email,password},{   //Login function us actually a mutate function and we can set some option on this function , one eof them is onSettled as well Using onSettled ties the input clearing to the completion of the login request in a predictable manner. It will clear the inputs only if the credientials are correct.
            onSettled:()=>{
                setEmail('')
                setPassword('')
            }
        })
    }

  return (
    <div className='bg-gradient-to-t from-transparent to-neutral-400 text-neutral-900 text-lg p-4 rounded w-full '>
        <form className='flex flex-col gap-3 ' onSubmit={handleSubmit} >
        
        <div className='flex flex-col justify-start items-start gap-1'> 
            <label className='font-semibold'>Email Address</label>
            <input type="email" 
            id='email'
            value={email}
            autoComplete='username'
            onChange={(e)=>setEmail(e.target.value)}
            disabled={isLoading}
            className='p-2 bg-transparent  border rounded-md focus:border-customOrange-200  focus:ring-customOrange-200 focus:ring-2 outline-none w-full text-base' />
        </div>

        <div className='flex flex-col gap-1 justify-start items-start '>
            <label className='font-semibold'> Password</label>
            <input type="passowrd" 
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            disabled={isLoading}
            className='p-2 px-2 bg-transparent border rounded-md focus:border-customOrange-200  focus:ring-customOrange-200 focus:ring-2 outline-none w-full text-base ' />
        </div>

        <button type='submit'
        disabled={isLoading}
        className='bg-customOrange-800 text-customOrange-50 hover:bg-customOrange-100 transition-colors duration-300 p-2 px-3 hover:text-customOrange-900 rounded-md mt-3 font-semibold ease-in-out'> {!isLoading? 'Login' : <SpinnerMini/>
}</button>
        </form>
    </div>
  )
}

export default LoginForm