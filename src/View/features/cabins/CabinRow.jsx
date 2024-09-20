import React, { useState } from 'react'

import CreateCabinForm from './CreateCabinForm'
import { useDeleteCabin } from '../../../ViewModal/Hooks/CabinHooks/useDeleteCabin'
import { HiPencil, HiSquare2Stack } from 'react-icons/hi2'
import { HiTrash } from 'react-icons/hi'
import { useCreateCabin } from '../../../ViewModal/Hooks/CabinHooks/useCreateCabin'
import { formatCurrency } from '../../../Modal/Utils/helper'


function CabinRow({cabin}) {
    const {isDeleteing , deleteCabin} = useDeleteCabin()
    const [showForm , setShowForm] = useState(false)
    const {isCreating:isDuplicating , createCabin} = useCreateCabin()
    const {image ,id:cabinID, name,maxCapacity,regularPrice,discount,description} = cabin

    function handleDuplicate(){
     createCabin({
        name:`Copy of ${name}`, maxCapacity, regularPrice, discount, image, description
      })
    }
  return (
    <>
    <div className='grid grid-cols-[0.8fr,1fr,2fr,1fr,1fr,1fr] place-items-center justify-items-start gap-8 text-sm font-[500] bg-white border-b-[1px] border-[#DDDDDD] rounded-md p-[1px]'>

       <div className='w-28 bg-white  border-slate-400 border'><img src={image} alt="" className='w-28 ' />
       </div>
       <div className='text-start font-semibold' style={{fontFamily:"sono"}}>{name}</div>
       <div className='text-start font-normal '>Fits Up to {maxCapacity} people</div>
       <div className='text-[0.9rem] font-semibold' style={{fontFamily:"sono"}}>{formatCurrency(regularPrice)}</div>
       <div className='text-green-500 pl-4 font-semibold' style={{fontFamily:"sono"}}>{discount? formatCurrency(discount) : <span>&mdash;</span> }</div>
       <div>
      <button className=' py-1 px-2 border mr-1' onClick={handleDuplicate} disabled={isDuplicating}><HiSquare2Stack/></button>
      <button className=' py-1 px-2 border mr-1' onClick={()=>setShowForm(show=>!show)} ><HiPencil/></button>
       <button className=' py-1 px-2 border ' onClick={()=>deleteCabin(cabinID)} disabled={isDeleteing}> <HiTrash/></button>
       </div>
    </div>
    {showForm && <CreateCabinForm cabinToEdit={cabin}/>}
    </>
  )
}

export default CabinRow