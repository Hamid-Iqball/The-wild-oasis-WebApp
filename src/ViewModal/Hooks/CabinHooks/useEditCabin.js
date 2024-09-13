import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../../Modal/Services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(){

    const queryClinet =  useQueryClient()
       // For editing an existing cabin
       const {mutate:editCabin , isLoading:isEditing} =useMutation({
        mutationFn:({newCabinData,id})=>createEditCabin(newCabinData,id),
        onSuccess :()=>{
          toast.success("cabin successfully edited");
          queryClinet.invalidateQueries({
            queryKey:['cabins']
          });
    
        },
          onError:(err)=>{
            toast.error(err.message)
          }
        })
    return {editCabin , isEditing}
}