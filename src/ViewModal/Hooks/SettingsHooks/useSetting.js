import { useQuery} from "@tanstack/react-query";
import { getSettings } from "../../../Modal/Services/apiSettings";

export function useSettings(){
   const {isLoading,isError,data:settings} = useQuery({
    queryKey:['settings'],
    queryFn:getSettings
   })

   return {isLoading,isError,settings}
}