import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../../Modal/Services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser(){
    const queryClient=useQueryClient()
    // const {user} = useUser()
    const {mutate:updateUser, isLoading:isUpdating} = useMutation({
        mutationFn:updateCurrentUser,
        onSuccess:()=>{

      
            toast.success("User account successfully updated");
            // queryClient.setQueryData(["user"],user) // Manually updating the cache
   
            queryClient.invalidateQueries({
                queryKey:['user']
            })
        },
        onError:(err)=>{
            toast.error(err.message)
        }

    })

    return {updateUser,isUpdating}
}