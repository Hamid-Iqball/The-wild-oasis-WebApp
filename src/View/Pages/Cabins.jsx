import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

import FiltersAndSortingOperations from "../UI/FiLtersAndSortingOperations";


function Cabins() {

 
//Sending the props to the CabinTableOperations to make it reuseabl
  return (
<section>
  <div className="flex justify-between items-center  my-1  mb-8">
    <h1 className="text-3xl font-[500] text-orange-800">All Cabins</h1>
    <p className="text-[1rem] font-[500]">

    <FiltersAndSortingOperations filterField='discount' filteringOptions={ [
    {value:'all' , label:'All'},
    {value:'no-discount' , label:'No discount'},
    {value:'with-discount' , label:'With discount'}]
    }
    sortingOptions={[
      {value:'name-desc',label:'Sort by name (A-Z)'},
      {value:'name-asc',label:'Sort by name (Z-A)'},
      {value:'regularPrice-asc',label:'Sort by price (low first)'},
      {value:'regularPrice-desc',label:'Sort by price (high first)'},
      {value:'maxCapacity-asc',label:'Sort by capacity (low first)'},
      {value:'maxCapacity-desc',label:'Sort by capacity (high first)'},
    ]}
      
      
      />
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
