
import supabase from "./supabase";

// This function is to get all the bookings.
export async function getBookings (filter,sortBy){
    
let query = supabase
.from('bookings')
// If we are selecting all the things then we will use (*), but if we want to use data from another table as well then we have to use that as well in with in the strings, we can get all data of the other table and also a single value related to the other table as well. e.g we are doing it in the below line.
.select("id,created_at,startDate,endDate, numNights, numGuests,status,totalPrice , cabins(name) , guests(fullName,email)" ,{count:'exact'})
// we can not use useSearchParams() hook here because this is just a normal function but we can use it in theuseBooking hook.


// FILTERING
if(filter) query =query[filter.method || 'eq'](filter.field , filter.value);
// SORTING
if(sortBy) query = query.order(sortBy.field,{ascending:sortBy.direction === 'asc'})
  // ascending is used as boolean in sorting logic. if it is true then it means (A-Z) and vice versa.
let { data: bookings, error , count } = await query;
if(error){
    console.error(error)
    throw new Error("Bookings could not loaded")
}

return {bookings , count}
}

// This function is only for one individual booking.
export async function getBooking(id){
 
    let { data: bookings, error } = await supabase
      .from('bookings')
      .select('*','cabins(*), guests(*)')
      .eq("id",id)
      .single()

      if (error){
        console.error(error)
        throw new Error ("Bookings not found")
      }

      return bookings;
    
}