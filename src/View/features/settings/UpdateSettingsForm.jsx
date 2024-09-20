import React from 'react'
import FormItem from '../../FormItem'
import { useSettings } from '../../../ViewModal/Hooks/SettingsHooks/useSetting'
import Spinner from '../../Spinner'


function UpdateSettingsForm() {
    const {isError,isLoading,settings:{
        minBookingLength,
        maxBookingLength,
        maxGuestPerBooking,
        breakfastPrice
    }={}} = useSettings()

    if(isLoading){
        return <Spinner/>
    }
   
    return (
<form action="" className='bg-white p-4  rounded-md'>
<FormItem label='Minimum nights/booking'>
<input type="number" id='min-nights' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={minBookingLength}/>
</FormItem>
<FormItem label='Maximum nights/booking'>
<input type="number" id='max-nights' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={maxBookingLength} />
</FormItem>
<FormItem label='Maximum guests/booking'>
<input type="number" id='max-guests' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={maxGuestPerBooking} />
</FormItem>
    <FormItem label='Breakfast Price'>
    <input type="number" id='breakfast-price' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' defaultValue={breakfastPrice} />
    </FormItem>
</form>

  )
}

export default UpdateSettingsForm