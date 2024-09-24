
import Button from '../../UI/MainButton'
import Modal from '../../UI/Modal'
import CreateCabinForm from './CreateCabinForm'

function AddCabin() {
return (

<Modal>
<Modal.Open opens='cabin-form'> 
<button className="border border-grey-500 py-3 px-5 text-slate-50 bg-orange-700 font-semibold rounded-md ">Add new Cabin</button>
</Modal.Open>
<Modal.Window name='cabin-form'>
  <CreateCabinForm/>
</Modal.Window>
</Modal>

)

}

export default AddCabin


// Clone Element:In React CloneElement is used to create coopy of a react element,While alowing you to modify it's props and childrens.It is usefull when you need to modify or extend the props of a child element without changing the original element or component it self.