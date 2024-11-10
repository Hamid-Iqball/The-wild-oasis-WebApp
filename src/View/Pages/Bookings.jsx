
// import { useBookings } from "../../ViewModal/Hooks/BookingHooks/useBookings";
import BookingTable from "../features/Bookings/BookingTable";
import Spinner from "../UI/Spinner";
import Table from "../UI/Table";



function Bookings() {


  // if(isLoading) return <Spinner/>
  return (
   <div>
    Bookings
   <BookingTable/>
   </div>
  );
}

export default Bookings;
