import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../Modal/Services/apiAuth";

export function useUser (){
  const {isLoading,data:user} =   useQuery({
    queryKey:['user'],
    queryFn:getCurrentUser
  })

  // if (isError) throw new Error ('Could not log in')

  return {isLoading, user , isAuthenticated:user?.role==='authenticated'}
}