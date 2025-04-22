import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../../Modal/Services/apiBookings";

export function useTodayActivity(){
  const {isLoading, data:stays}  = useQuery({
        queryFn:getStaysTodayActivity,
        queryKey:["today-activity"]
    })

    return {isLoading, stays
        
    }
}