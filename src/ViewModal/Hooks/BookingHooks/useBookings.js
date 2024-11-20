import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../Modal/Services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { Field } from "@chakra-ui/react";
import { RxValue } from "react-icons/rx";

export function useBookings(){
    // This is where we are using out client-side-filtering , the idea is that to pass the object that contains filter and sortby in data in the getBooking.
    const [searchParams , setSearchParams] = useSearchParams()

    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue==='all' ? null : {field:'status', value:filterValue , method:'eq'}

    const {data:bookings , isLoading , isError} = useQuery({
        queryKey:['bookings', filter], //The queryKey is unqiue identifier used in React Query to manage and chache queries.it just like the dependecy array of the useQuery.This is one the 
        queryFn:()=>getBookings(filter)
    })

console.log(bookings)
return {bookings, isLoading,isError}
}