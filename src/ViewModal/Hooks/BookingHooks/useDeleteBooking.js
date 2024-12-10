import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../../Modal/Services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingBooking, mutate: deleteBookingFn } = useMutation({
    mutationFn: deleteBookingAPI,

    onSuccess: (data) => {
      toast.success(`Booking  deleted successfully`);
      queryClient.invalidateQueries(["bookings"]); 
    },

    onError: (error) => {
      toast.error(`Booking could not be deleted: ${error.message}`);
    },
  });

  return { deleteBookingFn, isDeletingBooking };
}
