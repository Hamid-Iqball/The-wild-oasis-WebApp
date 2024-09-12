import toast from 'react-hot-toast'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import SmallButton from '../../SmallButton'
import { createEditCabin } from '../../../Modal/Services/apiCabins'
import FormItem from '../../FormItem'


 function CreateCabinForm({cabinToEdit={}}) {

  const {id:editID, ...editValues} = cabinToEdit
  const isEditSession = Boolean(editID)
  const {register , handleSubmit, reset,getValues,formState} = useForm(
    {
      defaultValues:isEditSession ? editValues :{}
    }
  )
  const queryClinet =  useQueryClient()
  // biltIn functions in useForm.
  const {errors} = formState;


  // For creating a new Cabin
  const {mutate:createCabin , isLoading:isCreating} =useMutation({
    mutationFn:createEditCabin,
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

    // For editing an existing cabin
    const {mutate:editCabin , isLoading:isEditing} =useMutation({
      mutationFn:({newCabinData,id})=>createEditCabin(newCabinData,id),
      onSuccess :()=>{
        toast.success("cabin successfully edited");
        queryClinet.invalidateQueries({
          queryKey:['cabins']
        });
        reset();
      },
        onError:(err)=>{
          toast.error(err.message)
        }
      })

      const isWorking  = isCreating || isEditing
      
      function onSubmit(data){
        const image = typeof data.image === 'string' ? data.image : data.image[0]
      // Here the spread operator is to copy paste all the properties, and then override the image property
      if(isEditSession){
        editCabin({newCabinData:{...data,image} , id:editID})
      }else{
        createCabin({...data,image:image});
      }
      // console.log(data)
    }
    function onError(errros){
      console.log(errros)
    }

  return ( 
  <form className='max-w-full mt-4 bg-white py-2 rounded-md' onSubmit={handleSubmit(onSubmit,onError)}>

        <FormItem label='Cabin name' error={errors?.name?.message}>
        <input type="text" id='name' {...register('name',{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isWorking} />
        </FormItem>

        <FormItem label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <input type="number" id='maxCapacity' {...register("maxCapacity",{required:"This Field is required",min:{
            value:1,
            message:"Capacity should be at least 1"
          }})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isCreating} />
        </FormItem>

        <FormItem label='Price' error={errors?.regularPrice?.message }>
        <input type="number" id='regularPrice' {...register("regularPrice",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isWorking} />
          </FormItem>

          <FormItem label="Discount" error={errors?.discount?.message}>
          <input type="number" id='discount' {...register("discount",{
                  validate:(value)=> value <= getValues().regularPrice || "Discount must be less than Price" ,required:"This Field is required"
              })} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none' defaultValue={0} disabled={isWorking}/>
           </FormItem>
   
          <FormItem label="Description" error={errors?.description?.message}>
          <textarea type="text" id='description' {...register("description",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isWorking}/>
          </FormItem>

          <FormItem label="Cabin photo" error={errors?.image?.message}>
          <input type="file" id='image' {...register("image",{required: isEditSession ? false : "This field is required"})} className='p-1.5 file:bg-orange-700 file:text-slate-50 file:py-3 file:px-4 file:border-none file:rounded-md file:mr-4 hover:file:cursor-pointer   ' disabled={isWorking}/>
          </FormItem>


        <div className='flex items-center justify-end gap-4 pr-8'>
          <SmallButton>
            Cancel
          </SmallButton>
          <button className="border border-grey-500 py-3 px-5 text-slate-50 bg-orange-700 font-semibold rounded-md" 
          disabled={isWorking}>{isEditSession ? "Edit Cabin" :" Add Cabin"}</button>
        </div>
  </form>
  )
}

export default CreateCabinForm