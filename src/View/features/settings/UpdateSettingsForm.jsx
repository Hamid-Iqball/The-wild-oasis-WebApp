import React from 'react'
import FormItem from '../../UI/FormItem'
import { useSettings } from '../../../ViewModal/Hooks/SettingsHooks/useSetting'
import Spinner from '../../UI/Spinner'
import { useUpdateSetting } from '../../../ViewModal/Hooks/SettingsHooks/useUpdateSettings'


function UpdateSettingsForm() {

    const {isError,isLoading,settings:{
        minBookingLength,
        maxBookingLength,
        maxGuestPerBooking,
        breakfastPrice
    }={}} = useSettings()

  const {updateSetting , isUpdating} =   useUpdateSetting()
    if(isLoading){
        return <Spinner/>
    }

    function handleUpdate(e,field){
        e.preventDefault()
        const {value} = e.target;
       if(!value) return;
       updateSetting({[field]:value})
    }
//    We want to update the setting as we leave the fields,we don't have any submit button.
    return (
<form action="" className='bg-white p-4  rounded-md'>
<FormItem label='Minimum nights/booking'>
<input type="number" id='min-nights' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={minBookingLength} onBlur={e=>handleUpdate(e ,"minBookingLength")} disabled={isUpdating}/>
</FormItem>

<FormItem label='Maximum nights/booking'>
<input type="number" id='max-nights' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={maxBookingLength} onBlur={e=>handleUpdate(e,'maxBookingLength')} disabled={isUpdating} />
</FormItem>

<FormItem label='Maximum guests/booking'>
<input type="number" id='max-guests' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={maxGuestPerBooking} onBlur={e=>handleUpdate(e,"maxGuestPerBooking")} disabled={isUpdating} />
</FormItem>

    <FormItem label='Breakfast Price'>
    <input type="number" id='breakfast-price' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={breakfastPrice} onBlur={e=>handleUpdate(e,'breakfastPrice')} disabled={isUpdating}/>
    </FormItem>
</form>

  )
}

export default UpdateSettingsForm