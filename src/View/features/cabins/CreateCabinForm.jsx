import React from 'react'

function CreateCabinForm() {
  return ( <form className=' '>
    <div className=' flex flex-wrap justify-between items-center max-w-full m-4 max-h-8 '>
      <label htmlFor="name" className='text-lg'>Cabin name</label>
      <input type="text" className='p-2 border-2 border-slate-400 rounded-md focus:border-orange-400 focus:border-2 outline-none ' />
    </div>
    <div className=' flex flex-wrap justify-between items-center  m-4 max-h-8 '>
      <label htmlFor="maxCapacity" className='text-lg'>Maximum Capacity</label>
      <input type="text" className='p-2 border-2 border-slate-400 rounded-md focus:border-orange-400 focus:border-2 outline-none ' />
    </div>
    <div className=' flex flex-wrap justify-between items-center  m-4 max-h-8 '>
      <label htmlFor="regularPrice" className='text-lg'>Price</label>
      <input type="text" className='p-2 border-2 border-slate-400 rounded-md focus:border-orange-400 focus:border-2 outline-none ' />
    </div>
    <div className=' flex flex-wrap justify-between items-center m-4 max-h-8 '>
      <label htmlFor="discount" className='text-lg' defaultValue={0}>Discount</label>
      <input type="text" className='p-2 border-2 border-slate-400 rounded-md focus:border-orange-400 focus:border-2 outline-none ' />
    </div>
    <div className=' flex flex-wrap justify-between items-center  m-4 max-h-8 '>
      <label htmlFor="description" className='text-lg'>Description for Website</label>
      <input type="text" className='p-2 border-2 border-slate-400 rounded-md focus:border-orange-400 focus:border-2 outline-none ' />
    </div>
    <div className=' flex flex-wrap justify-between items-center  m-4 max-h-8 '>
      <label htmlFor="image" className='text-lg'>Cabin Photo</label>
      <input type="text" className='p-2 border-2 border-slate-400 rounded-md focus:border-orange-400 focus:border-2 outline-none ' />
    </div>
  </form>
  )
}

export default CreateCabinForm