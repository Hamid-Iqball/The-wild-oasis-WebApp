import React from 'react'

function CreateCabinForm() {
  return ( 
  <form className='max-w-[50rem] m-8 '>
    <div className='grid grid-cols-3 gap-8 max-w-full m-4 h-fit border-b border-slate-200 p-3 '>
      <label htmlFor="name" className='text-normal font-semibold'>Cabin name</label>
      <input type="text" className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>

    <div className=' grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="maxCapacity" className='text-lg font-semibold'>Maximum Capacity</label>
      <input type="text" className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="regularPrice" className='text-lg font-semibold'>Price</label>
      <input type="text" className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8 max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="discount" className='text-lg font-semibold' defaultValue={0}>Discount</label>
      <input type="text" className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none '/>
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="description" className='text-lg font-semibold'>Description for Website</label>
      <input type="text" className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="image" className='text-lg font-semibold'>Cabin Photo</label>
      <textarea type="text" className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
  </form>
  )
}

export default CreateCabinForm