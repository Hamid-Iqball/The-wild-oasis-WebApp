import React from 'react'
import {formatCurrency} from '../../../ViewModal/Utils/helper'
function CabinRow({cabin}) {

    const {image , name,maxCapacity,regulatPrice,discount} = cabin
  return (
    <div className='grid grid-cols-[0.8fr,0.3fr,2fr,1fr,1fr,1fr] place-items-center gap-8 text-sm font-[500] bg-white border-b-[1px] border-[#DDDDDD] rounded-md p-1'>

       <div ><img src={image} alt="" className='' /></div>
       <div className='text-center' style={{fontFamily:"sono"}}>{name}</div>
       <div className='text-start font-normal '>Fits Up to {maxCapacity} people</div>
       <div className='text-[0.9rem]' style={{fontFamily:"sono"}}>{formatCurrency(regulatPrice)}</div>
       <div className='text-[#48807b] pl-4' style={{fontFamily:"sono"}}>{formatCurrency(discount)}</div>
       <button>Delete</button>
    </div>
  )
}

export default CabinRow