import { data } from "autoprefixer";
import supabase from "./supabase";

// This function is to get all the bookings.
export async function getBookings (){
    
let { data: bookings, error } = await supabase
.from('bookings')
.select('*')

if(error){
    console.error(error)
    throw new Error("Bookings could not loaded")
}

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

      return data;
    
}