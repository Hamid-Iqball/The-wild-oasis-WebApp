import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
<section>
  <div className="flex justify-between items-center  my-4  mb-8">
    <h1 className="text-4xl font-semibold text-orange-700">All Cabins</h1>
    <p className="text-[1rem] font-[500]">Filter/Sort</p>
  </div>
  <div>
   <CabinTable/>
   <AddCabin/>
  </div>
</section>
  );
}

export default Cabins;
