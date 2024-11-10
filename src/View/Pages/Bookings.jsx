
// import { useBookings } from "../../ViewModal/Hooks/BookingHooks/useBookings";
import BookingTable from "../features/Bookings/BookingTable";
import Spinner from "../UI/Spinner";
import Table from "../UI/Table";



function Bookings() {


  // if(isLoading) return <Spinner/>
  return (
   <div>
   <div className="flex justify-between items-center mb-8">
    <h2 className="text-orange-800 text-3xl font-[500]">Bookings</h2>
    <div>
      TEST/FILTER
    </div>
   </div>
   <BookingTable/>
   </div>
  );
}

export default Bookings;
