import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";


function Cabins() {
//Sending the props to the CabinTableOperations to make it reuseabl
  return (
<section>
  <div className="flex justify-between items-center  my-4  mb-8">
    <h1 className="text-4xl font-semibold text-orange-700">All Cabins</h1>
    <p className="text-[1rem] font-[500]">
    <CabinTableOperations filterField='discount' options={[
      {value:'all' , label:'All'},
      {value:'no-discount' , label:'No discount'},
      {value:'with-discount' , label:'With discount'}]} />
    </p>
  </div>
  <div>
   <CabinTable/>
   <AddCabin/>
  </div>
</section>
  );
}

export default Cabins;
