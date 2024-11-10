import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../Modal/Services/apiBookings";

export function useBookings(){
    const {data:bookings , isLoading , isError} = useQuery({
        queryKey:['bookings'],
        queryFn:getBookings
    })

    console.log(bookings)
    return {bookings, isLoading,isError}
}