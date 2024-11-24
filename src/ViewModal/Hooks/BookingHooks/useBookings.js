import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../Modal/Services/apiBookings";
import { useSearchParams } from "react-router-dom";


export function useBookings(){
    // This is where we are using out client-side-filtering , the idea is that to pass the object that contains filter and sortby in data in the getBooking.
    const [searchParams] = useSearchParams()

    // Filter 
    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue==='all' ? null : {field:'status', value:filterValue }

    //Sort 
    const sortByRaw = searchParams.get("sortBy") || 'startDate-desc' //getting data of option from URL
    const [field,direction] = sortByRaw.split("-") // Spliting 
    const sortBy = {field , direction}

    // Pagination
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

    const {data:{bookings , count}={} , isLoading , isError } = useQuery({ //The data now contains count as well
        queryKey:['bookings', filter, sortBy, page], //The queryKey is unqiue identifier used in React Query to manage and chache queries.it just like the dependecy array of the useQuery.This is one the 
        queryFn:()=>getBookings(filter,sortBy,page)
    })

console.log(bookings)
return {bookings, isLoading,isError , count }
}