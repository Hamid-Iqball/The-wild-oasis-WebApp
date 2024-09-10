import React from 'react'
import { useForm } from 'react-hook-form'

import SmallButton from '../../SmallButton'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCabin } from '../../../Modal/Services/apiCabins'
import toast from 'react-hot-toast'

function CreateCabinForm() {

  // Prebilt functions in useForm.
  const {register , handleSubmit, reset} = useForm()
  const queryClinet =  useQueryClient()

  // When we are changing something like deleting a row or inserting a new row
  const {mutate , isLoading:isCreating} =useMutation({
    mutationFn:(newCabin)=>createCabin(newCabin),

    onSuccess :()=>{
      toast.success("New Cabin Successfully Created");
      queryClinet.invalidateQueries({
        queryKey:['cabins']
      });
      reset();
    },

    onError:(err)=>{
      toast.error(err.message)
    }
  })

 function onSubmit(data){
  mutate(data);
 }

  return ( 
  <form className='max-w-full mt-4 bg-white py-2 rounded-md' onSubmit={handleSubmit(onSubmit)}>
    <div className='grid grid-cols-3 gap-8 max-w-full my-2 mx-4  border-b border-slate-200 px-3 py-1.5  '>
      <label htmlFor="name" className='text-normal font-[500] text-[#3F4858]'>Cabin name</label>
      <input type="text" id='name' {...register('name',{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>

    <div className=' grid grid-cols-3 gap-8  max-w-full my-2 mx-4 h-fit border-b border-slate-200 px-3 py-1.5'>
      <label htmlFor="maxCapacity" className='text-lg font-[500] text-[#3F4858]'>Maximum capacity</label>
      <input type="text" id='maxCapacity' {...register("maxCapacity",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full my-2 mx-4 h-fit border-b border-slate-200 px-3 py-1.5'>
      <label htmlFor="regularPrice" className='text-lg font-[500] text-[#3F4858]'>Price</label>
      <input type="text" id='regularPrice' {...register("regularPrice",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8 max-w-full my-2 mx-4 h-fit border-b border-slate-200 px-3 py-1.5'>
      <label htmlFor="discount" className='text-lg font-[500] text-[#3F4858]' >Discount</label>
      <input type="number" id='discount' {...register("discount",{required:"This Field is required"})} placeholder='0' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none' defaultValue={0}/>
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full my-2 mx-4 h-fit border-b border-slate-200 px-3 py-1.5'>
      <label htmlFor="description" className='text-lg font-[500] text-[#3F4858]'>Description for website</label>
      <textarea type="text" id='description' {...register("description",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full my-2 mx-4 h-fit border-b border-slate-200 px-3 py-1.5'>
      <label htmlFor="image" className='text-lg font-[500] text-[#3F4858]'>Cabin photo</label>
      <input type="text" id='image' {...register("image",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='flex items-center justify-end gap-4 pr-8'>
      <SmallButton>
        Cancel
      </SmallButton>
      <button className="border border-grey-500 py-3 px-5 text-slate-50 bg-orange-700 font-semibold rounded-md" 
      disabled={isCreating}>Add Cabin</button>
    </div>
  </form>
  )
}

export default CreateCabinForm