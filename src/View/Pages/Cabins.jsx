import CabinTable from "../features/cabins/CabinTable";


function Cabins() {


  return (
<section>
  <div className="flex justify-between items-center mb-16">
    <h1 className="text-[2.7rem] font-[600] text-orange-800">All Cabins</h1>
    <p className="text-[1.5rem] font-[500]">Filter/Sort</p>
  </div>
  <div>
    <CabinTable/>
  </div>
</section>
  );
}

export default Cabins;
