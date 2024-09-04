import { useEffect } from "react";
import { getCabins } from "../../Modal/Services/apiCabins";


function Cabins() {
useEffect(function(){
  getCabins().then((data)=>console.log(data))
},[])

  return (
  <div>
    <h2>Cabins</h2>
  </div>
  );
}

export default Cabins;
