import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../UI/MainButton";



function Cabins() {

const [showForm, setShowForm] =useState(false)
function handleChange(){
 setShowForm(show=>!show)
}
  return (
<section>
  <div className="flex justify-between items-center  my-4  mb-8">
    <h1 className="text-4xl font-semibold text-orange-700">All Cabins</h1>
    <p className="text-[1rem] font-[500]">Filter/Sort</p>
  </div>
  <div>
    <CabinTable/>
   <Button handleChange={handleChange} >Add new Cabin</Button>
  {showForm && <CreateCabinForm />}
  </div>
</section>
  );
}

export default Cabins;
