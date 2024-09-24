

import CreateCabinForm from './CreateCabinForm'
import { useDeleteCabin } from '../../../ViewModal/Hooks/CabinHooks/useDeleteCabin'
import { HiPencil, HiSquare2Stack } from 'react-icons/hi2'
import { HiTrash } from 'react-icons/hi'
import { useCreateCabin } from '../../../ViewModal/Hooks/CabinHooks/useCreateCabin'
import { formatCurrency } from '../../../Modal/Utils/helper'
import Modal from '../../UI/Modal'
import ConfirmDelete from "../../UI/ConfrmDelete"



function CabinRow({cabin}) {
    const {isDeleteing , deleteCabin} = useDeleteCabin()

    const {isCreating:isDuplicating , createCabin} = useCreateCabin()
    const {image ,id:cabinID, name,maxCapacity,regularPrice,discount,description} = cabin

    function handleDuplicate(){
     createCabin({
        name:`Copy of ${name}`, maxCapacity, regularPrice, discount, image, description
      })
    }
  return (
   
    
    
    
    <div className='grid grid-cols-[0.8fr,1fr,2fr,1fr,1fr,1fr] place-items-center justify-items-start gap-8 text-sm font-[500] bg-white border-b-[1px] border-[#DDDDDD] rounded-md p-[1px]'>

       <div className='w-28 bg-white  border-slate-400 border'><img src={image} alt="" className='w-28 ' />
       </div>
       <div className='text-start font-semibold' style={{fontFamily:"sono"}}>{name}</div>
       <div className='text-start font-normal '>Fits Up to {maxCapacity} people</div>
       <div className='text-[0.9rem] font-semibold' style={{fontFamily:"sono"}}>{formatCurrency(regularPrice)}</div>
       <div className='text-green-500 pl-4 font-semibold' style={{fontFamily:"sono"}}>{discount? formatCurrency(discount) : <span>&mdash;</span> }</div>
       <div>
      <Modal>
      <button className=' py-1 px-2 border mr-1' onClick={handleDuplicate} disabled={isDuplicating}><HiSquare2Stack/></button>
      <Modal.Open opens='edit-form'>
      <button className=' py-1 px-2 border mr-1'  ><HiPencil/></button>
      </Modal.Open>
        <Modal.Window name='edit-form'>
        <CreateCabinForm cabinToEdit={cabin}/>
      </Modal.Window>
      <Modal.Open opens='delete-cabin'>

       <button className=' py-1 px-2 border ' > <HiTrash/></button>
      </Modal.Open>
      <Modal.Window name='delete-cabin'>
     <ConfirmDelete disabled={isDeleteing}
     onConfirm ={()=>deleteCabin(cabinID)} />
        </Modal.Window>  
    </Modal>
       </div>
    </div>
   
  )
}

export default CabinRow