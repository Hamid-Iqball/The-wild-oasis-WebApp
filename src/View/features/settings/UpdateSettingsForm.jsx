import React from 'react'
import FormItem from '../../FormItem'

function UpdateSettingsForm() {
  return (
    <>
  
<form action="" className='bg-white p-4  rounded-md'>
<FormItem label='Minimum nights/booking'>
<input type="number" id='min-nights' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none '  />
</FormItem>
<FormItem label='Maximum nights/booking'>
<input type="number" id='max-nights' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none '  />
</FormItem>
<FormItem label='Maximum guests/booking'>
<input type="number" id='max-guests' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none '  />
</FormItem>
    <FormItem label='Breakfast Price'>
    <input type="number" id='breakfast-price' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none '  />
    </FormItem>
</form>
    </>
  )
}

export default UpdateSettingsForm