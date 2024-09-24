import React, { useState } from 'react'
import Button from '../../UI/MainButton'
import Modal from '../../UI/Modal'
import CreateCabinForm from './CreateCabinForm'

function AddCabin() {
return (

<Modal>
<Modal.Open opens='cabin-form'> 
  <Button>Add new Cabin</Button>
</Modal.Open>
<Modal.Window name='cabin-form'>
  <CreateCabinForm/>
</Modal.Window>
</Modal>

)


// const [isOpenModal, setIsOpenModal] =useState(false)
// function handleChange(){
//  setIsOpenModal(show=>!show)
// }
//   return (
//     <div>
//         <Button handleChange={handleChange} >Add new Cabin</Button>
//         {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)} ><CreateCabinForm  onCloseModal={()=>setIsOpenModal(false)}/> </Modal>}
//     </div>
//   )
}

export default AddCabin