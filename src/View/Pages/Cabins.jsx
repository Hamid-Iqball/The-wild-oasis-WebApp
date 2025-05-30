import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";


import Filter from "../UI/Filter";
import SortingComp from "../UI/SortingComp";


function Cabins() {

 
//Sending the props to the CabinTableOperations to make it reuseabl
  return (
<section>
  <div className="flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center gap-2   my-1  mb-8">
    <h1 className="text-3xl font-[500] text-customOrange-800 dark:text-customOrange-400">All Cabins</h1>
    <div className="text-[1rem] font-[500]  flex sm:flex-row items-start   sm:items-center gap-3">

    <Filter filterField='discount'
    filteringOptions={ [
      {value:'all' , label:'All'},
      {value:'no-discount' , label:'No discount'},
      {value:'with-discount' , label:'With discount'}]
      }
      
    />

    <SortingComp sortingOptions={[
      {value:'name-desc',label:'Sort by name (A-Z)'},
      {value:'name-asc',label:'Sort by name (Z-A)'},
      {value:'regularPrice-asc',label:'Sort by price (low first)'},
      {value:'regularPrice-desc',label:'Sort by price (high first)'},
      {value:'maxCapacity-asc',label:'Sort by capacity (low first)'},
      {value:'maxCapacity-desc',label:'Sort by capacity (high first)'},
    ]}/>
   
    </div>
    
  </div>
  <div>
   <CabinTable/>
   <AddCabin/>
  </div>
</section>
  );
}

export default Cabins;
