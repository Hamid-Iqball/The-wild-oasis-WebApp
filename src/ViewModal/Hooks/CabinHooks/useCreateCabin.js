import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../../Modal/Services/apiCabins";
import toast from "react-hot-toast";


export function useCreateCabin(){
    const queryClinet =  useQueryClient()


  // For creating a new Cabin
  const {mutate:createCabin , isLoading:isCreating} =useMutation({
    mutationFn:createEditCabin,
    onSuccess :()=>{
      toast.success("New Cabin Successfully Created");
      queryClinet.invalidateQueries({
        queryKey:['cabins']
      });

    },
      onError:(err)=>{
        toast.error(err.message)
      }
    })

    return {createCabin , isCreating}
}