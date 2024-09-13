import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../../Modal/Services/apiCabins"


export function useCabins(){
    const {isLoading ,data:cabins,isError} = useQuery(
        {
            queryKey:['cabins'],
            queryFn: getCabins
        }
    )


    return {cabins , isLoading, isError}
}