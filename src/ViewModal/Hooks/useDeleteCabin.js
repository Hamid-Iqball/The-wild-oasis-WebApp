import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteCabin as DeleteCabinApi } from "../../Modal/Services/apiCabins"

export function useDeleteCabin(){

    const queryClient = useQueryClient()
    const {isLoading:isDeleteing , mutate:deleteCabin} = useMutation({
    mutationFn:DeleteCabinApi,
    onSuccess:()=>{
       toast.success("Successfully deleted")
        queryClient.invalidateQueries({
        queryKey:["cabins"]
    })},
    // Here it has access to the exact error message that we have defined in our mutation function
    onError:(err)=>{
      toast.error(err.message)
    }
})

return {isDeleteing , deleteCabin}
}