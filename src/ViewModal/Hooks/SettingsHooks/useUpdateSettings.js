import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettigs as updateSettingApi } from "../../../Modal/Services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting(){
 const queryClinet = useQueryClient()
  const {mutate:updateSetting , isLoading:isUpdating} =useMutation({
    mutationFn :updateSettingApi,
    onSuccess:()=>{
      toast.success("Settings successfully updated")
      queryClinet.invalidateQueries({
        queryKey:['settings']
      }) 
    },
    onError:(error)=>{
      toast.error(error.message)
    }
  })

  return {updateSetting,isUpdating}
}