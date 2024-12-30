import React from 'react'
import FormItem from '../../UI/FormItem'
import { Form, useForm } from 'react-hook-form'
import { useUpdateUser } from '../../../ViewModal/Hooks/AuthenticationsHooks/useUpdateUser';

function UpdatePassword() {

const {register,handleSubmit,formState,getValues,reset} = useForm()
const {error} = formState;

const {updateUser, isUpdating} = useUpdateUser()

function onSubmit ({password}){
  updateUser({password},{onSuccess:reset()})
}
//The use form comes with its built in validation which makes form handling very easy 
  return (
    <div className='flex flex-col gap-3'>
    <h2 className="text-[#5d5f63] text-xl font-[500]">Update Password</h2>
    <form onSubmit={handleSubmit(onSubmit)} 
    className='bg-white p-4  rounded-md'>

    <FormItem label='New Password (min 8 characters)' error={error?.password?.message} >
    <input type="password" id='password' disabled={isUpdating} 
     {...register("password", {
      required: "This field is required",
      minLength: {
        value: 8,
        message: "Password needs a minimum of 8 characters",
      },
    })}autoComplete='current-password'
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none' />
    </FormItem>


    <FormItem label='Confirm password' error={error?.password?.message} >
    <input type="password" id='passwordConfirm' disabled={isUpdating} 
    {...register("passwordConfirm", {
      required: "This field is required",
      validate: (value) =>
        getValues().password === value || "Passwords need to match",
    })}autoComplete='new-password'
    className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </FormItem>


    <div className='flex justify-end gap-2 items-center mt-4'>
    <button className='py-2 px-3 text-orange-800 font-semibold bg-slate-50 border rounded-lg text-center hover:bg-slate-200  hover:duration-300 hover:ease-in-out' type='reset' onClick={reset} >Cancel</button>

    <button disabled={isUpdating}
     className='py-[10px] px-3 text-white bg-orange-700 rounded-md  font-semibold text-center hover:bg-orange-800 hover:duration-300 hover:ease-in-out' >Update Password</button>
    </div>
</form>

    </div>
  )
}

export default UpdatePassword