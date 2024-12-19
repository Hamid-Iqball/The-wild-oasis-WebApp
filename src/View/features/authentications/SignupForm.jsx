import React from 'react'
import FormItem from '../../UI/FormItem'
import { useForm } from 'react-hook-form'
import { useSignUp } from '../../../ViewModal/Hooks/AuthenticationsHooks/useSignUp';
import Spinner from "../../UI/Spinner"

function SignupForm() {

  const {signUp, isLoading} = useSignUp()
  const {register,formState, handleSubmit,getValues,reset} = useForm() // UseForm has some beautiful things that maks our form handling very easy.
  const {errors} = formState;

  if(isLoading){
    return <Spinner/>
  }
  function submitFunc ({fullName,email,password}){

    signUp(
      { fullName, email, password },
      {
        onSettled: () => {
          reset(); // Resets the form to its initial state after submission
        },
      }
    );
  }

  return (
    <div className='flex flex-col gap-5'>
    <h2 className="text-orange-800 text-3xl font-[500]">Create a new user</h2>
    <form action="" onSubmit={handleSubmit(submitFunc)}
    className='bg-white p-4  rounded-md'>

    <FormItem label='Full name' error={errors?.fullName?.message}>
    <input type="text" id='fullName' 
    disabled={isLoading}
    {...register("fullName" , {required:"This fied is required"})}
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none' />
    </FormItem>


    <FormItem label='Email address' error={errors?.email?.message}>
    <input type="email" id='email' 
    disabled={isLoading}
    {...register("email",{required:'This field  is required',pattern:{
      value:/\S+@\S+\.\S+/,
      message:'Please enter a valid email address'
    }})}
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </FormItem>


    <FormItem label='Password (min 8 characters)' error={errors?.password?.message}>
    <input type="password" id='password'
    disabled={isLoading}
    {...register("password", {required:"This field is required", minLength:{
      value:8,
      message:'Password need a minimum of 8 characters'
    }},)} 
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </FormItem>

    <FormItem label='Repeat password' error={errors?.passwordConfirm?.message}>
    <input type="password" id='passwordConfirm' 
    disabled={isLoading}
    {...register("passwordConfirm",{required:"This field is required",validate:((value)=>value=== getValues().password||"Passwords need to match")})}
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </FormItem>

    <div className='flex justify-end gap-2 items-center'>
    <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200  hover:duration-300 hover:ease-in-out' type='reset' >Cancel</button>

    <button className='py-[10px] px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out' >Create new user</button>
    </div>
</form>

    </div>
  )
}

export default SignupForm