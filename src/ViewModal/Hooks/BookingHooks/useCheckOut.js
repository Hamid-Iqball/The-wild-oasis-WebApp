import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../../Modal/Services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//This is the way how we update (mutate) data on server, on success and on error is just like a  try/catch .
export function useCheckOut (){
    
    const queryClinet = useQueryClient();
    const navigate = useNavigate()
     const {mutate:checkOut , isLoading:isCheckingOut} = useMutation({
      //Here is the function that has an api request for updating the booking .
       mutationFn: (bookingId)=>updateBooking(bookingId,{
        status:'checked-out'
       }),

       onSuccess :(data)=>{
        toast.success(`Booking #${data.id} successfully checked out`)
        queryClinet.invalidateQueries({active:true})
        navigate('/bookings')
       },

       onError:()=>{
        toast.error(`There is an error while checking out`)
       }
     })

     return {checkOut , isCheckingOut}
}