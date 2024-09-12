import React, { useState } from 'react'
import {formatCurrency} from '../../../ViewModal/Utils/helper'
import CreateCabinForm from './CreateCabinForm'
import { useDeleteCabin } from '../../../ViewModal/Hooks/useDeleteCabin'


function CabinRow({cabin}) {
    const [showForm , setShowForm] = useState(false)
    const {image ,id:cabinID, name,maxCapacity,regularPrice,discount} = cabin
    const {isDeleteing , deleteCabin} = useDeleteCabin()
  return (
    <>
    <div className='grid grid-cols-[0.8fr,0.3fr,2fr,1fr,1fr,1fr] place-items-center gap-8 text-sm font-[500] bg-white border-b-[1px] border-[#DDDDDD] rounded-md p-[1px]'>

       <div className='w-24 bg-white aspect-[4/3] border-slate-400 border'><img src={image} alt="" className='w-24  aspect-[4/3]' />
       </div>
       <div className='text-center font-semibold' style={{fontFamily:"sono"}}>{name}</div>
       <div className='text-start font-normal '>Fits Up to {maxCapacity} people</div>
       <div className='text-[0.9rem] font-semibold' style={{fontFamily:"sono"}}>{formatCurrency(regularPrice)}</div>
       <div className='text-green-500 pl-4 font-semibold' style={{fontFamily:"sono"}}>{discount? formatCurrency(discount) : <span>&mdash;</span> }</div>
       <div>
      <button className=' py-1 px-2 border mr-2' onClick={()=>setShowForm(show=>!show)}>Edit</button>
       <button className=' py-1 px-2 border ' onClick={()=>deleteCabin(cabinID)} disabled={isDeleteing} >Delete</button>
       </div>
    </div>
    {showForm && <CreateCabinForm cabinToEdit={cabin}/>}
    </>
  )
}

export default CabinRow