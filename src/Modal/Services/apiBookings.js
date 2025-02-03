
import { Page_Size } from "../Utils/constants";
import { getToday } from "../Utils/helper";
import supabase from "./supabase";

// This function is to get all the bookings.
export async function getBookings ({filter,sortBy, page}){
    
// If we are selecting all the things then we will use (*), but if we want to use data from another table as well then we have to use that as well in with in the strings, we can get all data of the other table and also a single value related to the other table as well. e.g we are doing it in the below line.
let query = supabase
.from('bookings')
.select("id,created_at,startDate,endDate, numNights, numGuests,status,totalPrice , cabins(name) , guests(fullName,email)" ,{count:'exact'})
// we can not use useSearchParams() hook here because this is just a normal function but we can use it in theuseBooking hook.


// FILTERING
if(filter !== null) query =query.eq(filter.field , filter.value);


// SORTING
if(sortBy) query = query.order(sortBy.field,{ascending:sortBy.direction === 'asc'})
  // ascending is used as boolean in sorting logic. if it is true then it means (A-Z) and vice versa.


//Pagination server side
if(page) {
const from = (page-1)*Page_Size;
const to  =page*Page_Size-1
query = query.range(from,to)
}


let { data: bookings, error , count } = await query;
if(error){
    console.error(error)
    throw new Error("Bookings could not loaded")
}

return {bookings , count}
}

// This function is only for one individual booking.
export async function getBooking(id) {
  let { data: bookings, error } = await supabase
    .from('bookings')
    .select(`
      *,
      cabins(*),
      guests(*)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking not found');
  }

  return bookings;
}



export async function updateBooking (id,obj){

  
const { data, error } = await supabase
.from('bookings')
.update(obj)
.eq('id', id)
.select()
.single()

if(error){
  throw new Error("Booking could not be updated")
}

return data
}


export async function deleteBooking (id){
  
  const { data, error } = await supabase
  .from('bookings')
  .delete()
  .eq('id', id);

if (error) {
  throw new Error(`Booking could not be deleted: ${error.message}`);
}

return data; // Return deleted rows or null


}



export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

