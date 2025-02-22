import React from 'react'
import { useForm } from 'react-hook-form'
import SmallButton from '../../UI/SmallButton'
import FormItem from '../../UI/FormItem'
import { useCreateCabin } from '../../../ViewModal/Hooks/CabinHooks/useCreateCabin'
import { useEditCabin } from '../../../ViewModal/Hooks/CabinHooks/useEditCabin'



 function CreateCabinForm({cabinToEdit={}, onCloseModal}) {

   const {createCabin , isCreating} = useCreateCabin()
   const {isEditing , editCabin} = useEditCabin()
   const {id:editID, ...editValues} = cabinToEdit
   const isEditSession = Boolean(editID)
   const {register , handleSubmit, reset,getValues,formState} = useForm(
     {
       defaultValues:isEditSession ? editValues :{}
     }
   )
  const {errors} = formState;
  const isWorking  = isCreating || isEditing
  const typeofInput = onCloseModal ? 'modal' :'regular'
      
      function onSubmit(data){
        const image = typeof data.image === 'string' ? data.image : data.image[0]
      // Here the spread operator is to copy paste all the properties, and then override the image property
      if(isEditSession){
        editCabin({newCabinData:{...data,image} , id:editID},{
          onSuccess :() =>{
            reset()
          }
        })
      }else{
        createCabin({...data,image:image},{
          onSuccess:(data)=>{
            console.log(data)
            onCloseModal()
            reset()
          }
        });
      }
    }

    function onError(errros){
      console.log(errros)
    }

    // Conditinally styling the form,So that it will have different style in different places.
    function getInputClass(type='regular'){
      switch (type) {
        case 'modal':
          return 'max-w-full  dark:text-customGray-50   p-2 rounded-md '

          case 'regular':
            return 'w-[80%] bg-orange-white border border-slate-200 rounded-md m-2 p-2 bg-orange-600'
        default:
          return 'w-[80%] bg-white p-2 '
     
      }
    }
  return ( 
  <form  onSubmit={handleSubmit(onSubmit,onError)}  type={onCloseModal?'modal':'regular'} className={`${getInputClass(typeofInput)} dark:bg-Dark-100 dark:text-customGray-50`}>
        <FormItem label='Cabin name' error={errors?.name?.message}>
        <input type="text" id='name' {...register('name',{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-customOrange-400  focus:ring-customOrange-400 focus:ring-2 outline-none dark:bg-transparent dark:outline-none ' disabled={isWorking} />
        </FormItem>

        <FormItem label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <input type="number" id='maxCapacity' {...register("maxCapacity",{required:"This Field is required",min:{
            value:1,
            message:"Capacity should be at least 1"
          }})} className='p-1.5 border rounded-md focus:border-customOrange-400  focus:ring-customOrange-400 focus:ring-2 dark:bg-transparent dark:outline-noneoutline-none ' disabled={isCreating} />
        </FormItem>

        <FormItem label='Price' error={errors?.regularPrice?.message }>
        <input type="number" id='regularPrice' {...register("regularPrice",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-customOrange-400  focus:ring-customOrange-400 focus:ring-2 outline-none dark:bg-transparent dark:outline-none ' disabled={isWorking} />
          </FormItem>

          <FormItem label="Discount" error={errors?.discount?.message}>
          <input type="number" id='discount' {...register("discount",{
                  validate:(value)=> value <= getValues().regularPrice || "Discount must be less than Price" ,required:"This Field is required"
              })} className='p-1.5 border rounded-md focus:border-customOrange-400  focus:ring-customOrange-400 focus:ring-2 dark:bg-transparent dark:outline-none outline-none' defaultValue={0} disabled={isWorking}/>
           </FormItem>
   
          <FormItem label="Description" error={errors?.description?.message}>
          <textarea type="text" id='description' {...register("description",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-customOrange-400  focus:ring-customOrange-400 focus:ring-2 outline-none dark:bg-transparent dark:outline-none '/>
          </FormItem>

          <FormItem label="Cabin photo" error={errors?.image?.message}>
          <input type="file" id='image' {...register("image",{required: isEditSession ? false : "This field is required"})} className='p-1.5 file:bg-customOrange-700 file:text-customGray-50  file:py-2 file:px-4 file:border-none file:rounded-md file:mr-4 hover:file:cursor-pointer dark:bg-transparent dark:outline-none  ' disabled={isWorking}/>
          </FormItem>


        <div className='flex items-center justify-end gap-4 pr-8'>
          <SmallButton onCloseModal={onCloseModal}>
            Cancel
          </SmallButton>
          <button className="border border-grey-500 py-[10px] px-4 text-customGray-50 bg-customOrange-700 font-semibold rounded-md" 
          disabled={isWorking}>{isEditSession ? "Edit Cabin" :" Create new Cabin"}</button>
        </div>
  </form>
  )
}

export default CreateCabinForm


