import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../../Modal/Services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { Page_Size } from "../../../Modal/Utils/constants";


export function useBookings(){
    // This is where we are using out client-side-filtering , the idea is that to pass the object that contains filter and sortby in data in the getBooking.
    const [searchParams] = useSearchParams()
    const  queryClient = useQueryClient()

    // Filter 
    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue==='all' ? null : {field:'status', value:filterValue }

    //Sort 
    const sortByRaw = searchParams.get("sortBy") || 'startDate-desc' //getting data of option from URL
    const [field,direction] = sortByRaw.split("-") // Spliting 
    const sortBy = {field , direction}

    // Pagination
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

    //query
    const {data:{bookings , count}={} , isLoading , isError } = useQuery({ //The data now contains count as well
        queryKey:['bookings', filter, sortBy, page], //The queryKey is unqiue identifier used in React Query to manage and chache queries.it just like the dependecy array of the useQuery.This is one the 
        queryFn:()=>getBookings({filter,sortBy,page})
    })

    const PageCount = Math.ceil(count/Page_Size)
console.log({'PAGECOUNT': PageCount , 'page':page })
    //Pre-Fetching :Fetching the next page before it is actually displayed.This could be done with the help of QueryClinet.
    //Next page prefetching
    if(page < PageCount){
       queryClient.prefetchQuery({
            queryKey:['bookings' , filter,sortBy ,page+1],
            queryFn:()=>getBookings({filter ,sortBy ,page: page+1})
        })
    }

    //previous page prefetching
    if(PageCount>1){
        queryClient.prefetchQuery({
            queryKey:['bookings' , filter,sortBy ,page-1],
            queryFn:()=>getBookings({filter ,sortBy ,page: page-1})
        })
    }

return {bookings, isLoading,isError , count }
}