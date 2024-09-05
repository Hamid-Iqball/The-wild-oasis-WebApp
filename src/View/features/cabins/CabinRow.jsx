import React from 'react'
import {formatCurrency} from '../../../ViewModal/Utils/helper'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin } from '../../../Modal/Services/apiCabins'


function CabinRow({cabin}) {
    const {image ,id:cabinID, name,maxCapacity,regularPrice,discount} = cabin
    const queryClient = useQueryClient()
    const {isLoading:isDeleteing , mutate} = useMutation({
    mutationFn:deleteCabin,
    onSuccess:()=>{
        alert("Successfully delted")
        queryClient.invalidateQueries({
        queryKey:["cabins"]
    })},
    // Here it has access to the exact error message that we have defined in our mutation function
    onError:(err)=>{
        alert(err.message)
    }
})
  return (
    <div className='grid grid-cols-[0.8fr,0.3fr,2fr,1fr,1fr,1fr] place-items-center gap-8 text-sm font-[500] bg-white border-b-[1px] border-[#DDDDDD] rounded-md p-[1px]'>

       <div className='w-24 bg-white aspect-[4/3] border-slate-400 border'><img src={image} alt="" className='w-24  aspect-[4/3]' />
       </div>
       <div className='text-center font-semibold' style={{fontFamily:"sono"}}>{name}</div>
       <div className='text-start font-normal '>Fits Up to {maxCapacity} people</div>
       <div className='text-[0.9rem] font-semibold' style={{fontFamily:"sono"}}>{formatCurrency(regularPrice)}</div>
       <div className='text-green-500 pl-4 font-semibold' style={{fontFamily:"sono"}}>{formatCurrency(discount)}</div>
       <button onClick={()=>mutate(cabinID)} disabled={isDeleteing}>Delete</button>
    </div>
  )
}

export default CabinRow