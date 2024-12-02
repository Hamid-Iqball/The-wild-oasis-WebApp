import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../../Modal/Services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
    //read the id from the URL and to read data from the URL we have to uee useParams() hook from react-router-dom
    const {bookingId} = useParams()
    const {isLoading,
        data:booking,
        error 
    } = useQuery({
        queryKey:['booking'],
        queryFn:()=>getBooking(bookingId),
        retry:false, //By default React query will fetch data three times, incase that it fails in the beginning.But sometimes that might not make any sense for example here so thats is why we are making it false.
    })


return {isLoading,booking,error}

}